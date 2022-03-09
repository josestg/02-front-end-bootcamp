import { useState } from "react";

function App() {
  // let variable = 1; // created. (value, address) => (1, (0, 2))
  // variable = 2; // updated. (2, (0, 3))

  // let variable = variable + 1; // created. (2, (2, 3))
  // let variable = variable + 1; // created. (3, (3, 3))

  /**
   *   0          1     2      3
   * 0 (0, 0, 0) (0, 1)  (0,2, 1)  (0, 3, 2)
   * 1 (1, 0, 10) (1, 1)  (1,2)  (1, 3)
   * 2 (2, 0, 5) (3, 1)  (2,2)  (2, 3, 2)
   * 3 (3, 0, 7) (3, 1)  (3,2)  (3, 3, 3)
   */

  const [state, setState] = useState(1);
  const [price, setPrice] = useState(10_000);
  const [subTotal, setSubTotal] = useState(0);
  const [discontInUsed, setDiscontInUsed] = useState(false);

  // state = 1 // direct. DONT
  // setState(1 + 1) // DO

  console.count("total render");

  // const handleIncrement = () => setState(state + 2);
  // const handleDecrement = () => setState(state - 1);

  const handleAdd = (increment) => {
    const amount = state + increment;
    if (amount <= 0) {
      return;
    }

    const subTotal = amount * price;

    setState(amount);
    setSubTotal(subTotal);
    if (subTotal >= 50_000) {
      applyDiscont(0.5);
    }
  };

  const applyDiscont = (rate) => {
    if (!discontInUsed) {
      setPrice(price - price * rate);
      setDiscontInUsed(true);
    }
  };
  // handleAdd(2) = setState(state + 2)
  // handleAdd(-1) = setState(state + (-1)) = setState(state - 1)

  return (
    <div>
      <p>Item {state}</p>
      <p>Price per item {price}</p>
      <p>Sub total {state * price}</p>
      {discontInUsed === true && (
        <p>
          <strong>Discont applied</strong>
        </p>
      )}
      <button onClick={() => handleAdd(2)}>Add by 2</button>
      <button onClick={() => handleAdd(3)}>Add by 3</button>
      <button onClick={() => handleAdd(-1)}>Sub by 1</button>
      <button onClick={() => applyDiscont(0.5)}>Apply 50% Discont</button>
    </div>
  );
}

export default App;
