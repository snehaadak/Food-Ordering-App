import { useState } from "react";
import AppLogo from "../utils/AppLogo.png"

const Header = () => {

 const [loginButton, setloginButton] = useState("Login")


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
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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