import { useState } from "react";

const App = () => {
  const [x, setX] = useState(0);

  const btnClick = () => {
    console.log("Button clicked");
    setX(x + 1);
    console.log(x);
  };
  return (
    <div>
      {x}
      <button
        onClick={() => {
          btnClick();
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default App;
