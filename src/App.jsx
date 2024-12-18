import { useState } from "react";
import AppText from "./components/AppText";
import Counter from "./components/Counter";

function App() {
  //   const [visible, setVisible] = useState(false);
  //
  //   return (
  //     <>
  //       <button onClick={() => setVisible(!visible)}>Toggle alert</button>
  //       <div className="container my-5">{visible && <AppText />}</div>
  //     </>
  //   );

  return (
    <div className="container">
      <Counter />
    </div>
  );
}

export default App;
