import { ShimmerUI } from "./ShimmerUI";
import { useParams } from "react-router";
import useResturantMenu from "../utils/useRestuarantMenu";



const RestuarantMenu = () =>{

    // const [resInfo , setresInfo] = useState(null)

    const {resID} = useParams();

    const resInfo = useResturantMenu()

     if(resInfo===null) return <ShimmerUI/>


    const {name, avgRating, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info
    const {carousel} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card


    return (


    <div className ="m-5 flex flex-col items-center">

        <div className="border border-black rounded-md p-1 pl-5 m-1 w-200 h-30 bg-gray-100 gap-12.5">
            <h2 className="text-3xl pb-3 pt-3">{name} (Rating: {avgRating})</h2>
            <h3 className="text-xl">{cuisines.join(", ")} - {costForTwoMessage}</h3>
        </div>

{/* The below part is not working as the swiggys api in someplaces uses the carousel and in some its using itemcards */}

            {carousel?.map(item => (
                 <div className="menu-container" key = {item.dish.info.id}>
                    <div className="menu-cards">
                        <h3>{item.dish.info.name}</h3>
                        <p>{item.dish.info.description}</p>
                    </div>
                </div> )
            )}

        </div>
);};

export default RestuarantMenu