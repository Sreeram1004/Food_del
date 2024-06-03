import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/CartSlice";
import Items from "./Items";

const Cart =()=>{
    const cartItems= useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
    const handle=()=>{
        dispatch(clearCart());
        console.log("hi")
    }
    return(
        <div className="text-center m-4 p-4">
            <div className="text-2xl font-bold">
            <h1>Cart</h1>
            </div>
            <div className="w-6/12 m-auto">
            <button className="p-2 m-2 bg-black rounded-lg text-white" onClick={handle}>Clear Cart</button>
            <Items data={cartItems}/>
            </div>
        </div>

    )
}
export default Cart;