import React, { useState } from "react"


export default function TextForm(props) {
    const [text, setText]= useState("");

    const handleOnUpClick=()=>{
        console.log(text)
        const newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Capitalized","success")
    }
    const handleOnLowClick=()=>{
        console.log(text)
        const newText= text.toLowerCase();
        setText(newText)
        props.showAlert("Lowercase Applied","success")
    }
    const handleOnClearClick =()=>{
        const newText= ' ';
        setText(newText)
        props.showAlert("Text Cleared","success")
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Speak is activated","success")
      }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={handleOnUpClick} >Convert To Uppercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleOnLowClick} >Convert To Lowercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleOnClearClick} >Clear</button>
            <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length } words And {text.length} Characters</p>
            <p>{0.08*text.split(" ").length} Minutes will Take to read this</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
        

    )
}