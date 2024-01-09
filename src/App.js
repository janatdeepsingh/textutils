import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
      setAlert({msg:message,type:type});
      setTimeout(()=>{
        setAlert(null);
      },1000);
  };
  const toggleMode=()=>{
      if(mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor='#042743';
        showAlert("Dark Mode has been enabled.",'success');
      }
      else{
        setMode('light');
         document.body.style.backgroundColor='white';
         showAlert("Light Mode has been enabled.",'success');
      }
  };
  return (
    <BrowserRouter>
    <Navbar title="My Text App" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container mb-3">
    <Routes>
      <Route exact path='/' element={<TextForm heading="Enter your text to analyze " mode={mode} showAlert={showAlert}/>}>
      </Route>
      <Route exact path='/about' element={ <About />} >
      </Route>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
