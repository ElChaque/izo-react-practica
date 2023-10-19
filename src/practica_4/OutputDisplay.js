import React from "react";

function OutputDisplay({ input1, input2, selectedGate }) {
    // Lógica para calcular la salida
    const calculateOutput = () => {
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

    const output = calculateOutput();

    return (
        <div>
            <span>Salida: {output}</span>
        </div>
    );
}

export default OutputDisplay;