import './App.css';
import Boton from './componentes/Boton';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'

function App() {

  const manejarClic = () => {
    console.log("Cloc");
  }

  const reiniciarContador = () => {	
    console.log('reiniciar')
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo} 
          alt="Logo" />
      </div>
      <div className='contenedor-principal'>
        <Boton 
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}
          />
        <Boton
          texto='reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
