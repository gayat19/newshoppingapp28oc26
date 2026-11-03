import { useState, useRef, useEffect, useCallback } from "react";
import { paginatedProducts } from "../Services/APiService";
import Product from "./Product";

const PaginatedProductList = ()=>{
   
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const observer = useRef();

    const loadMore = async () => {
        setLoading(true);
        const response = await paginatedProducts(page, 10);
        // dummyjson returns { products: [...], total, skip, limit }
    
        setProducts(prev => [...prev,...response.data.products]);
        setPage(prev => prev + 1);
        setLoading(false);
    };

    useEffect(() => {
        loadMore();
    }, []);

    const lastProductRef = useCallback(node => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                loadMore();
            }
        });
        if (node) observer.current.observe(node);
    }, [loading]);

    return (
        <div>
            {products.map((product, index) => {
                if (index === products.length - 1) {
                    return (
                        <div ref={lastProductRef} key={product.id}>
                            <Product product={product} />
                        </div>
                    );
                } else {
                    return <Product key={product.id} product={product} />;
                }
            })}
            {loading && <p>Loading...</p>}
        </div>
    );
}

export default PaginatedProductList;