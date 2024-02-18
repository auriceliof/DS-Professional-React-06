import { useState } from "react";
import ButtonFilter from "../ButtonFilter";
import "./styles.css";

type Props = {
  onFilter: Function;
}

type FormData = {
  value?: number;
}

export default function Filter({onFilter}: Props) {

  const [min, setMin] = useState<FormData>({});

  const [max, setMax] = useState<FormData>({});

  function handleChangeMin(event: any) {
    const value = event.target.value
    setMin( {value} );
  }

  function handleChangeMax(event: any) {
    const value = event.target.value
    setMax({value});
  }

  function handleSubmit() {
    event?.preventDefault();
    onFilter(min.value || 0, max.value || Number.MAX_VALUE)
  }

  return (
    <form className="dsf-card-filter active" onSubmit={handleSubmit}>
      <div >
        <div >
          <input
            value={min.value || "" }
            name="min"
            type="text"
            placeholder="Preço mínimo"
            onChange={handleChangeMin}
          />
        </div>
        <div>
          <input
            value={max.value || ""}
            name="max"
            type="text"
            placeholder="Preço máximo"       
            onChange={handleChangeMax}
          />
        </div>
        <ButtonFilter />
      </div>
    </form>
  );
}
