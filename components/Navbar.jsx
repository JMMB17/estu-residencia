import { useState } from "react";

export default function Navbar() {
  const [cont, setCont] = useState(0);//Hook

  return (
    <div>
      <h1>Navbar</h1>
      <h1>{cont}</h1>

      <button onClick={() => {setCont((ant) => ant+1); console.log(cont)}}>Increment</button>
    </div>
  );
}
