import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useMeme } from '../contexts/MemeContext';
import Meme from './Meme'

const UserMemes = () => {
    const [memes, setMemes] = useState([])
    const {getMemes} = useMeme()
    const {currentUser} = useAuth()

    useEffect(() => {
        const fetchData = async () => {
            const data = await getMemes(currentUser.email)
            console.log(data)
            setMemes(data);
        }

        fetchData()
    }, [])

    return (
        <div style={{maxWidth: 700, margin: 'auto', paddingTop: 15}}>
            {memes.map(item => {
                return (
                    <div style={{marginBottom: 15}}>
                        <Meme imgUrl={item.imgUrl} upperText={item.upperText} lowerText={item.lowerText} />
                        <div style={{border: "1px solid black"}}></div>
                    </div>
                )
            })}
        </div>
    )
}

export default UserMemes