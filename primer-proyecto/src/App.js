import './App.css';
import Testimonio from './componentes/Testimonio.js';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto tienen que decir estos personajes</h1>
        <Testimonio 
        nombre = 'Gohan'
        planeta = 'univeros 7'
        imagen = 'gohan'
        cargo = 'Guerrero sayajin'
        fase = 'Fase 2'
        testimonio = '“¡Mi padre es el mejor luchador de todos los tiempos … y quiero pelear con la misma ropa que él!”'
        />
        <Testimonio 
        nombre = 'Trunks'
        planeta = 'univeros 7'
        imagen = 'trunks'
        cargo = 'Guerrero sayajin'
        fase = 'Fase 1'
        testimonio = '“Padre, eres tan duro y orgulloso, duro y frío como una roca. Pero, aun así, en el fondo, tu corazón late como el mío. Sé que te sientes. Soy tu hijo y siempre te amaré. Me alegro de poder verte, papá.” '
        />

      <Testimonio 
        nombre = 'Goku'
        planeta = 'univeros 7'
        imagen = 'goku'
        cargo = 'Guerrero sayajin'
        fase = 'Fase 2'
        testimonio = 'Peleaste muy bien, te felicito. Por favor, hijo, dile a tu mamá que me disculpe, siempre hice las cosas a mi manera, sin hacerle caso…'
        />
      </div>
      
    </div>
  );
}

export default App;
