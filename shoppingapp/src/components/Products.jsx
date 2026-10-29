import { useState, useEffect } from 'react';
import data from '../DummyData/data';
import Product from './Product';

const Products = () => {
    const products = data.products;
    const [cartItems, setCartItems] = useState([]);
    const [count, setCount] = useState(0);  
    let [productCount, setProductCount] = useState(0);
    console.log("Products component loaded");
    const handleIncrease = (id) => {
        setProductCount(productCount + 1);

        setCartItems([...cartItems, id]);
        console.log(`Product id ${id} added, total count: ${productCount + 1}`);
    };

    useEffect(() => {
        console.log(`Cart updated: ${cartItems.join(', ')}`);

        return () => {
            console.log(`Cleanup for cart: ${cartItems.join(', ')}`);
        };
    }, [cartItems]);
    return (
        <section className="products">
            <button type="button" className="btn-solid theme-primary" onClick={() => setCount(count + 1)}>Increase Count</button>
            <p>Count: {count}</p>
            <h1>Cart - {productCount}</h1>
            <p>Cart Items: {cartItems.join(', ')}</p>
            {products.map((product) => (
                <Product onAddCart={handleIncrease} className="product" key={product.id} product={product} />
            ))}
        </section>
    );
};

export default Products;