import logo from './logo.svg';
import './App.css';
import Inicio from  './Home/inicio'

import Perguntas from "./Jogo/Perguntas";
import Resultado from "./Jogo/Resultado";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Jogo de Perguntas e Respostas
        </p>        
        
      </header>
      <Inicio></Inicio>      
      <Perguntas></Perguntas>
      <Resultado></Resultado>

    </div>
  );
}

export default App;
