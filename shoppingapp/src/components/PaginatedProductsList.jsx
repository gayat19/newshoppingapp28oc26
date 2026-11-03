import { useState, useRef, useEffect, useCallback } from "react";
import { paginatedProducts } from "../Services/APiService";
import Product from "./Product";

const PaginatedProductList = ()=>{
   
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const observer = useRef();
    const pageRef = useRef(1);          
    const isFetching = useRef(false);   

    const loadMore = async () => {
        if (isFetching.current) return;
        isFetching.current = true;
        setLoading(true);
        try {
            const response = await paginatedProducts(pageRef.current, 10);
            // dummyjson returns { products: [...], total, skip, limit }
            pageRef.current += 1;
            setProducts(prev => {
                
                const seen = new Set(prev.map(p => p.id));
                return [...prev, ...response.data.products.filter(p => !seen.has(p.id))];
            });
        } finally {
            isFetching.current = false;
            setLoading(false);
        }
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