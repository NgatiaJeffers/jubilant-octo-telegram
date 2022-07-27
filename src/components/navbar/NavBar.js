import React from "react";
import { Link, NavLink } from "react-router-dom";

import Logo from "../../images/logo.png";

class Navbar extends React.Component {
    render() {
    return (
        <nav>
            <div className='nav-container flex'>
                <div className='nav-left flex'>
                    <div className='mobile flex'>
                        <div className='logo'>
                            <img src={Logo}/>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="nav-links flex">
                        <NavLink 
                            to="/"
                            className={({isActive}) => (isActive ? "active" : "inactive")}>
                                <></>
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
    }
}

export default Navbar;