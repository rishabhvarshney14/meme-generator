import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useMeme } from '../../contexts/MemeContext';

// Buttons Component
// this include buttons like Save and Generate
const Buttons = ({memes, setImgUrl, upperText, lowerText, currMeme, imgUrl}) => {
    const {currentUser} = useAuth();
    const {saveMeme} = useMeme()
    const [memeId, setMemeId] = useState(currMeme !== undefined ? currMeme.id : '')
    const [savedUrl, setSavedUrl] = useState('')
    const [isSaved, setIsSaved] = useState(false)
    const authenticated = currentUser ? true : false

    // Function to generate new meme image
    const generateMeme = () => {
        const idx = Math.floor((Math.random() * memes.length));
        const url = memes[idx].url;
        setImgUrl(url);
        setMemeId(memes[idx].id);
        setSavedUrl('')
        setIsSaved(false)
    }

    // Function to call API and create a new meme with the provided text
    const callSaveMeme = async () => {
        if (!authenticated) {
            alert("Please create an account before saving a meme!")
            return
        }
        
        let url = ''
        if (imgUrl.lenght < 1) {
            url = memes[0].url
        }
        else {
            url = imgUrl
        }
        const id = await saveMeme(currentUser.email, url, upperText, lowerText);
        setIsSaved(true)
        setSavedUrl('https://stoic-bhaskara-e37613.netlify.app/meme/' + id)
    }

    return (
        <div style={{marginBottom: 15}}>
            <div className='d-flex justify-content-between' style={{marginBottom: 15}}>
                <button type="button" className="btn btn-success btn-lg" onClick={callSaveMeme}>Save Meme</button>
                <button type="button" className="btn btn-secondary btn-lg" onClick={generateMeme}>Generate New</button>
            </div>

            {isSaved && (
                <div>
                    <form className='form-inline' style={{maxWidth: '50%'}}>
                        <div className="form-group row">
                            <label htmlFor="url" className="col-sm-2 col-form-label">URL</label>
                            <div className="col-sm-10">
                                <input className="form-control" type="text" defaultValue={savedUrl} id="url" readOnly />
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
};

export default Buttons;