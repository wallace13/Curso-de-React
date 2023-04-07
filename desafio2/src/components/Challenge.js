import React, { useState } from "react";
const Challenge = () => {

    const valor1 = 2;
    const valor2 = 8;
    const [resultado, setResultado] = useState(0);
    
    const somar = () =>{
        const soma = valor1 + valor2;
        setResultado(soma);
    }
    return (
        <div>
            <h1>Valores</h1><br />
            <p>Valor 1 é: { valor1 }</p>
            <p>Valor 2 é: { valor2 }</p>
            <button onClick={somar}>Somar</button><br /><br />
            <p>Resultado é: { resultado }</p>

        </div>
    );
};

export default Challenge;