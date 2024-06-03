import { useState } from "react";
import Items from "./Items";

const ResMenu = ({data,show,set}) =>{
    const[s,setS] = useState(false);
    const handle =()=>{
        set();
        setS(!s);
  }
    return (
        
        <div className="mx-auto my-2 w-6/12 p-2 bg-orange-50 shadow-lg rounded-xl">
        <div  className="flex justify-between cursor-pointer" onClick={handle}>
            <span className="font-light italic text-lg">{data?.title}</span>    
            <button>⬇️</button>       
        </div>
        <div>
           { show&&s&&<Items data={data?.itemCards}/>}
        </div>
        </div>
        
    );
    
}
 
export default ResMenu;
