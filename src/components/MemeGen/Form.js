import React from 'react';

// Form Component
// Contains two field i.e for upperText and lowerText
const Form = ({upperText, setUpperText, lowerText, setLowerText}) => {
    return (
        <>
            <form className="mb-4">
                <div className="form-group row">
                    <label htmlFor="upperText" className="col-sm-2 col-form-label">Upper Text</label>
                    <div className="col-sm-10">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="upperText" 
                            value={upperText}
                            onChange={e => setUpperText(e.target.value)} />
                    </div>
                </div>
                <div className="form-group row mt-3">
                    <label htmlFor="lowerText" className="col-sm-2 col-form-label">Lower Text</label>
                    <div className="col-sm-10">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="lowerText"
                            value={lowerText}
                            onChange={e => setLowerText(e.target.value)} />
                    </div>
                </div>
            </form>
        </>
    )
}

export default Form;