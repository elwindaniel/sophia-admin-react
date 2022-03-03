import { HiEyeOff, HiEye } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import ApiService from "../../api/apiService";

function Login() {
  const History = useHistory();

  const [passwordShown, setPasswordShown] = useState();
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  let initialState = {
    phoneNumber: "",
    password: "",
    userType: "SuperAdmin",
  };

  const [data, setData] = useState(initialState);
  const [error, setError] = useState({
    phoneNumber: false,
    password: false,
    msg: "",
  });

  const handleChange = (e) => {
    const newData = {
      ...data,
    };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (data.phoneNumber === "" || data.password === "") {
      checkError();
    } else {
      console.log(data);
      ApiService.Login(data)
        .then((res) => {
          console.log(res);
          localStorage.setItem("token", res.data.data.token);
        })
        .catch((error) => console.log(error));
    }
  };
  // const phoneNumberRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;

  const checkError = () => {
    setError({
      phoneNumber: data.phoneNumber === "" ? true : false,
      password: data.password === "" ? true : false,
      msg: "please fill valid data",
    });
  };

  return (
    <div className="auth">
      <div className="auth-box">
        <form onSubmit={handleFormSubmit}>
          <div className="auth-title">Login</div>
          <div className="input-group">
            <label>PhoneNumber</label>
            <input
              id="phoneNumber"
              onChange={handleChange}
              value={data.phoneNumber}
            />
            {error.phoneNumber ? (
              <div style={{ color: "red", textAlign: "left" }}>
                {error.msg}
              </div>
            ) : null}
          </div>
          <div className="input-group">
            <label>Password</label>
            <div className="input">
              <input
                id="password"
                style={{ border: "none", height: "40px" }}
                type={passwordShown ? "text" : "password"}
                onChange={handleChange}
                value={data.password}
              />
              <div onClick={togglePasswordVisiblity}>
                {passwordShown ? (
                  <HiEye
                    style={{ height: "25px", paddingRight: "4px" }}
                    className="eye"
                  />
                ) : (
                  <HiEyeOff
                    style={{ height: "25px", paddingRight: "4px" }}
                    className="eye"
                  />
                )}
              </div>
            </div>
            {error.password ? (
              <div style={{ color: "red", textAlign: "left" }}>
                {error.msg}
              </div>
            ) : null}
          </div>
          <button> Login</button>
          <div
            onClick={() => {
              History.push("/forgot-password");
            }}
            className="forgot"
          >
            Forgot Password ?
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
