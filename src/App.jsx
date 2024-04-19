import React, { useState, useEffect } from 'react';
import './App.css';
import { contador } from './restaFecha';

function App() {
  const [mensaje, setMensaje] = useState(contador());
  useEffect(()=>{
    const audioElement = new Audio('./assets/cancion.mp3')
    audioElement.loop = true;
    audioElement.play()
    return()=>{
      audioElement.pause()
    }
  },[])
  useEffect(() => {
    const intervalo = setInterval(() => {
      setMensaje(contador());
    }, 1000); // Actualizar cada segundo
    return () => clearInterval(intervalo); // Limpiar el intervalo cuando el componente se desmonte
  }, []);

  return (
    <div className="app-container">
      <video className="video-background" src='./assets/llamas.mp4' autoPlay loop muted></video>
      <div className="content">
        <h1>Tiempo sin pajearme:</h1>
        <h1>{mensaje}</h1>
        {/* Agrega otros elementos de contenido aquí */}
      </div>
    </div>
  );
}

export default App;