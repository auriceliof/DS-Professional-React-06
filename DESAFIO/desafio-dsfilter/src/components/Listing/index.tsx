import "./styles.css";
import { useEffect, useState } from 'react';
import { findByPrice } from "../../services/product-service";
import { ProductDTO } from '../../models/product';

export default function Listing() {
 
  const [findProducts, setFindProducts] = useState<ProductDTO[]>([]);

  useEffect(() => {
    const fetchData = async () => {

      const products = await findByPrice(1500, 2000);
      setFindProducts(products);
     
    };
    fetchData();
  }, []);

  return (
    <div className="dsf-listing dsf-mb10">
      {
        findProducts.map(product => (
          <div key={product.id} className="dsf-item  dsf-mb10">
            <p>{product.name}</p>
            <h3>R$ {product.price.toFixed(2)}</h3>
          </div>
        ))
      }
    </div>
  );
}
