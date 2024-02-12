import Filter from "../../components/Filter";
import Listing from "../../components/Listing";

export default function ListingBody() {
  return (
    <section className="dsf-container dsf-mt20">
      <div>
        <div className="dsf-mb20">
          <Filter />
        </div>
        <div className="dsf-mb20">
          <Listing />
        </div>
      </div>
    </section>
  );
}
