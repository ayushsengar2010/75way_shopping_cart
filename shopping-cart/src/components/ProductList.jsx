import {useContext} from "react";
import { CartContext } from "../context/CartContext";

const products =[
    {id: 1, name: "Laptop", price:20000},
    {id: 2, name: "Phone" , price:5000}
];

export default function ProductList(){
    const {dispatch} = useContext(CartContext);

    return (
        <div>
            <h2>Products</h2>
        {products.map(product => (
            <div key = {product.id}>
                <h3>{product.name}</h3>
                <button onClick ={() =>
                    dispatch({ type:"ADD_TO_CART", payload:{...product, qty :1}
                    })
                }
                >
                    Add to Cart
                </button>
            </div>
        ))}
        </div>
    );
}