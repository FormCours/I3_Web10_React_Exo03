import './App.css';
import Compteur from './components/compteur/compteur';

function App() {
  return (
    <div className="App">
      <h1>Exercice 3 - Le state</h1>

      <h2>Compteur +1</h2>  
      <Compteur/>
      <hr />
      <h2>Compteur +3</h2>  
      <Compteur step={3}/>
      <hr />
      <h2>Compteur +5</h2>  
      <Compteur step={5}/>

    </div>
  );
}

export default App;
