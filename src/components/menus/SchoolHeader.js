import { MdMenu, MdAccountCircle }  from 'react-icons/md'
import React from 'react'
import logoImg from "../../assests/logo/logo.png";

function SchoolHeader() {
    return (
        <div className="mainclass">
            <div>
            <img className= "image"  src= {logoImg} alt="logo" /> 
            </div>
            <div className="headcontents" > 
                <p>Schools</p>
                <p>Categories</p>
                <p>Boards</p>
                <p>Users</p>
            </div>
            <div>
            <div className="user">
                <MdAccountCircle style={{height:"40px",}}/>
                
                <p>Elwin</p>
            </div>
            <MdMenu className="menuicon" style={{height:"40px", width:"40px" }}/>
            </div>
        </div>

    )
}

export default SchoolHeader
