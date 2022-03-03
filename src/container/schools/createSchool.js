import React from 'react'
import {Alert, Grid, } from '@mui/material'
import {useState} from "react";
import {HiEyeOff, HiEye}  from 'react-icons/hi'
import apiService from '../../api/apiService';

function CreateSchool(props) {
     console.log(props)
     let edit = props.edit
    let initialState = {
        schoolName: edit? edit.schoolName : "",
        phoneNumber: edit? edit.phoneNumber : "",
        email: edit? edit.email : "",
        password: "",
        schoolAddress: edit? edit.schoolAddress : "",
        userType:"SchoolAdmin"

    };

    const [data, setData] = useState(initialState);
    const [editedData,setEditedData] = useState({});
    const [error, setError] = useState({phoneNumber: false, password: false, msg: ""});
    
    const [passwordShown, setPasswordShown] = useState();
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };


    const handleChange = (e) => {
        if (edit._id){
            const newEditedData = {
                ...editedData
            };
            newEditedData[e.target.id] = e.target.value;
            setEditedData(newEditedData)
        } 
        const newData = {
            ...data
        };
        newData[e.target.id] = e.target.value;
       
          setData(newData);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (edit._id){
            apiService.EditSchoolAdmin(editedData,edit._id)
            .then(res =>{
             console.log(res)
             props.onSuccess()
            } ).catch (error => {console.log(error)
            setError({alert:true}) 
            setTimeout(() => {
                setError({alert:false}) 
            }, 5000);
            })

        }else{
        if (data.phoneNumber === "" || data.password === "") {
            checkError();
        } else if (!emailRegex.test(data.email)) {
            setError({email: true, msg: 'please enter a valid Email'})
        } else {
            console.log(data);
            
            apiService.CreateSchoolAdmin(data)
            .then(res =>{
             console.log(res)
             props.onSuccess()
            } ).catch (error => {console.log(error)
            setError({alert:true}) 
            setTimeout(() => {
                setError({alert:false}) 
            }, 5000);
            })
        
        }}
    };
        const emailRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;

 const checkError = () => {
        setError({
            schoolName: data.schoolName === "" ? true : false,
            phoneNumber: data.phoneNumber === "" ? true : false,
            email: data.email === "" ? true : false,
            password: data.password === "" ? true : false,
            schoolAddress: data.schoolAddress === "" ? true : false,
            
            msg: "please fill valid data"
        });

    };

    return (
        <div>
            <form onSubmit = {handleFormSubmit}>
          
               <div style={{textAlign:"center"}} className="form-title"> {edit._id? "Edit" : "Create"} School</div>
               {error.alert ?<Alert severity="error">Phone/Email already exists ! </Alert> : null}
          

            <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
            <div className="input-group">
                    <label>School Name</label>
                    <input type="text"
                    id="schoolName" onChange={handleChange}
                    value={data.schoolName}/>
                    {error.schoolName ? <div style={{color:"red", textAlign:"left"}} > {error.msg} </div> : null}
            </div>

            </Grid>
             <Grid item xs={12} md={6}>
                    <div className="input-group">
                    <label>Phone Number</label>
                    <input 
                    id="phoneNumber" onChange={handleChange}
                    value={data.phoneNumber}/>
                    {error.phoneNumber ? <div style={{color:"red", textAlign:"left"}} > {error.msg} </div> : null}
                    </div>
            </Grid>

            <Grid item xs={12} md={6}>
                    <div className="input-group">
                    <label>Email</label>
                    <input 
                    id="email" onChange={handleChange}
                    value={data.email}/>
                    {error.email ? <div style={{color:"red", textAlign:"left"}} > {error.msg} </div> : null}
                    </div>
            </Grid>

            <Grid item xs={12} md={6}>
            <div className="input-group">
                    <label>Password</label>
                                        
                    <div className="input"> <input  style={{border:"none",height:"40px"}} type = {passwordShown ? "text" : "password"}
                     id="password" onChange={handleChange}
                     value={data.password} />
                     
                <div onClick={togglePasswordVisiblity}> 
                {passwordShown ?  <  HiEye style={{height:"25px", paddingRight:"4px" }} className="eye" /> : <HiEyeOff style={{height:"25px", paddingRight:"4px" }} className="eye"/> } 
                </div> 
                     </div>
                     {error.password ? <div style={{color:"red", textAlign:"left"}} > {error.msg} </div> : null}
                </div>
                   
            </Grid>

            <Grid item xs={12} md={12}>
                    <div className="input-group">
                    <label>Address</label>
                    <input 
                    id="schoolAddress" onChange={handleChange}
                    value={data.schoolAddress}/>
                    {error.schoolAddress ? <div style={{color:"red", textAlign:"left"}} > {error.msg} </div> : null}
                    </div>
            </Grid>
  
            </Grid>
            <button> Submit</button>
                  
            </form>
        </div>
    )
}

export default CreateSchool;




