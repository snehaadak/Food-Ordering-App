import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { AboutUs } from "./components/AboutUs";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ContactUs } from "./components/ContactUs";
import { Error } from "./components/Error";
import { RestuarantMenu } from "./components/RestuarantMenu";

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
             path: "/",
             element: <Body/>
            },
            {
             path: "/about",
             element: <AboutUs/>
            },
            {
             path: "/contact",
             element: <ContactUs/>
            },
            {
             path: "/restuarants/:resID",
             element: <RestuarantMenu/>
            }
        ],
        errorElement: <Error/>
    },
    
])

//IMP part for rendering our whole piece of code 
const root3 = ReactDOM.createRoot(document.getElementById("root"))
root3.render(<RouterProvider router={appRouter}/>);
