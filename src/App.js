import logo from './logo.svg';
import './App.css';
import Inicio from  './Home/inicio'
import Categorias from "./Jogo/Categorias";

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
      <Categorias></Categorias>
    </div>
  );
}

export default App;
