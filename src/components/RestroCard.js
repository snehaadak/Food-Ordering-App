import { CDN_URL } from "../utils/constants";

const RestroCard = (props) => {
    const {resData} = props
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info;
    return (
        <div className="w-72 bg-gray-200 p-4 rounded-lg hover:shadow hover:border-black cursor-pointer">
        {/***  Destructuring Code with Optional Chaining ****
                <h3>{props.resName}</h3>
                <h4>{props.cuisine}</h4>
                <h3>{resData.data.name}</h3>
                <h4>{resData.data.cuisines.join(', ')}</h4>
                <h4>{resData.data.avgRating} stars</h4>
                <h4>₹{resData.data.costForTwo / 100} FOR TWO</h4>
                <h4>{resData.data.deliveryTime} minutes</h4> */ }

            <img alt="RestroLogo" className="w-full rounded mb-2" src= {CDN_URL + cloudinaryImageId}></img>
            <h3 className="font-bold text-xl">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>⭐{avgRating}</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
};

export const recommended  = (RestroCard) => {
    return (props) => {
        return (
            <div className="relative w-fit inline-block">
                <label className="absolute top-2 left-2 bg-white text-black text-s font-semibold px-2 py-1 rounded shadow z-10">Recommended</label>
                <RestroCard {...props}/>
            </div>
        )
    }; 
}

export default RestroCard;