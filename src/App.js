import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import RestuarantMenu from "./components/RestuarantMenu";
import { ShimmerUI } from "./components/ShimmerUI";
import Footer from "./components/Footer";

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

const Grocery = lazy(() => import ("./components/Grocery"))

const AboutUs = lazy(() => import ("./components/AboutUs"))

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
             element: <Suspense fallback = {<ShimmerUI/>}><AboutUs/></Suspense>
            },
            {
             path: "/restuarants/:resID",
             element: <RestuarantMenu/>
            },
            {
             path: "/DineosGrocery",
             element: <Suspense fallback = {<ShimmerUI/>}><Grocery/></Suspense>
            }

        ],
        errorElement: <Error/>
    },
    
])

//IMP part for rendering our whole piece of code 
const root3 = ReactDOM.createRoot(document.getElementById("root"))
root3.render(<RouterProvider router={appRouter}/>);
