import React, { useState } from "react";
import LogicGates from "./LogicGates";

function AdditionalGateCalculation({ input3, input4 }) {
    const [selectedGate, setSelectedGate] = useState("or");

    const handleGateChange = (e) => {
        setSelectedGate(e.target.value);
    };

    return (
        <div>
            <div>
                <label htmlFor="selectGate2">Compuerta lógica adicional</label>
                <select id="selectGate2" value={selectedGate} onChange={handleGateChange}>
                    <option value="or">OR</option>
                    <option value="and">AND</option>
                    <option value="nand">NAND</option>
                    <option value="nor">NOR</option>
                    <option value="xor">XOR</option>
                </select>
            </div>
            <div>
                <LogicGates
                    input1={input3}
                    input2={input4}
                    selectedGate={selectedGate}
                />
            </div>
        </div>
    );
}

export default AdditionalGateCalculation;