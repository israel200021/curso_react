import React from 'react';

function Boton({texto, esBotonDeClic, manejarClic}) {
    return (
        <button
        className={esBotonDeClic ? 'buton-clic' : 'boton-reiniciar'}
        onClick={manejarClic}>
            {texto}
        </button>
    )
}
export default Boton;