import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
    const { cart, dispatch } = useContext(CartContext);
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    
    return (
        <div>
            <h2>Your Cart</h2>
            
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    {cart.map(item => (
                        <div key={item.id} style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ddd' }}>
                            <span style={{ fontWeight: 'bold' }}>{item.name}</span>
                            <span style={{ margin: '0 10px' }}>₹{item.price}</span>
                            
                            <input
                                type="number"
                                min="1"
                                value={item.qty}
                                onChange={(e) => dispatch({
                                    type: "UPDATE_QTY",
                                    payload: { id: item.id, qty: +e.target.value }
                                })}
                                style={{ width: '60px', margin: '0 10px' }}
                            />
                            
                            <button onClick={() => dispatch({
                                type: "REMOVE_FROM_CART",
                                payload: item.id
                            })}>
                                Remove
                            </button>
                        </div>
                    ))}
                    
                    <div style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold' }}>
                        Total: ₹{total}
                    </div>
                </>
            )}
        </div>
    );
}