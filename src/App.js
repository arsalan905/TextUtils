import TextForm from './TextForm.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar.js';

import React, { useState } from 'react';
import Alert from './Alert.js';
import About from './About.js';

function App() {
  const [mode, setMode] = useState('light'); //whether dark is enabled or false
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
        msg : message,
        type: type

    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-primary');

  }
  const toggleMode = (cls) =>{
    removeBodyClasses();
    document.body.classList.add('bg-'+ cls);
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="grey";
      showAlert("Dark mode has been enabled","success");
      document.title = 'TextUtils - Dark Mode';

  } 
  else{
    if(mode==='dark')
    setMode('light');
    document.body.style.backgroundColor="white";
    showAlert("Light mode has been enabled","success");
    document.title= 'TextUtils - Light Mode';
 }
}
  return (
    <>    
    <Router>
      {/* <Navbar title="TextUtils" aboutText="About Title" /> */}
        <Navbar mode={mode} toggleMode={toggleMode} /> 
        <Alert alert={alert}/>
        <div className='container my-3'>
        {/* <TextForm showAlert={showAlert} heading="Enter your text here" mode={mode} /> */}
      <Routes>
      <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text here" mode={mode} />} />
      <Route exact path="/About" element={<About mode={mode}/>} />
      </Routes>        
        </div>
        </Router>           
    </>
  );
}

export default App;
