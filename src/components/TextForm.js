import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const [text,setText]=useState("");
    const handleUpClick = ()=>{
        let newText=text.toUpperCase();
        //console.log("Uppercase was clicked.");
        setText(newText);
        props.showAlert("Converted to uppercase.",'success');
    };
    const handleLoClick=()=>{
        //console.log("Lowercase was clicked.");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase.",'success');
    };
    const handleClearClick=()=>{
        //console.log("Lowercase was clicked.");
        let newText ="";
        setText(newText);
        props.showAlert("Text cleared.",'success');
    };
    const handleOnChange =(event)=>{
        //console.log("ON CHANGE FIRED.");
        setText(event.target.value);

    };
    const handleCopy= ()=>{
      let text= document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text copied.",'success');
    };
    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces removed.",'success');
    };
  return (
    <div className='container' style={{color: props.mode==='light'?'#042743':'white'}}>
    <h1 className='my-3'>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" id="myBox" rows="8" style={{backgroundColor: props.mode==='light'?'white':'gray',color: props.mode==='light'?'#042743':'white'}} value={text} onChange={handleOnChange}></textarea>
</div>
<button className={`btn btn-${props.mode==='light'?'dark':'light'} mx-2`} onClick={handleUpClick}>Convert to Uppercase</button>
<button className={`btn btn-${props.mode==='light'?'dark':'light'} mx-2`} onClick={handleLoClick}>Convert to Lowercase</button>
<button className={`btn btn-${props.mode==='light'?'dark':'light'} mx-2`} onClick={handleClearClick}>Clear Text</button>
<button className={`btn btn-${props.mode==='light'?'dark':'light'} mx-2`} onClick={handleCopy}>Copy Text</button>
<button className={`btn btn-${props.mode==='light'?'dark':'light'} mx-2`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
<div className="container my-3">
  <h1>Your Text Summary</h1>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>Average time needed to read the given text {text.split(" ").length * 0.3} minutes. </p>
  <h1>Preview</h1>
  <p>{text.length>0 ? text:"Preview of text entered above will appear here."}</p>
</div>
</div>
  )
}
TextForm.propTypes={heading :PropTypes.string,};
TextForm.defaultProps={heading : "Enter the text."};