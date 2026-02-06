import { CuisineChoices } from "./CuisineChoices";
import RestroCard from "./RestroCard";
import  {useEffect, useState} from "react";


const SearchBar = () => {
    return (
        <div>
            <h5>Search Bar</h5>
        </div>
    )
}

const Body = () => {

    const [listofRestros,setlistofRestros] = useState([]);

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5539311&lng=73.9476257&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

  setlistofRestros(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }

    if(listofRestros.length === 0){
        return <h1>loading.........</h1>
    }

    return (
        <div className="body">
            <div className="FilterContainer">
                <div>
                    <button 
                        className="TopRatedBTN"
                        onClick={()=>{
                            const filteredList = listofRestros.filter(
                                (res) => res.info.avgRating > 4.2
                            );
                            setlistofRestros(filteredList)
                        }}
                    >Top Rated Restuarants</button>
                </div>
                <div className="searchBar">
                <SearchBar/>
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
                    listofRestros.map(restuarant => <RestroCard key={restuarant.info.id} resData = {restuarant}/>)
                }
            </div>
            
        </div>
    );
};

export default Body;