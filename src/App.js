
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';

function App() {
  const[alert,setalert]=useState(null);
  const showAlert=(message,type)=>{
    setalert({
      message:message,
      type:type
    })
  }
  return (
    <>
    
     <Navbar title = "Myutils" abouText = "Jai mata di" />
     <div className = "container my3">
    <TextForm heading = "..Enter Text to analyse" alert = {alert} showalert = {showAlert}/>
    <Alert alert = {alert} />
     </div>
    </>
  );
}

export default App;

