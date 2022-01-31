import React from 'react';

// Meme Component
// Shows the image along with text on top of it
const Meme = ({imgUrl, upperText, lowerText}) => {
    return (
        <div style={{ position: "relative", color: 'white', marginBottom: 15}}>
            <img src={imgUrl} style={{width: "100%"}} alt="meme"/>
            <h2 style={{top: 5,  position: 'absolute', textAlign: 'center', left: '50%', transform: 'translateX(-50%)'}}>
                {upperText}
            </h2>
            <h2 style={{bottom: 5, position: 'absolute', textAlign: 'center', left: '50%', transform: 'translateX(-50%)'}}>
                {lowerText}
            </h2>
        </div>
    )
}

export default Meme;