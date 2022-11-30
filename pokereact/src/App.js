import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SiPokemon } from "react-icons/si";
import Pokedex from './pokedex/Pokedex';
import { Footer } from './footer/Footer';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <SiPokemon className='App-logo'/>
      </header>
      <Pokedex/>
      <Footer/>
    </div>
  );
}

export default App;