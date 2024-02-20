import "./styles.css";
import { useEffect, useState } from "react";
import { findByPrice } from "../../services/product-service";
import { ProductDTO } from "../../models/product";
import Filter from "../../components/Filter";
import Listing from "../../components/Listing";
import { ContextProdCount } from "../../utils/context-prod";
import Header from "../../components/Header/Index";

export default function ListingBody() {
  
  const [contextProdCount, setContextProdCount] = useState<number>(0);

  const [findProducts, setFindProducts] = useState<ProductDTO[]>([]);

  const [minPrice, setMinPrice] = useState(0);

  const [maxPrice, setMaxPrice] = useState(Number.MAX_VALUE);

  useEffect(() => {
    const fetchData = async () => {
      const products = await findByPrice(minPrice, maxPrice);
      setFindProducts(products);
      setContextProdCount(products.length)
    };
    fetchData();
  }, [minPrice, maxPrice]);

  function handleFilter(minNumber: number, maxNumber: number) {
    setMinPrice(minNumber);
    setMaxPrice(maxNumber);
  }

  return (
    <ContextProdCount.Provider value={{contextProdCount, setContextProdCount}}>
      <Header />
      <section className="dsf-container dsf-mt20">
        <div>
          <div className="dsf-mb20">
            <Filter onFilter={handleFilter} />
          </div>
          <div className="dsf-mb20">
            <div className="dsf-listingBody dsf-mb10">
              {findProducts.map((product) => (
                <div
                  key={product.id}
                  className="dsf-listingBody-item  dsf-mb10"
                >
                  <Listing product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ContextProdCount.Provider>
  );
}

