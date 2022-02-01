import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMeme } from '../contexts/MemeContext';

import Meme from './Meme';

const SingleMeme = () => {
    const [imgUrl, setImgUrl] = useState('')
    const [lowerText, setLowerText] = useState('')
    const [upperText, setUpperText] = useState('')
    const { getMemeById } = useMeme();
    const {id} = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(id)
                const data = await getMemeById(id)
                console.log(data)
                setImgUrl(data.imgUrl)
                setUpperText(data.upperText)
                setLowerText(data.lowerText)
            }
            catch {
                alert('No meme exist!');
            }
        }

        fetchData()
    }, [])

    return (
        <div style={{maxWidth: 700, margin: 'auto', paddingTop: 15}}>
            <Meme imgUrl={imgUrl} upperText={upperText} lowerText={lowerText} />
        </div>
    )
}

export default SingleMeme;