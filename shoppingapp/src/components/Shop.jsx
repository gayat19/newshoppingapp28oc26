import ProductDetails from "./Product-Details";
import Products from "./Products";
import Cart from "./Cart";

const Shop = () => {
    return (
        // products elementa nd the cart in 3:1
        <div style={{ display: 'flex' }}>
            <div style={{ flex: 3 }}>
                <Products/>
            </div>
            <div style={{ flex: 1 }}>
                <Cart/>
            </div>
        </div>
    );
};

export default Shop;