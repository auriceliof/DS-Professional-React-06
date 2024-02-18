import { useEffect, useState } from "react";
import Filter from "../../components/Filter";
import { findByPrice } from "../../services/product-service";
import { ProductDTO } from "../../models/product";

export default function ListingBody() {
  const [findProducts, setFindProducts] = useState<ProductDTO[]>([]);

  const [minPrice, setMinPrice] = useState(0);

  const [maxPrice, setMaxPrice] = useState(Number.MAX_VALUE);

  useEffect(() => {
    const fetchData = async () => {
      const products = await findByPrice(minPrice, maxPrice);
      setFindProducts(products);
    };
    fetchData();
  }, [minPrice, maxPrice]);

  function handleFilter(minNumber: number, maxNumber: number) {
    setMinPrice(minNumber)
    setMaxPrice(maxNumber)
  }

  return (
    <section className="dsf-container dsf-mt20">
      <div>
        <div className="dsf-mb20">
          <Filter onFilter={handleFilter}/>
        </div>
        <div className="dsf-mb20">
          <div className="dsf-listing dsf-mb10">
            {findProducts.map((product) => (
              <div key={product.id} className="dsf-item  dsf-mb10">
                <p>{product.name}</p>
                <h3>R$ {product.price.toFixed(2)}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
