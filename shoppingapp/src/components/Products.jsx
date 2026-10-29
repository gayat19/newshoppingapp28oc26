import data from '../DummyData/data';
import Product from './Product';

const Products = () => {
    const products = data.products;

    console.log("Products component loaded");
    return (
        <section className="products">
            {products.map((product) => (
                <Product className="product" key={product.id} product={product} />
            ))}
        </section>
    );
};

export default Products;