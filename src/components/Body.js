import Card, {withLabel} from './Card';
import { useState,useEffect } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
// import useOnlineS from '../utils/useOnlineS';
const Body = () =>{
const [ res, setRes ] =useState([]);
const [searchText,setSearchText] = useState(""); 
const [filtred,setFiltered] =useState([]);
useEffect( ()=>{
fetchData();
},[]);
const CardLabel = withLabel(Card);
// const status=useOnlineS();
// if(status===false)return (<h1>offline</h1>)
const fetchData = async () =>{
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
        async function checkJsonData(jsonData) {

        for (let i = 0; i < jsonData?.data?.cards.length; i++) {

          let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

          if (checkData !== undefined) {
            return checkData;
          }
        }
      }
      const resData = await checkJsonData(json);
      setRes(resData);
      setFiltered(resData);    
    } catch (error) {
      console.log(error);
    }

  }
 
    return res.length===0?<Shimmer/>:(
        <div className="bg-slate-200">
        <div className="filter">
        <div className='search'>
            <input type='text'  className='rounded-xl bg-red-200' value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
            <button className='m-4 px-4 bg-teal-100 rounded-xl' onClick={()=>{
                const filteredRes = res.filter((ob)=>ob.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setFiltered(filteredRes);
                }}>search</button>
            <button className="m-4 px-4 bg-fuchsia-100 rounded-xl" onClick={() =>{     
        const filter_res = filtred.filter(
                (ob)=>ob.info.avgRating > 4 
            );
            setFiltered(filter_res);
        }}>Top rated</button>
        </div>
        </div>
        
        <div className ="flex-wrap flex justify-center">
           {
            filtred.map((ob)=>(<Link to={"/RestaurentMenu/"+ob.info.id} key={ob.info.id}>
              { 
                ob.info.veg==true?(<CardLabel data={ob}/>):
                (<Card data={ob}/>)
              }
              </Link>))
           }
        </div>
        </div>
    );
};
export default Body;