import data from '../DummyData/data'

const Product = ( ) => {
    const product = data.products[0];
    console.log(product);
    return (
        <section className="card" style={{maxWidth: "320px"}}>
            <img src={product.thumbnail} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h4 className="card-title">{product.title}</h4>
                <p className="card-text">{product.description}</p>
                <a href="#" className="btn-solid theme-primary">Buy for $ {product.price}</a>
            </div>
        </section>
    );
};

export default Product;