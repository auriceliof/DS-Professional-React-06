import './styles.css';
import * as productService from '../../services/product-service';
import { useState } from 'react';

export default function Header() {

  const [prod] = useState(productService.getAllProduct());

  return (
    <header className="dsf-header">
      <nav className="dsf-container">
        <div>
          <h1>DSFilter</h1>
        </div>
        <div>
            <p>{prod.length} produto(s)</p>
        </div>
      </nav>
    </header>
  );
}
