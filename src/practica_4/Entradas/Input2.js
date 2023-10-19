import React from "react";

function Input2({ input2, setInput2 }) {
  const handleInput2Change = (e) => {
    const value = e.target.checked ? 1 : 0;
    setInput2(value);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={input2 === 1}
          onChange={handleInput2Change}
        />{" "}
        Entrada 2
      </label>
    </div>
  );
}

export default Input2;