import React, {useState} from 'react'





export default function TextForm(props) {

  const handleUpClick =()=>{

    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success")
  }


  const handleLoClick =()=>{

    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success")
  }

  const handleClearClick =()=>{

    setText('');
    props.showAlert("Text cleared","success")
  }

  const handleBlankClick =()=>{
    let newText=text.replaceAll(" ","");
    setText(newText);
    props.showAlert("Removed blank spaces","success")
   

  }

  const handleCopy=()=>{

    var text=document.getElementById("myBox");
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text copied","success")
  }

  const handleReverseClick =()=>{
   
    let newText=text.split('').reverse().join('');
    setText(newText);
    props.showAlert("Text reversed","success")
  }
  
  const handleFirstupperClick =()=>{
   
    const words = text.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }

    let newText=words.join(' ');
    setText(newText);
    props.showAlert("Converted first letter of each word in uppercase","success")
    

  }
  


  const handleOnChange =(event)=>{

    setText(event.target.value);

  }

  function getWordCount(text) {
    return text.split(' ')
      .filter(function(n) { return n !== '' })
      .length;
}




  const [text,setText]=useState('');


  return (
    <>

    <div>
            <h1 className='my-3'>{props.heading}</h1>
            <div className="mb-3 my-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>



          <div class="col-sm-9 p-0 my-3">
              <button type="button" className={`btn btn-${props.txtMode} mx-1`} onClick={handleUpClick}>Uppercase</button>
              <button type="button" className={`btn btn-${props.txtMode} mx-1`} onClick={handleBlankClick}>Remove blank spaces</button>
             
          </div>

          <div class="col-sm-9 p-0 my-3">
               <button type="button" className={`btn btn-${props.txtMode} mx-1`} onClick={handleLoClick}>Lowercase</button>
               <button type="button" className={`btn btn-${props.txtMode} mx-1`} onClick={handleReverseClick}>Reverse</button>
               <button type="button" className={`btn btn-${props.txtMode} mx-1`} onClick={handleClearClick}>Clear text</button>

   


          </div>

          
          <div class="col-sm-9 p-0 my-3">
               <button type="button" className={`btn btn-${props.txtMode} mx-1`} onClick={handleFirstupperClick}>First letter of each word capital</button>
             
          </div>

                    
          <div class="col-sm-9 p-0 my-3">
               <button type="button" className={`btn btn-${props.txtMode} mx-1`} onClick={handleCopy}>Copy text</button>
             
          </div>

          

</div>

      <div className='mb-3 my-3'>

        <h1>Your text Summary </h1>

        <p>{getWordCount(text)} words and {text.length} characters</p>

        <p>{0.008*(getWordCount(text))} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
         

      </div>


 
    
    </>
  

  )
}
 





