import {useHistory } from "react-router-dom";
import {useState} from "react";




function Otp() {

    //const router = useRouteMatch();
    const History = useHistory ();

    let initialState={
        otp: "",
        
    };
    
    const [data, setData] = useState(initialState);
       const [error, setError] = useState({     
        otp:false,
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
           if (data.otp === ""  ) {
           checkError();          
           }
            else {
           console.log(data);
           History.push ('/reset-password')
           
           }
           };
           
 
           const checkError = () => {
             setError({
             otp: data.otp === "" ? true : false,
             msg: "Please enter the OTP",
             });
             
             };

    return (
        <div className="auth">
        <div className="auth-box">
        <form   onSubmit = {handleFormSubmit} >
            <div className="auth-title">Enter OTP</div>
            <div className="input-group">
                <label>OTP</label>
                <input type="text"
                id="otp" onChange={handleChange}
                value={data.otp}/>
                {error.otp ? <div style={{color:"red", textAlign:"left"}} > {error.msg} </div> : null}
            </div>
        
            <button > Submit</button>
            <div className="forgot"> Resend OTP </div>
            </form>
        </div>
    </div>
      
    )
}

export default Otp