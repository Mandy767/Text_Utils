
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';

import React,{useState} from 'react'
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
 

// } from "react-router-dom";



function App() {

  const [mode,setMode] = useState('light');
  const [line,setLine] = useState('#212529');
  const [alert,setAlert] = useState(null);
 
  const [txtMode,setTxtmode] = useState("dark");


  const showAlert=(message,type)=>{

    setAlert({
      msg: message,
      type: type

    })

    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      setTxtmode('light')
      document.body.style.backgroundColor="#212529"
      document.body.style.color='white'
      setLine('white')
      showAlert("Dark mode enabled","success")
      document.title="TextUtils-dark mode"

      // setInterval(()=>{

      //   document.title="A"
      // },2000);                          // for showing text on title with some amount of delay

      // setInterval(()=>{

      //   document.title="B"
      // },1500);
    
    
    }
    else{
      setMode('light');
      setTxtmode('dark')
      document.body.style.backgroundColor='white'
      document.body.style.color='#212529'
      setLine('#212529')
      showAlert("Light mode enabled","success")
      document.title="TextUtils-light mode"
    }


  }



  return (
  <>   




 {/* <Router> */}
 <Navbar title="TextUtils" parameter1="Home" parameter2="About" mode={mode} toggleMode={toggleMode}  txtMode={txtMode} line={line}/>
 <Alert alert={alert}/>

 <div className="container">


{/* <Routes> */}
  {/* <Route path="/about" element={ <About mode={mode} />}/>

  
      

  <Route path="/" element={ <TextForm showAlert={showAlert} heading="Enter the text to analyse below" txtMode={txtMode}/>}/> */}
{/* <About mode={mode} /> */}
<TextForm showAlert={showAlert} heading="Enter the text to analyse below" txtMode={txtMode}/>

{/* </Routes> */}
    
{/* <About />
<TextForm showAlert={showAlert} heading="Enter the text to analyse below" txtMode={txtMode}/> */}

</div>
 {/* </Router> */}


 

  </>

  );
}

export default App;

