import React, { useState } from 'react';

export default function Textforms(props) {
    const [text, setText] = useState('');

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showalert("converted to UpperCase","success")
    }

    const handlelowClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showalert("converted to LowerCase","success")
    }

    const handleclearClick = () => { ;
        setText("");
        props.showalert("Text Cleared","success")
    }

    const handleCopy = () => { 
        // var text = document.querySelector("#mybox")
        // text.select();
        // navigator.clipboard.writeText(text.value);
        // document.getSelection().removeAllRanges();
        // props.showalert("Text Copied","success")

        //optimised way yo copy -->

        navigator.clipboard.writeText(text);
        props.showalert("Text Copied","success")

    }

    const handleremovespaces = () => {
        let newtext = text.split(/[ ] + /);
        setText(newtext.join(" "));
        props.showalert("Spaces removed","success")
    }


    return (
        <>
        <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1 className='my-3'>{props.heading}</h1>
            <div className="mb-3">
                <textarea placeholder = "Enter text here..."className="form-control" style={{backgroundColor:props.mode === 'dark'?'#13466e':'white' ,color: props.mode === 'dark'?'white':'black'}} value={text}onChange={handleOnChange}id="mybox"rows="7"></textarea>
            </div>
            <button disabled={text.length === 0} className="btn primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button disabled={text.length === 0} className="btn primary mx-1 my-1" onClick={handlelowClick}>Convert to lowercase</button>
            <button disabled={text.length === 0} className="btn primary mx-1 my-1" onClick={handleclearClick}>Clear text</button>
            <button disabled={text.length === 0} className="btn primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length === 0} className="btn primary mx-1 my-1" onClick={handleremovespaces}>Remove Extra spaces</button>
        </div>
        <div className="container my-2" style={{color: props.mode === 'dark'?'white':'black'}}>
             <h2>Your text Summary</h2>
             <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0 }).length}words and {text.length} characters.</p>
             <p>{0.008 * (text.split(/\s+/).filter((element)=>{return element.length !== 0 }).length)} minutes required to read </p>
             <h2>Preview</h2>
             <p>{text.length>0?text:"Nothing to preview."}</p>
        </div>
        </>
    );
}
