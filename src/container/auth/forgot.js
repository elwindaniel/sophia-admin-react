import {useHistory } from "react-router-dom";
import {useState} from "react";




function Forgot() {

    //const router = useRouteMatch();
    const History = useHistory ();

    let initialState = {
          
        PhoneNumber: "",
      };

      const [data, setData] = useState(initialState);
      const [error, setError] = useState({     
       PhoneNumber:false,   
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
        if (data.PhoneNumber === "" ) {
        checkError();          
        }
        // else if (!PhoneNumberRegex.test(data.PhoneNumber)) {
        // setError({PhoneNumber: true, msg: 'please enter a valid PhoneNumber'})
        // } 
        else {
        console.log(data);
        History.push ('/otp')
        }

        };
        // const PhoneNumberRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;

        const checkError = () => {
          setError({
          PhoneNumber: data.PhoneNumber === "" ? true : false,
          
          msg: "please fill valid data",
          });
          
          };

    return (
        <div className="auth">
        <div className="auth-box">
        <form   onSubmit = {handleFormSubmit} >
            <div className="auth-title">Forgot Password</div>
            <div className="input-group">
                <label>PhoneNumber</label>
                <input 
                id="PhoneNumber" onChange={handleChange}
                value={data.PhoneNumber}/>
                {error.PhoneNumber ? <div style={{color:"red", textAlign:"left"}} > {error.msg} </div> : null}
            </div>
        
            <button> Submit</button>
            <div   onClick={() => {History.push ('/')}}   className="forgot"> Back to Login </div>
            </form>
        </div>
    </div>
      
    )
}

export default Forgot
