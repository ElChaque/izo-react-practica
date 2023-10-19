import React from "react";

function GateSelector({ selectedGate, setSelectedGate }) {
    const handleGateChange = (e) => {
        setSelectedGate(e.target.value);
    };

    return (
        <div>
            <label htmlFor="selectGate">Compuerta lógica</label>
            <select id="selectGate" value={selectedGate} onChange={handleGateChange}>
                <option value="or">OR</option>
                <option value="and">AND</option>
                <option value="nand">NAND</option>
                <option value="nor">NOR</option>
                <option value="xor">XOR</option>
            </select>
        </div>
    );
}

export default GateSelector;