import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const products = [
    { id: 1, name: "Laptop", price: 20000 },
    { id: 2, name: "Phone", price: 5000 },
    { id: 3, name: "Headphones", price: 1500 },
    { id: 4, name: "Keyboard", price: 2000 }
];

export default function ProductList() {
    const { dispatch } = useContext(CartContext);

    return (
        <div>
            <h2>Available Products</h2>
            <div style={{ display: 'grid', gap: '15px', marginTop: '20px' }}>
                {products.map(product => (
                    <div key={product.id} style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '5px' }}>
                        <h3 style={{ margin: '0 0 10px 0' }}>{product.name}</h3>
                        <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#2c5282' }}>₹{product.price}</p>
                        <button 
                            onClick={() => dispatch({ 
                                type: "ADD_TO_CART", 
                                payload: { ...product, qty: 1 }
                            })}
                            style={{ padding: '8px 16px', cursor: 'pointer' }}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}