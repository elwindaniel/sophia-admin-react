import {useHistory } from "react-router-dom";
import {useState} from "react";




function ResetPassword() {

    //const router = useRouteMatch();
    const History = useHistory ();

    let initialState={
        Newpassword: "",
        
    };
    
    const [data, setData] = useState(initialState);
       const [error, setError] = useState({     
        Newpassword:false,
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
           if (data.Newpassword === ""  ) {
           checkError();          
           }
            else {
           console.log(data);
           History.push ('/')
           
           }
           };
           
 
           const checkError = () => {
             setError({
                Newpassword: data.Newpassword === "" ? true : false,
             msg: "Please enter New Password",
             });
             
             };

    return (
        <div className="auth">
        <div className="auth-box">
        <form   onSubmit = {handleFormSubmit} >
            <div className="auth-title">Enter New Password</div>
            <div className="input-group">
                <label>Password</label>
                <input 
                id="Newpassword" onChange={handleChange}
                value={data.Newpassword}/>
                {error.Newpassword ? <div style={{color:"red", textAlign:"left"}} > {error.msg} </div> : null}
            </div>
        
            <button > Submit</button>
           
            </form>
        </div>
    </div>
      
    )
}

export default ResetPassword