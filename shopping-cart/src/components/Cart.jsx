import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
    const{cart, dispatch} = useContext(CartContext);
    return (
        <>
        <h2>Cart</h2>

        {cart.map(item => (
            <div key={item.id}>
                <span>{item.name}</span>

                <input
                type="number"
                value={item.qty}
                onChange={(e) =>
                    dispatch({
                        type:"UPDATE_QTY",payload : {id: item.id, qty: +e.target.value}
                    })
                }
                />
                <button
                onClick= {() =>
                    dispatch({
                        type: "REMOVE_FROM_CART", payload: item.id
                    })
                }
                >
                    Remove

                </button>

            </div>
        ))}
        </>
    );
}