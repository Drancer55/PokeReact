import './App.css';
import { SiPokemon } from "react-icons/si";
import { GiPokecog } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <SiPokemon className='App-logo'/>
      </header>

      <footer className='App-footer'>
        <GiPokecog className='App-ball'/>
      </footer>  
    </div>
  );
}

export default App;