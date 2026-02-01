import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

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
