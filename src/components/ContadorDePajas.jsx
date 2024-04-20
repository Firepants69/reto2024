import React, { useState, useEffect } from 'react';
import '../App.css';
import { contador } from '../helpers/restaFecha';

export function ContadorDePajas() {
  const [mensaje, setMensaje] = useState(contador());
  const [backGroundSound, setBackGroundSound] = useState(null);
  const [clase,setClase] = useState('d-flex flex-row-reverse prueba')

  useEffect(() => {
    
    // Crea la instancia de Audio cuando el componente se monte
    const audio = new Audio('./assets/cancion.mp3');
    audio.loop = true;
    audio.volume = .5;
    setBackGroundSound(audio);

    return () => {
      // Limpia la instancia de Audio cuando el componente se desmonte
      if (backGroundSound) {
        backGroundSound.pause();
      }
    };
  }, []);
  
  const onClickSound =()=>{
    const miBoton = document.getElementById("botonRepro");
    backGroundSound.loop = true;
    backGroundSound.play()
    miBoton.disabled = true;
    }
  
    // const onClickCaer=()=>{
    //   const miBoton = document.getElementById("botonRepro");
    //   const decepcion = new Audio('./assets/decepcion.mp3')
    //   backGroundSound.loop = false;
    //   backGroundSound.pause();
    //   decepcion.volume = 1;
    //   miBoton.disabled = false;
    //   decepcion.play()
    // }

  useEffect(() => {
    const intervalo = setInterval(() => {
      setMensaje(contador());
    }, 1000); // Actualizar cada segundo
    return () => clearInterval(intervalo); // Limpiar el intervalo cuando el componente se desmonte
  }, []);

  return (
    <div className="app-container">
      <div className={clase}>
      <button className="position-relative btn btn-primary px-2 me-3 mt-3"
          onClick={()=>setClase('contenedorCambio')}>x</button>
      <button className="position-relative btn btn-primary p-2 me-3 mt-3">Crear Cuenta</button> 
      <button className="position-relative btn btn-primary p-2 me-3 mt-3">Iniciar Sesion</button>
      <small className="text-justify me-3 mt-3 texto">Inicia sesion o crea una cuenta para tu propio contador</small>
      </div>
      
      <video className="video-background" src='./assets/llamas.mp4' autoPlay loop muted></video>
      <div className="content">
        <h1>Tiempo sin pajearme:</h1>
        <h1>{mensaje}</h1>
        <button 
          id = "botonRepro" 
          className='btn btn-primary mt-2 me-3' 
          onClick={onClickSound}> Reproducir
        </button>
        {clase==='contenedorCambio'?<button>hover</button>:null}
        {/*<button 
          id = "botoncaida" 
          className='btn btn-primary mt-2' 
          onClick={onClickCaer}
         > Caer
        </button>*/}
      </div>
     
    </div>
  );
}
