import "./app.css";

// Didalam javascript ada html, didalam html yang didalam javascript juga bisa ada javascript.

function App() {
  const add = (a, b) => a + b;

  return (
    <>
      <h1 className="color-red">add(10,5)</h1>
      <h1 className="color-red">{add(10, 5)}</h1>
    </>
  );
}

export default App;
