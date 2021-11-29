import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect, useRef } from "react";
import {Navigation, Landing, MainContent} from './Components';

var App = () => { 
  const checked = true 
  return (
    <div className="App"> 
      <Navigation />
      <Landing checked={checked} /> 
      <MainContent />
    </div>
  );
}

export default App;