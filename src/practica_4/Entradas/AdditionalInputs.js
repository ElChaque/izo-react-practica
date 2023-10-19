import React from "react";

function AdditionalInputs({ setInput3, setInput4 }) {
  const handleInput3Change = (e) => {
    const value = Number(e.target.value);
    setInput3(value);
  };

  const handleInput4Change = (e) => {
    const value = Number(e.target.value);
    setInput4(value === 0 ? 0 : 1);
  };

  return (
    <div>
      <div>
        <label htmlFor="input3">Entrada 3:</label>
        <label>0</label>
        <input
          id="input3"
          type='radio'
          name='radio'
          value= "0"
          onChange={handleInput3Change}
        />
        <label>1</label>
        <input
          id='radio'
          type='radio'
          name='radio'
          value="1"
          onChange={handleInput3Change}
        />
      </div>
      <div>
        <label htmlFor="input4">Entrada 4:</label>
        <input
          id="input4"
          type='range'
          min={0}
          step={1}
          max={1}
          onChange={handleInput4Change}
        />
      </div>
    </div>
  );
}

export default AdditionalInputs;