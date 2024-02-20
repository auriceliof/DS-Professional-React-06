import './styles.css';
import { useContext } from 'react';
import { ContextProdCount } from '../../utils/context-prod';

export default function Header() {

  const { contextProdCount } = useContext(ContextProdCount);

  return (
    <header className="dsf-header">
      <nav className="dsf-container">
        <div>
          <h1>DSFilter</h1>
        </div>  
        <div>
            <p>{contextProdCount} produto(s)</p>            
        </div>
      </nav>
    </header>
  );
}
