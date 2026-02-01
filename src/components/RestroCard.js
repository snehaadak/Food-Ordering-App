import { CDN_URL } from "../utils/constants";

const RestroCard = (props) => {
    const {resData} = props
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info;
    return (
        <div className="Restrocard">
        {/***  Destructuring Code with Optional Chaining ****
                <h3>{props.resName}</h3>
                <h4>{props.cuisine}</h4>
                <h3>{resData.data.name}</h3>
                <h4>{resData.data.cuisines.join(', ')}</h4>
                <h4>{resData.data.avgRating} stars</h4>
                <h4>₹{resData.data.costForTwo / 100} FOR TWO</h4>
                <h4>{resData.data.deliveryTime} minutes</h4> */ }

            <img alt="RestroLogo" className="RestroLogo" src= {CDN_URL + cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
};

export default RestroCard;