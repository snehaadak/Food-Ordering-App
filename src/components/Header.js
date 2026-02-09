import { useState } from "react";
import AppLogo from "../utils/AppLogo.png"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

 const [loginButton, setloginButton] = useState("Login")

 const onlineStatus = useOnlineStatus()

    return (
        <div className="flex justify-between border m-3 rounded-3xl shadow shadow-gray-400">
            <div className="Logo">
                <img className="w-30 pt-2 pl-2"
                    src={AppLogo} 
                    alt="Dineo Logo" 
                />
            </div>
            
            <div className="navItems">
                <ul className="flex p-4 m-2">
                    <li className="p-4 font-serif">{onlineStatus ? "🟢Online" : "🔴Offline" }</li>
                    <li className="p-4 font-serif"><Link to="/">Home</Link></li>
                    <li className="p-4 font-serif"><Link to="/about">About Us</Link></li>
                    <li className="p-4 font-serif"><Link to="/DineosGrocery">Grocery</Link></li>
                    <li className="p-4 font-serif">Cart</li>
                    <li className="p-4 font-serif">
                    <button className="border-2 w-20 bg-gray-300 rounded-2xl hover:cursor-pointer" onClick={()=>{
                        loginButton === "Login" ? 
                        setloginButton("Logout"):
                        setloginButton("Login")}
                    }
                        >{loginButton}</button></li>
                </ul>
            </div>   
        </div>
    )
}

export default Header;