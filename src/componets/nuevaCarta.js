import React, { useState } from 'react';
import "./nuevaCartita.css"

function nuevaCarta(){
    const [coso, setCoso] = useState(''); 
    const [mensaje, setMensaje] = useState(''); 

    const enviarMensaje = () => {
        setCoso(mensaje)
    }
    return(
        <div className="CaritaG">
            <section className="chatContent">
                <div className="contactomsg">
                    <section id="minpfp"></section>
                    <h1 className="min">Min :v</h1>
                </div>
                <div className="chatsito">
                    <p className="mensajes">Feliz navidad y feliz año nuevo &#x1F499;!!</p>
                    <p className="mensajes">Espero que hayas pasado unas lindas fiestas y este tengas un muy buen 2024</p>
                    <p className="mensajes">Gracias por ser la papu mas papu</p>
                    <p className="mensajes">Tqm &#x1F499;&#x1F499;&#x1F499;&#x1F499;&#x1F499;</p>
                    <p className="mensajes">El regalito en si son los stikers, espero te gusten y algun dia los puedas imprimir uwu</p>
                    <p className="mensajes">Abrir: <a href="https://drive.google.com/drive/folders/1RhjCN6YmvJH-YkYTkWdG7u4JtVMbJSfw?usp=sharing" >&#128049;</a></p>
                    <p className="mensajes">no es mucho pero es trabajo honesto</p>
                    <p className="resposta">{coso ? coso : '...'}</p>
                </div>  
                <div className="whenEscribes">
                    <input onChange={(e) => setMensaje(e.target.value)} placeholder="Escribir mensaje..."></input>
                    <button onClick={enviarMensaje}>Enviar</button>
                </div>   

            </section>
            <section id="nicki"></section>
        </div>
    )
}
export default nuevaCarta;