import React from "react";
import ReactDOM from "react-dom/client";

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
                <h1>Dineo Logo</h1>
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

const RestroCard = (props) =>{
    return (
        <div className="RestroCard">
            <img className="restroBanner" alt="restroBanner"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/11/11/cbf23535-b379-4d95-a0ca-32b06b268a13_25459.JPG"></img>
            <h3>{props.resName}</h3>
            <h4>{props.cuisines}</h4>
            <h5>{props.ratings}</h5>
            <h5>{props.eta}</h5>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="resContainer">
                <RestroCard 
                resName="Dominos" 
                cuisines="Italian, Pizzas, Sandwiches" 
                ratings="4.3" 
                eta="25-30 mins"/>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}


//IMP part for rendering our whole piece of code 
const root3 = ReactDOM.createRoot(document.getElementById("root"))
root3.render(<AppLayout/>);
