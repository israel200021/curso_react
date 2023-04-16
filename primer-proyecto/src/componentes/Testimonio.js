import React from 'react';
import '../stylesheets/Testimonio.css';

function Testimonio(props){
  return (
    <div className="contenedor-testimonio">
      <img 
      className='imagen-testimonio'
      src={require(`../imagenes/testimonio-${props.imagen}.jpg`) }
      alt='Foto de Goku'/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>{props.nombre} de {props.planeta}</p>
        <p className='cargo-testimonio'>{props.cargo} en {props.fase}</p>
        <p className='texto-testimonio'>{props.testimonio}</p>
      </div>
    </div>
  );
}

export default Testimonio;