import { useEffect } from 'react';
import data from '../DummyData/data'

const Product = (props ) => {
    const product = props.product;
  
    const handleBuy = () => {
        console.log(`Buying product: ${product.title}`);
        props.onAddCart(product.id)
    };

    return (
        <section className="card" style={{maxWidth: "320px"}}>
            <img src={product.thumbnail} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h4 className="card-title">{product.title}</h4>
                <p className="card-text">{product.description}</p>
                <button type="button" className="btn-solid theme-primary" onClick={handleBuy}>Buy for $ {product.price}</button>
            </div>
        </section>
    );
};

export default Product;