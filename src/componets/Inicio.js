import React, { useState } from 'react';
import  Cartita  from "./Cartita";
import "./Inicio.css"

function Inicio(){

    const [nombreJugador, setNombreJugador] = useState(''); 
    const [nombreActual, setNombreActual] = useState(''); 
    const [cliker, setCliker] = useState(0); 
    const [mostrarCarta, setMostrarCarta] = useState(false);

    const mostrar = () => {
        setCliker(cliker+1);
        console.log(cliker);
        if (nombreJugador == "Roma"){
            setNombreActual(nombreJugador);
            setMostrarCarta(true);
            //muestra cuando se pone la clave
        }else {
            setNombreActual(nombreJugador + " ES INCORRECTO!!");
            if(cliker>=4){
                setNombreActual("la clave es: ****")
            }
        }
    }

    if(!mostrarCarta){
        return(
            <div className="contenedor-inicio">
                <div className="bienvenida">
                    <h1>¡Feliz PapuNavidad!</h1>
                    <section className='interactivo'>
                        <input placeholder="????" onChange={(e) => setNombreJugador(e.target.value)}></input>
                        <button onClick={mostrar}> owo </button>
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
    }
    
}
export default Inicio;