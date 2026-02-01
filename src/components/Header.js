import AppLogo from "../utils/AppLogo.png"

const SearchBar = () => {
    return (
        <div>
            <h5>Search Bar</h5>
        </div>
    )
}

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
            <div className="searchBar">
                <SearchBar/>
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