// import React from 'react'
import ReactPlayer from 'react-player'
import "./Tateti.css"

function Tateti(){
    return(
        <div className='tateti'>
            <section id="danielle"></section>
            <section className="card"> 
                <div className='video'>
                    <ReactPlayer 
                        url={require('../video/TwVideo.mp4')}
                        height={152}
                        width={450}
                        border-radius={50}
                        playing
                        loop
                        //volume={0.3}
                        muted
                    />
                </div>
    
                <section className="imagen-perfil"></section>
                
                <section className='general'>
                    <div className='datos'>
                        <h1 className='nombre'> &#x211C;oma</h1>
                        <p>sprentina</p>
                        <p>She/her</p>
                    </div>
                    <div className='datos2'>
                        <h3 className='subTittle'>Sobre Mi</h3>
                        <p>barra brava  del club atlético newjeans</p>
                    </div>
                    {/* <div className='datos3'>
                        <h3 className='subTittle'>Miembro Desde</h3>
                        <p>&#127827; 23 Oct 22</p>
                    </div> */}
                    <div className='datos3'>
                        <h3 className='subTittle'>Escuchando</h3>
                        <div className='reproductor'>
                            <section className="musica"></section>
                            <div className='info'>
                                <p className='cosito'>Super Shy</p>
                                <p>de New Jeans</p>
                                <p>en NewJeans 2nd EP 'Get Up'</p>
                            </div>
                        </div>
                        <section className='numeritos'>
                            <p>00:00</p>
                            <p>02:34</p>
                        </section>
                    </div>
                    <h3 className='subTittle'>Roles</h3>
                    <div className='roles'>
                        <div className='rolsito'> <div className='bolita' id='b1'></div> &#10098;&#9733;&#10099; romita</div>
                        <div className='rolsito'> <div className='bolita' id='b2'></div> &#10098;&#x1F49A;&#10099; SpreenUpd</div>
                        <div className='rolsito'> <div className='bolita' id='b3'></div> &#10098;&#9834;&#10099; NewJeans</div>
                        <div className='rolsito'> <div className='bolita' id='b4'></div> &#10098;&#128048;&#10099; Bunnie</div>
                        <div className='rolsito'> <div className='bolita' id='b5'></div> &#10098;&#9889;&#10099; NickiNicole</div>
                        <div className='rolsito'> <div className='bolita' id='b6'></div> &#10098;&#9728;&#10099; Sabrina Carpenter</div>
                    </div>
                </section>            
            </section>
            <section id="haerin"></section>
        </div>
        
    )
}
export default Tateti;