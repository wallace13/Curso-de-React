import React from 'react'

import './Components.css'

export const Cars = ({proprietario, ano, marca}) => {
  return (
    <div>
        <h1 className="titulo">Proprietario: {proprietario}</h1>
        <ul>
            <li>Ano do Veiculo: {ano}</li>
            <li>Marca: {marca}</li>
        </ul>
    </div>
  )
}
