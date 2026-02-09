import { useState } from "react";
import AppLogo from "../utils/AppLogo.png"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

 const [loginButton, setloginButton] = useState("Login")

 const onlineStatus = useOnlineStatus()

    return (
        <div className="header">
            <div className="Logo">
                <img 
                    src={AppLogo} 
                    alt="Dineo Logo" 
                    className="appLogo"
                />
            </div>
            
            <div className="navItems">
                <ul>
                    <li>
                        {onlineStatus ? "🟢Online" : "🔴Offline" }
                    </li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        loginButton === "Login" ? 
                        setloginButton("Logout"):
                        setloginButton("Login")}
                    }
                        >{loginButton}</button>
                </ul>
            </div>   
        </div>
    )
}

export default Header;