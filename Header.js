import React from "react";
import "./Header.css";
function Header(){
    return(
        <div className="header">
            <div className="header_left">
               
                <img src="C:\Users\Sonali\Downloads\ship logo (1).png" />
                <h1 >BRIGHTEN SHIPMENT COMPANY</h1>
            </div>
            <div className="header__center">
            <ul className="header__lists">
                <li><a href="#">Home</a></li>
                <li><a href="#">Service</a></li>
                <div className="header_centerMenu">
                    <button>Projects</button>
                    
                </div>
                <li><a href="#">Potfolio</a></li>
            </ul>
            </div>
            <div className="header_right">
                <button>Sign up</button>

                <button>Sign In</button>
            </div>
        </div>
    )
}
export default Header;
