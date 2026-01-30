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
                <h1>logo</h1>
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

const RestroCard = () =>{
    return (
        <div className="RestroCard">
            <h3>Dominos</h3>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="resContainer">
                <RestroCard/>
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
