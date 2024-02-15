import { ProductDTO } from "../../models/product";
import "./styles.css";

export type Props = {
  products: ProductDTO;
}

export default function Listing({products}: Props) {
  return (
    <div className="dsf-listing dsf-mb10">
      <div className="dsf-item  dsf-mb10">
        <p>{products.name}</p>
        <h3>R$ {products.price.toFixed(2)}</h3>  
      </div>
      <div className="dsf-item  dsf-mb10">
        <p>{products.name}</p>
        <h3>R$ {products.price.toFixed(2)}</h3>  
      </div>
      <div className="dsf-item  dsf-mb10">
        <p>{products.name}</p>
        <h3>R$ {products.price.toFixed(2)}</h3>  
      </div>
      <div className="dsf-item  dsf-mb10">
        <p>{products.name}</p>
        <h3>R$ {products.price.toFixed(2)}</h3>  
      </div>
      <div className="dsf-item  dsf-mb10">
        <p>{products.name}</p>
        <h3>R$ {products.price.toFixed(2)}</h3>  
      </div>
      <div className="dsf-item  dsf-mb10">
        <p>{products.name}</p>
        <h3>R$ {products.price.toFixed(2)}</h3>  
      </div>
      <div className="dsf-item dsf-mb10">
        <p>{products.name}</p>
        <h3>R$ {products.price.toFixed(2)}</h3>  
      </div>
    </div>
  );
}
