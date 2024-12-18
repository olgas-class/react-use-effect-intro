import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("Ciao, sono nato! :D");
  }, []);

  // Quando count cambia il suo valore e quando react è pronto viene eseguita la funzione di callback
  useEffect(() => {
    if (count === 0) {
      console.log("Sei al punto di partenza");
      setMessage("Sei al punto di partenza");
    } else if (count % 2 === 0) {
      console.log("numero pari");
      setMessage("numero pari");
    } else {
      console.log("numero dispari");
      setMessage("numero dispari");
    }
  }, [count]);

  return (
    <div className="mt-5">
      <div>{count}</div>
      <div onClick={() => setCount(count - 1)} className="btn btn-danger">
        -
      </div>
      <div onClick={() => setCount(count + 1)} className="btn btn-success">
        +
      </div>
      <p>{message}</p>
    </div>
  );
}

export default Counter;
