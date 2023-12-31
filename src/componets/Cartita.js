import React, { useState } from 'react';
import "./Cartita.css"

function Cartita(){
    const [coso, setCoso] = useState(''); 
    const [mensaje, setMensaje] = useState(''); 

    const enviarMensaje = () => {
        setCoso(mensaje)
    }

    return(
        <div className="Carita">
            <section id="minji"></section>
            <section className="palabras">
                <div className="yomensaje">
                    <section id="yopfp"></section>
                    <h1 className="yoo">Min</h1>
                </div>
                <div className="chat">
                    <p className="msg">Feliz navidad y feliz año nuevo &#x1F49C;!!</p>
                    <p className="msg">Espero que hayas pasado unas lindas fiestas y este tengas un muy buen 2024</p>
                    <p className="msg">Gracias por darnos la oportunidad de conocerte</p>
                    <p className="msg">y aunque ya no estes con los papus siempre vas a ser la mejor papuresumera de resumenes :'v</p>
                    <p className="msg">Tqm &#x1F49C;&#x1F49C;&#x1F49C;&#x1F49C;&#x1F49C;</p>
                    <p className="msg">El regalito en si son los stikers, espero q te gusten y los puedas imprimir alguna vez</p>
                    <p className="msg">Abrir: <a href="https://drive.google.com/drive/folders/1hrrJ9i5_JcBkJF7F7I2wkZPfpI_aWCA9?usp=drive_link" >&#128049;</a></p>
                    
                    <p className="msg2">{coso ? coso : '...'}</p>
                </div>  
                <div className="escribir">
                    <input onChange={(e) => setMensaje(e.target.value)} placeholder="Escribir mensaje..."></input>
                    <button onClick={enviarMensaje}>Enviar</button>
                </div>   

            </section>
            <section id="hanni"></section>
        </div>
        
    )
}
export default Cartita;