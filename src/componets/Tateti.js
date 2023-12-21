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
                        muted
                    />
                </div>
    
                <section className="imagen-perfil"></section>
                
                <section className='general'>
                    <div className='datos'>
                        <h2> &#8475;oma</h2>
                        <p>@sprentina</p>
                        <p>She/her</p>
                    </div>
                    <div className='datos2'>
                        <h3>Sobre Mi</h3>
                        <p>barra brava  del club atlético newjeans</p>
                    </div>
                    <div className='datos3'>
                        <h3>Miembro Desde</h3>
                        <p> 23 Oct 22</p>
                    </div>
                    <h3>Roles</h3>
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