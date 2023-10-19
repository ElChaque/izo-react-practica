import React, { useState } from "react";
import Input1 from "./Entradas/Input1";
import Input2 from "./Entradas/Input2";
import GateSelector from "./GateSelector";
import OutputDisplay from "./OutputDisplay";
import AdditionalInputs from "./Entradas/AdditionalInputs";
import AdditionalGateCalculation from "./AdditionalGateCalculation";

export default function Practica4() {
    const [input1, setInput1] = useState(Math.round(Math.random()));
    const [input2, setInput2] = useState(0);
    const [input3, setInput3] = useState(0);
    const [input4, setInput4] = useState(0);
    const [selectedGate, setSelectedGate] = useState("or");

    return (
        <div className="App">
            <Input1 input1={input1} setInput1={setInput1} />
            <Input2 input2={input2} setInput2={setInput2} />
            <GateSelector selectedGate={selectedGate} setSelectedGate={setSelectedGate} />
            <OutputDisplay input1={input1} input2={input2} selectedGate={selectedGate} />
            <AdditionalInputs setInput3={setInput3} setInput4={setInput4} />
            <AdditionalGateCalculation input3={input3} input4={input4} />
        </div>
    );
}