import React, { useState } from "react";

export default function Practica3({ props }) {
  const [Entradavalor, setEntradavalor] = useState("");
  // const [EstadoEdit, setEstadoEdit] = useState([])
  const [array, setArray] = useState([]);

  const onClickHandler = () => {
    if (Entradavalor !== "") {
      setArray((prevArray) => [...prevArray, Entradavalor]);
      setEntradavalor("");
    }
  };

  const borrarHandler = (index) => {
    const newArray = [...array];
    newArray.splice(index, 1);
    setArray(newArray);
  };

  const editarHandler = (index, newValue) => {
    const newArray = [...array];
    newArray.splice(index, 1, newValue);
    setArray(newArray);
  };

  return (
    <div>
      <h3>Práctica 3</h3>
      <input
        type="text"
        value={Entradavalor}
        onChange={(e) => setEntradavalor(e.target.value)}
      />
      <button onClick={onClickHandler}>Agregar</button>

      {array.map((item, index) => {
        let parsedValue = parseFloat(item);
        return (
          <div>
            {!isNaN(parsedValue) &&
              <div key={index}>
                <p>
                  Valor: {parsedValue}, {parsedValue % 2 === 0 ? "par" : "impar"}
                </p>
                <button onClick={() => borrarHandler(index)}>Borrar</button>
                <button onClick={(e) => editarHandler(index, e.target.value)}>Editar</button>
              </div>
            }
            {isNaN(parsedValue) &&
              <div key={index}>
                <input
                  type="text"
                  value={item}
                  onChange={(e) => editarHandler(index, e.target.value)}
                />
                <button onClick={() => borrarHandler(index)}>Borrar</button>
                <button onClick={() => editarHandler(index, item)}>Editar</button>
              </div>
            }
          </div>

        )
      })}
    </div>
  )
}