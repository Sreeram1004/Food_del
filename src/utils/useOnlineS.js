import { useEffect, useState } from "react"

const useOnlineS = () =>{
const [onlineStatus,setOnlineStatus] = useState(true);
useEffect(()=>{
status();
},[]);
const status=()=>{
    window.addEventListener("online",()=>{setOnlineStatus(true)});
    window.addEventListener("offline",()=>{setOnlineStatus(false)});
}
return onlineStatus;
}
export default useOnlineS;