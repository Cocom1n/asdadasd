// import React from 'react'
import ReactPlayer from 'react-player'
import "./CardDc.css"

function CardDc(){
    return(
        <div className='espacio'>
            {/* <section id="danielle"></section> */}
            <section className="cardsita"> 
                <div className='vidio'>
                    <ReactPlayer 
                        url={require('../video/nickiVidio.mp4')}
                        height={152}
                        width={450}
                        border-radius={50}
                        playing
                        loop
                        //volume={0.3}
                        muted
                    />
                </div>
    
                <section className="pfp"></section>
                
                <section className='inferior-baner'>
                    <div className='datos-importantes'>
                        <h1 className='name'> 𝒥𝒶𝒸𝓆𝓊𝑒</h1>
                        <p>hinchadenicki</p>
                        <p>She/her</p>
                    </div>
                    <div className='desc'>
                        <h3 className='encabezado'>Sobre Mi</h3>
                        <p>Favorita de nicki y el de f1</p>
                    </div>
                    <div>
                        <h3 className='encabezado'>Escuchando</h3>
                        <div className='music-info'>
                            <section className="album-cover"></section>
                            <div className='informacion'>
                                <p className='tittle-song'>NO voy a llorar &#58;&#39;&#41;</p>
                                <p>de Nicki Nicole</p>
                                <p>en ALMA</p>
                            </div>
                        </div>
                        <section className='number'>
                            <p>00:00</p>
                            <p>02:58</p>
                        </section>
                    </div>
                    <h3 className='encabezado'>Roles</h3>
                    <div className='rols'>
                        <div className='rol-unico'> <div className='circulo' id='c1'></div> &#10098;&#9733;&#10099; Jacqueline</div>
                        <div className='rol-unico'> <div className='circulo' id='c2'></div> &#10098;&#9889;&#10099; NickiNicole</div>
                        <div className='rol-unico'> <div className='circulo' id='c3'></div> &#10098;&#x1f947;&#10099; Charles Leclerc</div>
                        <div className='rol-unico'> <div className='circulo' id='c4'></div> &#10098;&#x1f947;&#10099; Sergio Perez</div>
                        <div className='rol-unico'> <div className='circulo' id='c5'></div> &#10098;&#x1f947;&#10099; Max Verstappen</div>
                        <div className='rol-unico'> <div className='circulo' id='c6'></div> &#10098;&#x1f49c;&#10099; SpreenUpd</div>

                    </div>
                </section>            
            </section>
            {/* <section id="haerin"></section> */}
        </div>
        
    )
}
export default CardDc;