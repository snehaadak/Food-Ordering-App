import { CuisineChoices } from "./CuisineChoices";
import RestroCard from "./RestroCard";
import  {useEffect, useState} from "react";
import { ShimmerUI } from "./ShimmerUI";



const Body = () => {

    const [listofRestros,setlistofRestros] = useState([]);
    const [filteredResturants, setfilterRestuarants] = useState([])
    const [searchText, setsearchText] = useState("")

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5539311&lng=73.9476257&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        setlistofRestros(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setfilterRestuarants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    }

    if(listofRestros.length === 0){
        return <ShimmerUI/>
    }

    return (
        <div className="body">
            <div className="FilterContainer">
                <div>
                    <button className="TopRatedBTN"
                        onClick={()=>{
                            const filteredList = listofRestros.filter(
                                (res) => res.info.avgRating > 4.2);
                                setfilterRestuarants(filteredList)
                            }}>Top Rated Restuarants</button>
                </div>
                <div className="searchBar">
                    <input
                        type="text"
                        className="SeachtextBox"
                        value= {searchText}
                        onChange={(e) => {
                            setsearchText(e.target.value)
                        }}/>

                    <button className="SearchButton"
                        onClick={()=>{console.log(searchText)
                            const filteredRestros = 
                            listofRestros.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                            setfilterRestuarants(filteredRestros)
                                }}>Search</button>
                </div>
            </div>
            
            <h3>What's On Your Mind?</h3>
            <div className="cusine-choices">
                <CuisineChoices/>
            </div>
            <div>
                
            </div>
            <h3>Restuarants at your Door-steps?</h3>
            <div className="restro-Container">

                {
                    filteredResturants.map(restuarant => <RestroCard key={restuarant.info.id} resData = {restuarant}/>)
                }
            </div>
            
        </div>
    );
};

export default Body;