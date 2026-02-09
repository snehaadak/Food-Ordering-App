import User from "./User"
import UserClass from "./UserClass"
import React from "react"

import User from "./User";
import UserClass from "../components/UserClass";

const AboutUs = () => {
    return (
        <div className="ml-7 mt-7 ">
            <h1 className="font-serif text-2xl mb-5 p-3">About the Developer</h1>
            <User content="functional component"/>
            <UserClass content="Class based component"/>
        </div>
    );
};

export default AboutUs;

// export const AboutUs = () => {
//     return (
//         <div>
//             <h1>About Us</h1>
//             <User name="Sneha Adak"/>
//             <UserClass name="Sneha Adak"/>
//         </div>
//     )
// }