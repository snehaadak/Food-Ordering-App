import User from "./User"
import UserClass from "./UserClass"
import React from "react"

export class AboutUs extends React.Component{

    constructor(){
        super()
        console.log("Parent Constructor")
    }
    render(){
        console.log("Parent Render")
        return(
            <div>
                <h1>About Us</h1>
                <User name="Sneha Adak"/>
                <UserClass name="Sneha Adak"/>
            </div>
        )
    }
}

// export const AboutUs = () => {
//     return (
//         <div>
//             <h1>About Us</h1>
//             <User name="Sneha Adak"/>
//             <UserClass name="Sneha Adak"/>
//         </div>
//     )
// }