import React , { useState } from 'react';



export default function Contact() {
  
  const handleUpClick = ()=>{
          let newText = text.toUpperCase();
          setText(newText)
  }
  const handleDnClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleDelClick= ()=>{
    let newText ='';
    setText(newText)
  }
  const handleonChange= (event)=>{
    setText(event.target.value)
  }

   const handleCopy= ()=>{
    var text = document.getElementById("myBox1")
     text.select();
     navigator.clipboard.writeText(text.value)
   }
   const handleExtraSpaces= ()=>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(""))
   }
  const [text,setText]= useState('')
  
  return (
    <>
    <div>
        <h1> Enter Text Here  </h1>
  <textarea className='box1' value={text} onChange={handleonChange} id="myBox1"></textarea>
  </div>
  <div className='btn'>
  <button id='btn' onClick={handleUpClick}>To Upper Case</button>
  <button id='btn' onClick={handleDnClick}> To toLower Case</button>
  <button id='btn' onClick={handleDelClick}> To Del Case</button>
  <button id='btn' onClick={handleExtraSpaces}>To Remove Space</button>
  <button id='btn' onClick={handleCopy}>To Copy Text</button>
    </div>
    <div className='bottom'>
      <h1>Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} Characters</p>
      <h2>Preview</h2>
      <p>{0.008 * text.split("").length} Minuts to read</p>
      <p>{text}</p>

    </div>
    </>
  )
}
