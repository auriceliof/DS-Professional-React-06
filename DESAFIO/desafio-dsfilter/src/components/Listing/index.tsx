import "./styles.css";
import { useEffect, useState } from 'react';
import { findByPrice } from "../../services/product-service";
import { ProductDTO } from '../../models/product';

export default function Listing() {
 
  const [findProducts, setFindProducts] = useState<ProductDTO[]>([]);

  const [minPrice, setMinPrice] = useState(1500);

  const [maxPrice, setMaxPrice] = useState(2000);

  useEffect(() => {
    const fetchData = async () => {

      const products = await findByPrice(minPrice, maxPrice);
      setFindProducts(products);
     
    };
    fetchData();
  }, [minPrice, maxPrice]);

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
