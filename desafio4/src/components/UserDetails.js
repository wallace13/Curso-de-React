import React from 'react'

export const UserDetails = ({id, nome, idade, profissao}) => {
  return (
    <div>
      <h2>Pessoa {id}:</h2>
      <ul>
        <li>Nome: {nome}</li>
        <li>Idade: {idade}</li>
        <li>Profissao: {profissao}</li>
        <li>Habilitação: {idade >= 18 ? 'Pode ter habilitação!' : 'Não tem idade para ter habilitação!'}</li>
      </ul>
    </div>
  )
}
export default UserDetails;