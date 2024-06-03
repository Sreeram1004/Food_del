import { useDispatch ,useSelector} from "react-redux";
import { IMG_CDN_URL } from "../utils/constant";
import {addItems } from "../utils/CartSlice";
import appStore from "../utils/appCart";

const Items =(props)=>{
    const cartitems =useSelector((store)=>store.cart.items)
    const dispatch=useDispatch();
    const handleClick =(x)=>{
        dispatch(addItems(x));
        console.log(cartitems)
    }
    return(
        <div >
            {props?.data?.map((x) => ( <div key={x?.card?.info?.id} className="p-2 m-2  border-black border-b-2 text-left flex justift-between">
                <div className="w-9/12">     
                <div className="py-2">
               <span>{x?.card?.info?.name} - </span>
               <span>₹{x?.card?.info?.price?x?.card?.info?.price/100:x?.card?.info?.defaultPrice/100}</span>
                </div>
                <p className="text-xs">{x?.card?.info?.description}</p>
                </div>
                <div className="w-3/12 p-4">
                <div className="absolute ">
                    <button className="bg-black text-white rounded-lg shadow-lg" onClick={()=>handleClick(x)}>add+</button>
                </div>
                <img src={IMG_CDN_URL+x?.card?.info?.imageId} className="w-full rounded-lg"></img>
                </div>               
                </div>))}
        </div>
    )
}

export default Items;