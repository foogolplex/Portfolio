import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Grow from "@mui/material/Grow";
import Box from "@mui/material/Box";
import { Link } from 'react-scroll';
import * as Scroll from 'react-scroll';

let scroll = Scroll.animateScroll;

function Project(props){
    return(
        <div className="col" style={{textAlign: 'center'}}>
            <h4 className="display-7">{props.ProjName}</h4>
            <div className="thumbnail">
              <img src={props.thumbnail} width="200px" height="100px"></img>
            </div>
            <Button variant="outline-secondary" href={props.Demo} target="_blank" rel="noopener noreferrer">Live Demo</Button>
            <Button variant="outline-secondary" href={props.Github} target="_blank" rel="noopener noreferrer">Source</Button>
            <h6>
                {props.Description}
            </h6>
            <div className="tech-stack">
                
            </div> 
        </div> 
    );
}
function Form(){
  return (
    <div>
      <form name="contact" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <div style={{textAlign: 'center'}}>
            <p>
            <label><div>Your Name:</div><input type="text" name="name"/></label>
            </p>
            <p>
            <label><div>Your Email:</div><input type="email" name="email"/></label>
            </p>
            <p>
            <label><div>Message:</div><textarea name="message"></textarea></label>
            </p>
            <p>
            <Button size="lg" variant="outline-secondary" type="submit" style={{color: "white"}}>Send</Button>
            </p>
        </div>
      </form>
    </div>
  );
}
var Hspan = (props) => {
  return (
    <span id="highlight">{props.text}</span>
  )
}
var Landing = (props) => {
  var checked = props.checked;
  var myRef = props.myRef;
  return (
    <div className="App-header" ref={myRef}>
      <Grow in={checked}
        style={{ transformOrigin: '0 0 0' }}
        {...(checked ? { timeout: 2000 } : {})}>
        <Box>
          <p>Hey there 👋🏻,</p>
          <h1 className="display-3">I'm <span id="name">Robert Wood</span>.</h1>
        </Box>
      </Grow>
      <Grow in={checked}
        style={{ transformOrigin: '0 0 0' }}
        {...(checked ? { timeout: 4000 } : {})}>
        <Box> 
          <h1 className="display-3">I'm a <Hspan text="Fullstack Developer" /></h1> 
        </Box> 
      </Grow>
    </div>
  );
}
var MainContent = () => {
  return (
    <div>
      <div className="About-header">
        <h1 className="display-3" style={{paddingBottom: '2%'}}>🐇</h1>   
        <h1 name="About" className="display-3">About</h1>
        <h5>
          I'm capable of making web applications with <Hspan text="Express.js" /> and <Hspan text="React.js" />. I am always working on my skills and I am learning more about TDD/test driven development and unit testing currently.
            <br></br> If I <strong>need</strong> it, I'll <strong>learn</strong> it.
        </h5>
      </div>
      <div className="Projects-header">
        <h1 name="Projects" className="display-3" style={{paddingBottom: '5%'}}>Projects</h1>
        <div className="row" style={{alignItems: 'center'}}>
            <Project ProjName="MLB Web Scraper" Demo="" thumbnail="./screenshots/mlbwebscraper.png" Description="A django app that scrapes stats of pitchers and batters from the official MLB website — then displays the data in a table. I made this one with a friend." Github="https://github.com/spencerkinney/mlb-web-scraper"/> 
            <Project ProjName="Seaside Scroll Reader" thumbnail="./screenshots/seasidescroll1.png" Description="A web app for a writer friend that uses a npm package called react-reader as well as vanta.js for the graphics. I had to delve deep into react-reader to figure out how to implement the nonlinear storytelling, night mode, and font size buttons." Demo="https://seasidescroll.netlify.app" Github="https://github.com/foogolplex/Seaside-Scroll"/> 
            <div className="w-100" style={{paddingBottom: '5%'}}></div> 
            <Project ProjName="Atomicbot" Demo="" Description="A personal discord bot that can serve images from imageboards and can roughly play chess through text commands. Uses a python module called discord.py among other modules." Github="https://github.com/foogolplex/Atomicbot"/> 
            <Project ProjName="Morph" Demo="" thumbnail="./screenshots/morph_screenshot.png" Description="This is a fractal visualizer written in C++ that uses a graphics library called SDL2. This project uses object oriented programming." Github="https://github.com/foogolplex/Morph"/> 
        </div>
      </div>
      <div className="Certs-header">
        <h1 name="Certs" className="display-3">Certification</h1>
        <Certs />
      </div>
      <div className="Hire-me">
        <h1 name="Hire Me" className="display-3">Hire Me.</h1>
        <Form />
      </div>
    </div>
  );
}
function Certs(){
  return (
    <div>
      <div style={{textAlign: 'center', paddingTop: '5%', paddingBottom: '5%'}}>
        <Button variant="outline-secondary" size="lg">
          <a target="_blank" rel="noopener noreferrer" href="https://www.udemy.com/certificate/UC-4295c6b1-0f58-4e76-847e-30144d7d258c/">Discrete Math</a>
        </Button>
      </div>
      <div>
        <Button variant="outline-secondary" size="lg">
          <a target="_blank" rel="noopener noreferrer" href="https://www.freecodecamp.org/certification/robdev/javascript-algorithms-and-data-structures">Javascript Data Structures & Algorithms</a>
        </Button>
      </div>
    </div>
  );
}
function NavLink(props){
  return (
      <Link activeClass="active" to={props.Text} spy={true} smooth={true} offset={-250} duration={20}>
    <Nav.Link>
      {props.Text}
    </Nav.Link></Link>
  );
}
var Navigation = () => {
  return (
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
            <Nav className="ml-auto nav nav-tabs"> 
              <NavLink Text="About" />
              <NavLink Text="Projects" />
              <NavLink Text="Certs" />
              <NavLink Text="Hire Me" />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export {Navigation, MainContent, Landing};