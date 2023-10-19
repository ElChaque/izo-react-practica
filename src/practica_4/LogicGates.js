import React from "react";

function LogicGates({ input1, input2, selectedGate }) {
    // Lógica para calcular la compuerta lógica
    const calculateLogic = () => {
        switch (selectedGate) {
            case "or":
                return input1 || input2;
            case "and":
                return input1 && input2;
            case "nand":
                return !(input1 && input2);
            case "nor":
                return !(input1 || input2);
            case "xor":
                return (input1 || input2) && !(input1 && input2);
            default:
                return 0;
        }
    };

    const result = calculateLogic();

    return (
        <div>
            <p>Resultado de la compuerta lógica: {result}</p>
        </div>
    );
}

export default LogicGates;