import "./styles.css";
import { useEffect, useState } from 'react';
import { getAllProduct } from "../../services/product-service";
import { ProductDTO } from '../../models/product';

export default function Listing() {
 
  const [allProducts, setAllProducts] = useState<ProductDTO[]>([]);

  useEffect(() => {
    const fetchData = async () => {

      const products = await getAllProduct();
      setAllProducts(products);
     
    };
    fetchData();
  }, []);

  return (
    <div className="dsf-listing dsf-mb10">
      {
        allProducts.map(product => (
          <div key={product.id} className="dsf-item  dsf-mb10">
            <p>{product.name}</p>
            <h3>{product.price}</h3>
          </div>
        ))
      }
    </div>
  );
}
