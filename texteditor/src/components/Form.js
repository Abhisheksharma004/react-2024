import React, {useState} from 'react';

export default function Form(props) {

    const [text, setText] = useState('Enter Text Here');
    // setText("New Text");
    const handleOnchange =(event) => {
        // console.log("On Change");
        setText(event.target.value); 
    }

    const handleUp =() => {
        // console.log("Uppar");
        let newtext = text.toUpperCase();
        setText(newtext);
    }

    const handleLower =() => {
        // console.log("Lower");
        let newtext = text.toLowerCase();
        setText(newtext);
    }

    return (
        <>
            <div className='container'>
                <div className="mb-3">
                    <h1 className="form-label">{props.th}</h1>
                    <textarea className="form-control" value={text} onChange={handleOnchange}  id="myBox" rows="10" ></textarea>
                </div>
                <button type="button" className="btn btn-success mx-2" onClick={handleUp}>Upper Case</button>
                <button type="button" className="btn btn-success" onClick={handleLower}>Lower Case</button>
            </div>
            <div className='container my-3'>
                <h1>Text Summary</h1>
                <p>{text.split(" ").length} Words and {text.length} Character</p>
                <p>{0.008 * text.split(" ").length} Minat To Read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>

    )
}
