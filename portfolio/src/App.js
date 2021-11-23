import './App.css';

import React, { useState, useEffect, useRef } from "react";
import p5 from "p5";
import Grow from "@mui/material/Grow";
import Box from "@mui/material/Box";
import { Link } from 'react-scroll';
import * as Scroll from 'react-scroll';
//import * as THREE from 'three';
import TRUNK from 'vanta/dist/vanta.trunk.min';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

let scroll = Scroll.animateScroll;

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
        color: 0x076678,
        backgroundColor: 0x282828,
        chaos: 2.00,
        p5: p5
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  const checked = true;
  return (
    <div className="App">
      <>
      <Navbar expand="sm" bg="transparent" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand>
            {/* eslint-disable-next-line */}
            <a onClick={scroll.scrollToTop()} href="#"><img
              src="rabbit.png"
              width="25"
              height="25"
              
              /> 
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto"> 
              <Nav.Link>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={-250} duration={20}>About</Link>
              </Nav.Link>
              <Nav.Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-250} duration={20}>Projects</Link>
              </Nav.Link>
              <Nav.Link>
                <Link activeClass="active" to="certs" spy={true} smooth={true} offset={-250} duration={20}>Certificates</Link>
              </Nav.Link>
              <Nav.Link>
                <Link activeClass="active" to="hire" spy={true} smooth={true} offset={-250} duration={20}>Hire Me</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
      <div className="App-header" ref={myRef}>
      <Grow in={checked}
        style={{ transformOrigin: '0 0 0' }}
        {...(checked ? { timeout: 2000 } : {})}>
        <Box>
          <p>Hey there 👋,</p>
          <h1>I'm Robert Lazarov.</h1>
        </Box>
      </Grow>
      <Grow in={checked}
        style={{ transformOrigin: '0 0 0' }}
        {...(checked ? { timeout: 4000 } : {})}>
        <Box> 
          <h1>I'm a <span id="highlight">Backend Developer.</span></h1>
        </Box> 
      </Grow>
      </div>
      <div className="About-header">
        <h1 name="about">About Me</h1>
          <h5 style={{}}>
            I'm capable of making a variety of backend applications in Node.js and Express.js primarily. I'm also comfortable
            with a few front-end technologies such as React, Material UI, and Reactstrap. If I need it, I'll learn it.
          </h5>
          <h5>
            Hobby-wise I mainly just do a bit of digital painting and write. I'm a simple guy.
          </h5> 
      </div>
      <div className="About-header">
        <h1 name="projects">Projects</h1>
      </div>
      <div className="About-header">
        <h1 name="certs">Certificates</h1>
      </div>
      <div className="Hire-me">
        <h1 name="hire">Hire Me</h1>
        <form name="contact" netlify netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
        </form>
        <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Your Name: <input type="text" name="name"/></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email"/></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default App;