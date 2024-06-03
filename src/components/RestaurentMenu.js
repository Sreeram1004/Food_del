import React from 'react';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  swiggy_menu_api_URL,
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
} from "../utils/constant";
import useRestaurant from "../utils/useRestaurant";
import ResMenu from './ResMenu';
const RestaurentMenu = () => {
  const [showindex,setShowindex] =useState(-1);
  const { resId } = useParams();
  const [restaurant, menuItems] = useRestaurant(
    swiggy_menu_api_URL,
    resId,
    RESTAURANT_TYPE_KEY,
    MENU_ITEM_TYPE_KEY
);
   
  return (
    <div className="text-center bg-slate-200 pb-14">
        <div  className="font-bold p-4">
        <h1>{restaurant?.name}</h1>
        </div>
        <h1 className="">{restaurant?.labels[2]?.message}-{restaurant?.costForTwoMessage}</h1>
       {
         menuItems.map((items,index) =>(<ResMenu data={items} key={items?.id} show={index==showindex?true:false}
         set={()=>(setShowindex(index))}/>))
       }
    </div>
  )
}

export default RestaurentMenu