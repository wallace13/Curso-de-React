import { Cars } from './components/Cars';
import './App.css';

function App() {
  const carros = [
    {id:1 ,proprietario:"Ana", ano:2009, marca:"Chevrolet" },
    {id:2 ,proprietario:"Pedro", ano:2012, marca:"Fiat" },
    {id:3 ,proprietario:"Hugo", ano:2019, marca:"Gol" },
  ];
  return (
    <div className="App">
     <h1>Lista de Veiculos</h1>
     {carros.map((carro)=> (
      <Cars
        key={carro.id}
        proprietario={carro.proprietario}
        ano={carro.ano}
        marca={carro.marca}
      />
     ))}
    </div>
  );
}

export default App;
