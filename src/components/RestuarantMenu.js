import { ShimmerUI } from "./ShimmerUI";
import { useParams } from "react-router";
import useResturantMenu from "../utils/useRestuarantMenu";


export const RestuarantMenu = () =>{

    const {resID} = useParams();
    const resInfo = useResturantMenu(resID)

     if(resInfo===null) return <ShimmerUI/>

     

    const {name, avgRating, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info
    //const {carousel} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card


    return (


    <div className ="menu">

        <div className="about-restro">
            <h2>{name} (Rating: {avgRating})</h2>
            <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>
        </div>

{/* The below part is not working as the swiggys api in someplaces uses the carousel and in some its using itemcards */}

            {/* {carousel?.map(item => (
                 <div className="menu-container" key = {item.dish.info.id}>
                    <div className="menu-cards">
                        <h3>{item.dish.info.name}</h3>
                        <p>{item.dish.info.description}</p>
                    </div>
                </div> )
            )} */}

        </div>
);};