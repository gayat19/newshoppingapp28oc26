import { useState, useRef, useEffect } from "react";
import Product from "./Product";
import { searchProduct } from "../Services/APiService";

export default function SearchWithDebounce({ onSearch }) {
    const [query, setQuery] = useState("");
    const [products,setProducts] = useState([]);
    const debounceTimeout = useRef(null);
    const lastRef = useRef("");


    useEffect(() => {
        clearTimeout(debounceTimeout.current);
        debounceTimeout.current = setTimeout(() => {
            if (query !== lastRef.current) {
                lastRef.current = query;
                searchProduct(query).then(res=>{
                    console.log(res.data.products)
                    setProducts(res.data.products);
                })   }
            
        }, 3000);
        return () => clearTimeout(debounceTimeout.current);
    }, [query]);
    
    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        
    };

    return (
        <>
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search products..."
            />
            {products&&products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
            {products.length === 0 && query && <p>No products found for "{query}"</p>}
        </>
    );
}

