

import { useParams } from 'react-router';
import data from '../DummyData/data'

export default function ProductDetails() {
    const { id } = useParams();
   
    const product = data.products.find(p => p.id === parseInt(id));
  return (
    // create a product details page with multiple sections like images(with scroll ), title, description, and price
    <div className="product-details">
      <div className="product-images">
       {product.images && product.images.map((img, index) => (
         <img key={index} src={img} alt={`Product ${index + 1}`} />
       ))}  
      </div>
      <div className="product-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
      </div>
    </div>
  )
}