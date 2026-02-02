import { CuisineChoices } from "./CuisineChoices";
import RestroCard from "./RestroCard";
import { resList } from "../utils/mockData";


const SearchBar = () => {
    return (
        <div>
            <h5>Search Bar</h5>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="FilterContainer">
                <div className="TopRatedBTN">
                    <button>Top Rated Restuarants</button>
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
                    resList.map(restuarant => <RestroCard key={restuarant.info.id} resData = {restuarant}/>)
                }
            </div>
            
        </div>
    );
};

export default Body;