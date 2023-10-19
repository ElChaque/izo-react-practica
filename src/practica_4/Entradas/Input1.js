import React from "react";

function Input1({ input1, setInput1 }) {
  const handleInput1Change = (e) => {
    const value = Number(e.target.value);
    setInput1(value === 0 ? 0 : 1);
  };

  return (
    <div>
      <label htmlFor="input1">Entrada 1:</label>
      <input
        id="input1"
        type="number"
        value={input1}
        onChange={handleInput1Change}
      />
    </div>
  );
}

export default Input1;