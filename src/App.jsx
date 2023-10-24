import { useState } from "react";
import FirstComponent from "./components/FirstComponent";

const App = () => {
  const [x, setX] = useState(0);

  const btnClick = () => {
    console.log("Button clicked");
    setX(x + 1);
    console.log(x);
  };
  return (
    <div>
      <button
        onClick={() => {
          btnClick();
        }}
      >
        Click me
      </button>
      <FirstComponent data={x} fn={setX} />
    </div>
  );
};

export default App;
