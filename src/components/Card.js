import {IMG_CDN_URL} from "../utils/utils"
const Card =(props)=>{
    const { data } =props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} = data?.info;
    return (
        <div className="rounded-lg px-1 py-1 m-2 w-[300px] text-center content-center bg-amber-100 hover:w-[320px] hover:shadow-black">
            <img className="rounded-lg h-[300px] " src={IMG_CDN_URL + cloudinaryImageId}/>
            <h3 className="font-bold"> {name}</h3>
            <h4 >{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
};
export const withLabel = (Card)=>{
    return(props)=>{
        return (
            <div>
            <label className="absolute text-center font-bold bg-green-500 rounded-xl">veg</label>
                <Card {...props}/>
            </div>
        );

    };
};
export default Card;