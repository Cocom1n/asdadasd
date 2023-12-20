import CustomCursor from './componets/Customcursor.js';
import  Inicio  from "./componets/Inicio";
import  Tateti  from "./componets/Tateti";
import  Cartita  from "./componets/Cartita";
import "./App.css"

import React, { useRef } from 'react';

function App (){

    const seccion1Ref = useRef(null);
    const seccion2Ref = useRef(null);
    const seccion3Ref = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <div>
            <CustomCursor />
            <div ref={seccion1Ref} className='seccion'>
                <Inicio />
                <button className='flechas' onClick={() => scrollToSection(seccion2Ref)}>↓</button>
            </div>

            <div ref={seccion2Ref} className='seccion'>
                <Tateti />
                <button className='flechas' onClick={() => scrollToSection(seccion1Ref)}>↑</button>
                <button className='flechas' onClick={() => scrollToSection(seccion3Ref)}>↓</button>
            </div>

            <div ref={seccion3Ref} className='seccion'>
                <Cartita />
                <button className='flechas' onClick={() => scrollToSection(seccion2Ref)}>↑</button>
            </div>
            
            

            {/* <button onClick={() => scrollToSection(seccion1Ref)}>↑</button>
            <button onClick={() => scrollToSection(seccion2Ref)}>↑</button>
            <button onClick={() => scrollToSection(seccion3Ref)}>↑</button> */}
        </div>
        
    )
}

export default App;