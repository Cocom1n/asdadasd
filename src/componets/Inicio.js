import React, { useState } from 'react';
import  Cartita  from "./Cartita";
import NuevaCarta from './nuevaCarta';
import "./Inicio.css"

function Inicio(){

    const [nombreJugador, setNombreJugador] = useState(''); 
    const [nombreActual, setNombreActual] = useState(''); 
    const [cliker, setCliker] = useState(0); 
    const [mostrarCarta, setMostrarCarta] = useState(false);
    const [cosoJ, setcosoJ] = useState(false);

    const verificarClave = () => {
        setCliker(cliker + 1);
    
        if (nombreJugador === 'Roma') {
          setNombreActual(nombreJugador);
          setMostrarCarta(true);
          setcosoJ(false);
        } else if (nombreJugador === 'Jacque') {
          setNombreActual(nombreJugador);
          setMostrarCarta(false);
          setcosoJ(true);
        } else {
          setNombreActual(`${nombreJugador} ES INCORRECTO!!`);
    
          if (cliker >= 4) {
            setNombreActual('La clave es: ****');
          }
        }
      };

    if(!mostrarCarta && !cosoJ){
        return(
            <div className="contenedor-inicio">
                <div className="bienvenida">
                    <h1>¡Feliz PapuNavidad!</h1>
                    <section className='interactivo'>
                        <input placeholder="????" onChange={(e) => setNombreJugador(e.target.value)}></input>
                        <button onClick={verificarClave}> owo </button>
                    </section>
                    <p className="coso">{nombreActual}</p>
                </div>
                
                <section id="hyerin"></section>
            </div>
        )
    }else if (mostrarCarta){
        return(
            <div className="contenedor-inicio">
                <Cartita />
            </div>
        );
    }else if (cosoJ){
        return(
            <div className="contenedor-inicio">
                <NuevaCarta />
            </div>
        );
        
    }
    
}
export default Inicio;