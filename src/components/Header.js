import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () =>{
    const cartitems =useSelector((store)=>store.cart.items)
    const [login,setLogin] = useState("login");
    return (
        <div className="flex justify-between bg-lime-200">
            <div className="logo">
                <img className="img" src="https://pyxis.nymag.com/v1/imgs/bf1/0ed/8674b2615822e7a1d959d0ae48d37ab8fe-one-piece-toei-animation.1x.rsquare.w1400.jpg"/>
            </div>
            <div className="navitems">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About us</Link></li>
                    <li><Link to='/ContactUs'>Contact Us</Link></li>
                    <li><Link to='/Cart'>Cart-({cartitems.length})items</Link></li>
                    <button className="login"onClick={()=>{login==="login"?setLogin("logout"):setLogin("login")}}>{login}</button>
                </ul>
             </div>
        </div>
    );
    };
export default Header;