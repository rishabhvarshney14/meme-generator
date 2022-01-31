import React, { useState } from 'react';

// Buttons Component
// this include buttons like Save and Generate
const Buttons = ({memes, setImgUrl, upperText, lowerText, currMeme}) => {
    const [memeId, setMemeId] = useState(currMeme !== undefined ? currMeme.id : '')
    const [savedUrl, setSavedUrl] = useState('')
    const [isSaved, setIsSaved] = useState(false)

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
    const saveMeme = () => {
        const data = new FormData();
        data.append("template_id", memeId)
        // imgflip username and password is required here
        data.append('username', '')
        data.append("password", '')
        data.append("text0", upperText)
        data.append("text1", lowerText)

        const requestData = {
            method: 'POST',
            body: data,
        }

        fetch('https://api.imgflip.com/caption_image', requestData)
        .then(response => response.json())
        .then(data => {
            if (data['success'] === false) {
                alert("Saving meme Failed");
                console.log(data)
            }
            else {
                setSavedUrl(data.data.url);
                setIsSaved(true);
            }
        })
        .catch((error) => {
            alert('Saving Meme Failed');
            console.log(error)
        });
    }

    return (
        <div style={{marginBottom: 15}}>
            <div className='d-flex justify-content-between' style={{marginBottom: 15}}>
                <button type="button" className="btn btn-success btn-lg" onClick={saveMeme}>Save Meme</button>
                <button type="button" className="btn btn-secondary btn-lg" onClick={generateMeme}>Generate New</button>
            </div>

            {/* Url of the saved meme will only be seen when you saved a meme  */}
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