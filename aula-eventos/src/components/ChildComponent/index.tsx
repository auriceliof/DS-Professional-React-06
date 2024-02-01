import { useState } from "react";

export default function ChildComponent() {

    const [count, setCount] = useState(0);

    function handleClick(){
        const newCount = count +1;
        setCount(newCount);
    }

    return (
        <div style={{border: "1px solid red", padding: "10px"}}>
           {count}
           <button onClick={handleClick}>OK</button>

        </div>
    );
}
