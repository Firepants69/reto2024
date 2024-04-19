import React, { useState, useEffect } from 'react';
import './App.css';
import { contador } from './restaFecha';

function App() {
  const [mensaje, setMensaje] = useState(contador());
  
  const onClickSound =()=>{
    const audioElement = new Audio('./cancion.mp3')
    audioElement.loop = true;
    audioElement.play()
    var miBoton = document.getElementById("botonRepro");
    // Desactivar el botón
    miBoton.disabled = true;
    }
  
  

  useEffect(() => {
    const intervalo = setInterval(() => {
      setMensaje(contador());
    }, 1000); // Actualizar cada segundo
    return () => clearInterval(intervalo); // Limpiar el intervalo cuando el componente se desmonte
  }, []);

  return (
    <div className="app-container">
      <video className="video-background" src='./llamas.mp4' autoPlay loop muted></video>
      <div className="content">
        <h1>Tiempo sin pajearme:</h1>
        <h1>{mensaje}</h1>
        <button 
          id = "botonRepro" 
          className='btn btn-primary mt-2' 
          onClick={onClickSound}> reproducir
        </button>
      </div>
    </div>
  );
}

export default App;