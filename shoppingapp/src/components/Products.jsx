import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import data from '../DummyData/data';
import Product from './Product';
import './Products.css';

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
    const navigate = useNavigate();
    const handleGoToCart = () => {
        alert("Go to cart clicked")
        navigate('/cart');
    };
    return (
        <section className="products">
            <button type="button" className="btn-solid theme-primary" onClick={handleGoToCart}>Go to Cart</button>
            <p>Count: {count}</p>
            {productCount&&<p>Product Count: {productCount}</p>}
            {/* <h1>  Cart Count - {productCount>0?productCount:'No products yet'}</h1> */}
            <p>Cart Items: {cartItems.join(', ')}</p>
            <div className="product-grid">
                {products.map((product) => (
                    <Product onAddCart={handleIncrease} className="product" key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default Products;