import { useState } from "react"

export default function counter () {

    
    const  counter, set counter = useState(0); // Sirve para ver el estado del numero

    const onButtonClick = () => { // funcion de boton para sumar de a 1
        setCounter (counter + 1);
    }
   
    return (
        <div>
            <div> Contador: {counter}</div> // contador acumulable
            <button onClick={onButtonClick}>Sumar Uno</button>
        </div>
    )
}