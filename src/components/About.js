import useOnlineS from "../utils/useOnlineS";
const About =()=>{
    const status=useOnlineS();
    if(status===false)return (<h1>offline</h1>)
    return(
        <div className="About">
            <h1>about hello </h1>
        </div>
    );
}
export default About;