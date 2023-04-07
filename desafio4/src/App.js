import UserDetails from "./components/UserDetails";

import './App.css';

function App() {
  const pessoas = [
    {id:1 ,nome:"Ana", idade:29, profissao:"Advogada" },
    {id:2 ,nome:"Pedro", idade:12, profissao:"Estudante" },
    {id:3 ,nome:"Hugo", idade:49, profissao:"Engenheiro" },
  ];
  return (
    <div className="App">
     {pessoas.map((pessoa)=> (
      <UserDetails
        key={pessoa.id}
        id={pessoa.id}
        nome={pessoa.nome}
        idade={pessoa.idade}
        profissao={pessoa.profissao}
      />
     ))}
    </div>
  );
}

export default App;
