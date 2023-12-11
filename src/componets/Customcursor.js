// CustomCursor.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Cursor1 = styled.div`
    position: fixed;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle farthest-side at center center, #F4B0FF  12%, transparent 100%);  
    pointer-events: none;
    z-index: -1000;
    transform: translate(-50%, -50%);
    transition: transform 0.3s ease, background-color 0.2s ;
`;
const Cursor2 = styled.div`
    position: fixed;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle farthest-side at center center, #FFEDB3 12%, transparent 100%);  
    pointer-events: none;
    z-index: -1000;
    transform: translate(-50%, -50%);
    transition: transform 0.1s, background-color 0.2s ;
`;

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateCursorPosition = (e) => {
            requestAnimationFrame(() => {
            setPosition({ x: e.clientX, y: e.clientY });
            });
        };

        document.addEventListener('mousemove', updateCursorPosition);

        return () => {
            document.removeEventListener('mousemove', updateCursorPosition);
        };
    }, []);

    return (
        <div>            
            
            <Cursor2
                style={{
                    transform: `translate(${position.x-150}px, ${position.y-150}px)`,
                }}
            />
            <Cursor1
                style={{
                    transform: `translate(${position.x}px, ${position.y - 250}px)`,
                }}
            />
        </div>
        
        
    );
};

export default CustomCursor;

