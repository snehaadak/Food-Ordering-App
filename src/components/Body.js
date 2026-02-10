import { CuisineChoices } from "./CuisineChoices";
import RestroCard from "./RestroCard";
import  {useEffect, useState} from "react";
import { ShimmerUI } from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { recommended } from "./RestroCard";



const Body = () => {

    const [listofRestros,setlistofRestros] = useState([]);
    const [filteredResturants, setfilterRestuarants] = useState([])
    const [searchText, setsearchText] = useState("")
    const onlineStatus = useOnlineStatus();
    const RecommendedRestro = recommended(RestroCard);

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5539311&lng=73.9476257&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        setlistofRestros(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setfilterRestuarants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    }

    if(onlineStatus=== false) return <h1>Looks like you are offline please check your internet connection!!</h1>

    if(listofRestros.length === 0){
        return <ShimmerUI/>
    }

    return (
        <div className="body">
            <div className="flex p-5">
                <div>
                    <button className="rounded-2xl border ml-30 w-50 hover:cursor-pointer shadow hover:shadow-amber-500"
                        onClick={()=>{
                            const filteredList = listofRestros.filter(
                                (res) => res.info.avgRating > 4.2);
                                setfilterRestuarants(filteredList)
                            }}>Top Rated Restuarants</button>
                </div>


                <div className="ml-20">
                    <input
                        type="text"
                        className="rounded-2xl border pl-4 w-100"
                        value= {searchText}
                        onChange={(e) => {
                            setsearchText(e.target.value)
                        }}/>

                    <button className="rounded-2xl border w-15 ml-3 hover:cursor-pointer shadow hover:shadow-amber-500"
                        onClick={()=>{console.log(searchText)
                            const filteredRestros = 
                            listofRestros.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                            setfilterRestuarants(filteredRestros)
                                }}>Search</button>
                </div>
            </div>
            
            <h3 className="pl-10 pt-5 text-2xl">What's On Your Mind?</h3>
            <div className="mb-7">
                <CuisineChoices/>
            </div>
            <div>
                
            </div>
            <h3 className="pl-10 pt-5 text-2xl">Restuarants at your Door-steps?</h3>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] justify-start gap-6 p-6">

                {
                    filteredResturants.map(restuarant => 
                    <Link key={restuarant.info.id} to={"/restuarants/"+ restuarant.info.id} >
                    {restuarant.info.avgRating >= 4.3 ? <RecommendedRestro resData = {restuarant}/> : <RestroCard resData = {restuarant}/>}</Link>)
                }
            </div>
            
        </div>
    );
};

export default Body;