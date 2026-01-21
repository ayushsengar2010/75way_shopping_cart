import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Checkout() {
    const { cart, dispatch } = useContext(CartContext);
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    
    const checkoutHandler = async () => {
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }
        
        try {
            await fetch("https://api.example.com/checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(cart)
            });
            
            dispatch({ type: "CLEAR_CART" });
            alert(`Order placed successfully! Total: ₹${total}`);
        } catch (error) {
            alert("Something went wrong. Please try again.");
        }
    };
    
    return (
        <button 
            onClick={checkoutHandler}
            disabled={cart.length === 0}
            style={{ 
                padding: '12px 24px', 
                fontSize: '16px',
                cursor: cart.length === 0 ? 'not-allowed' : 'pointer',
                opacity: cart.length === 0 ? 0.5 : 1
            }}
        >
            Checkout {cart.length > 0 && `(₹${total})`}
        </button>
    );
}