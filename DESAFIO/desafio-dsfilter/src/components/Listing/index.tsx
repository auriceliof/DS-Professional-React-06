import { getProduct } from "../../services/product-service";
import "./styles.css";

export default function Listing() {

  let productId = 2; 
  let prod = getProduct(productId);

  return (
    <div className="dsf-listing dsf-mb10">
      <div className="dsf-item  dsf-mb10">
        <p>{prod?.name}</p>
        <h3>{prod?.price}</h3>
      </div>
    </div>
  );
}
