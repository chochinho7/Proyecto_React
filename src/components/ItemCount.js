import { useState } from "react";

const ItemCount = ({ onAdd, initial, stock }) => {
  const [count, setCount] = useState(initial);

  const add = () => {
    if (count >= stock) return;
    setCount(count + 1);
    onAdd(count);
  };
  const rem = () => {
    if (count <= 0) return;
    setCount(count - 1);
  };
  const addToCart = () => {
    alert(`Agregado al carrito, cantidad de remeras: ${count}`);
    setCount(0);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h4>Remera roja</h4>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "200px",
        }}
      >
        <button onClick={rem}>-</button>
        <p>{count}</p>
        <button onClick={add}>+</button>
      </div>
      <button onClick={addToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;