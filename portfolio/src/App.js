import './App.css';
import TRUNK from 'vanta/dist/vanta.trunk.min.js';
import React, { useState, useEffect, useRef } from "react";
import p5 from "p5";
import Grow from "@mui/material/Grow";
import Box from "@mui/material/Box";
import { Link } from 'react-scroll';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import THREE from 'three';

function App() {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(TRUNK({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        chaos: 3,
        color: 0x592d39,
        p5: p5
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  const checked = true;
  return (
    <div>
      <div ref={myRef}>
      <div style={{position: 'absolute'}}>
      <Navbar bg="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/rabbit.png"
              width="150"
              height="120"
              alt="rabbit"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      </div>
        <div className="App App-header">
          <Grow in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 2000 } : {})}>
            <Box>
              <p>Hey there, I'm</p>
              <h1>Robert Lazarov</h1>
            </Box>
          </Grow>
          <Grow in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 4000 } : {})}>
              <h1>I'm a Backend Developer</h1>
          </Grow>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
