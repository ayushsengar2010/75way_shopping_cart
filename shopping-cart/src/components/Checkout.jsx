import {useContext} from "react";

import {CartContext} from "../context/CartContext";

export default function Checkout(){
    const {cart,dispatch}= useContext(CartContext);
    const checkoutHandler = async ()=>
    {
        await 
        fetch("https://api.example.com/checkout", {
            method:"POST",
            headers:{"Context_Type": "application/json"},
            body: JSON.stringify(cart)

        });

        dispatch({type:"CLEAR_CART"});
        alert("Order Placed");
    };
    return <button onClick={checkoutHandler}></button>;

}