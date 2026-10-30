import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import data from '../DummyData/data'
import { useNavigate } from 'react-router';

const Product = (props ) => {
    const product = props.product;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleBuy = () => {
        dispatch({ type: 'cart/addItem', payload: product });
       
    };

    return (
        <section className={`card ${props.className ?? ''}`}>
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