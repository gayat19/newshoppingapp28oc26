import { useState } from 'react';
import data from '../DummyData/data';
import Product from './Product';

const Products = () => {
    const products = data.products;
    const [cartItems, setCartItems] = useState([]);
    let [productCount, setProductCount] = useState(0);
    console.log("Products component loaded");
    const handleIncrease = (id) => {
        setProductCount(productCount + 1);
        
        setCartItems([...cartItems, id]);
        console.log(`Product id ${id} added, total count: ${productCount + 1}`);
    };
    return (
        <section className="products">
            <h1>Cart - {productCount}</h1>
            <p>Cart Items: {cartItems.join(', ')}</p>
            {products.map((product) => (
                <Product onAddCart={handleIncrease} className="product" key={product.id} product={product} />
            ))}
        </section>
    );
};

export default Products;