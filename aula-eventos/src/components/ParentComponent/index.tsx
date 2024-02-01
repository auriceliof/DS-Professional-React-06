import { useState } from "react";
import ChildComponent from "../ChildComponent";

export default function ParentComponent() {

    const [triple, setTriple] = useState(0);

    return (
        <div style={{border: "1px solid red", padding: "10px"}}>
           {triple}

           <ChildComponent />
        </div>
    );
}
