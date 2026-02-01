import { CuisineChoices } from "./CuisineChoices";
import RestroCard from "./RestroCard";
import { resList } from "../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <h3>What's On Your Mind?</h3>
            <div className="cusine-choices">
                <CuisineChoices/>
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