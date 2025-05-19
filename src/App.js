
import { React, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textforms from './components/Textforms';
import Alert from './components/Alert';
import About from './components/About'; 
import Landing_page from './components/Landing_page';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  } from 'react-router-dom';
function App() {
  const [mode,setmode] = useState('light');
  const [alert,setalert] = useState(null);

  const showalert = (message,type) => {
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null)
    },1000)
  }

  const tooglemode = () => {
    console.log("func called")
    if(mode === "light"){
      setmode("dark");
      document.body.style.backgroundColor = '#001c35';
      showalert("Dark mode has enabled","success")
      document.title = "Textutils - dark mode";

      //for blinking title:---

      // setInterval(() => {
      //   document.title = "Textutils is amazing";
      // }, 1800);
      // setInterval(() => {
      //   document.title = " Install Textutils";
      // }, 1300);

    }else{
      setmode("light");
      document.body.style.backgroundColor = 'white';
      showalert("Light mode has enbaled","success")
      document.title = "textutils - Light mode";
    }
    console.log(mode)
  }


  return (
    <>
    <Router>
      <Navbar name="Text Analyzer" mode = {mode} tooglemode = {tooglemode} destination="google" />
      <Alert alert = {alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path='/landingPage' element = {<Landing_page/>}></Route>
          <Route exact path='/about' element = {<About mode = {mode}/>} />
          <Route exact path='/textfroms'element={<Textforms showalert={showalert} heading="Try textUtils -Words & Character counter, Text manipulater" mode = {mode} placeholder = "Enter text here:-"/>} />
        </Routes> 
      </div>
      </Router>
      
      
    </>
  );
}

export default App;
 