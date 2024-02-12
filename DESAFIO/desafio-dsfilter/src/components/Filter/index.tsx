import ButtonFilter from "../ButtonFilter";
import "./styles.css";

export default function Filter() {
  return (
    <form className="dsf-card-filter">
      <div >
        <div >
          <input
            name="minPrice"
            value=""
            type="text"
            placeholder="Preço mínimo"
          />
        </div>
        <div>
          <input
            name="maxPrice"
            value=""
            type="text"
            placeholder="Preço máximo"
          />
        </div>
        <ButtonFilter />
      </div>
    </form>
  );
}
