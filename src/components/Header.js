import AppLogo from "../utils/AppLogo.png"

const Header = () => {
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
                </ul>
            </div>   
        </div>
    )
}

export default Header;