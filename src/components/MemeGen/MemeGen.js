import React, { useEffect, useState } from 'react';
import Buttons from './Buttons';
import Form from './Form';
import Meme from './Meme';

const MemeGen = () => {
    const [upperText, setUpperText] = useState('');
    const [lowerText, setLowerText] = useState('');
    const [imgUrl, setImgUrl] = useState('https://i.imgflip.com/63coik.jpg');
    const [allMemes, setAllMemes] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(content => {
                setAllMemes(content.data.memes)
                setImgUrl(content.data.memes[0].url)
            })
        }

        fetchData();
    }, []);

    return (
        <div style={{maxWidth: 700, margin: 'auto'}}>
            <Form 
                upperText={upperText} 
                lowerText={lowerText} 
                setLowerText={setLowerText} 
                setUpperText={setUpperText} />
            <Meme 
                imgUrl={imgUrl} 
                upperText={upperText} 
                lowerText={lowerText} />

            {allMemes && <Buttons 
                memes={allMemes} 
                setImgUrl={setImgUrl} 
                upperText={upperText} 
                lowerText={lowerText} 
                currMeme={allMemes[0]}/>}
        </div>
    )
};

export default MemeGen;