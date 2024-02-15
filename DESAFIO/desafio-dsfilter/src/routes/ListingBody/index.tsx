import Filter from "../../components/Filter";
import Listing from "../../components/Listing";
import { ProductDTO } from "../../models/product";

const products: ProductDTO = {
    id: 1,
    name: "The Lord of the Rings",
    price: 90.5,
  }

export default function ListingBody() {
  return (
    <section className="dsf-container dsf-mt20">
      <div>
        <div className="dsf-mb20">
          <Filter />
        </div>
        <div className="dsf-mb20">
          <Listing products = {products} />
        </div>
      </div>
    </section>
  );
}
