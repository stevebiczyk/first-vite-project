const App = () => {
  let data = "second";
  return <div>{data === "first" ? <h1>first</h1> : <h1>second</h1>}</div>;
};

export default App;
