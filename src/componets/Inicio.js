import React, { useState } from 'react';
import "./Inicio.css"

function Inicio(){

    const [nombreJugador, setNombreJugador] = useState(''); 
    const [nombreActual, setNombreActual] = useState(''); 

    const mostrar = () => {
        setNombreActual("Hola " + nombreJugador + "!");
    }

    return(
        <div className="contenedor-inicio">
            <div className="bienvenida">
                <h1>¡Feliz PapuNavidad!</h1>
                <input placeholder="Nombre!" onChange={(e) => setNombreJugador(e.target.value)}></input>
                <button onClick={mostrar}></button>
                <p className="coso">{nombreActual}</p>
            </div>
            
            <section className="tonotos"></section>
        </div>
        
    )
}
export default Inicio;