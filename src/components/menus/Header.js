import React from 'react'
import { MdMenu, MdAccountCircle } from 'react-icons/md'



function Header() {
    return (
        <div className="header">
            <div>
                <img className="header-image" src={"https://appsophia.com/assets/illustrations/logo/sophia.png"} alt="logo" />
            </div>
            <div className="header-menus" >
                <p>Schools</p>
                <p>Categories</p>
                <p>Boards</p>
                <p>Users</p>
            </div>
            <div>
                <div className="header-user-icon">
                    <MdAccountCircle  style={{ height: "40px", }} />
                    <p>Elwin</p>
                </div>
                <MdMenu className="header-menu-icon" />
            </div>
        </div>

    )
}

export default Header;