import logo from './logo.svg';
import './App.css';
import Inicio from './Home/inicio'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Jogo de Perguntas e Respostas
        </p>
        <Inicio />
      </header>      
    </div>
  );
}

export default App;
