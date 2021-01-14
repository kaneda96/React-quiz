import logo from './logo.svg';
import './App.css';
import Inicio from  './Home/inicio'

import Perguntas from "./Jogo/Perguntas";
import Resultado from "./Jogo/Resultado";
import Ranking from "./Jogo/Ranking";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />            
      </header>                 
      <Ranking></Ranking>
    </div>
  );
}

export default App;
