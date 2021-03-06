
import './App.css';
import Aboutme from './Aboutme.js'
import Findme from './Findme.js'
import Experience from './Experience.js'
import Skill from './Skill.js'
import Project from './Project.js'
import Header from './Header.js'
import Showresume from './Showresume.js'
import {useState} from 'react'
function App() {
  const [toggle, SetToggle] = useState(0);
  return (
    <div className="App">
      <Header/>
      <Aboutme toggle={toggle} settoggle={SetToggle}/>
      <Showresume toggle={toggle}/>
      <h2 className="text__between" id = "expprojects">Here are my Experience Projects </h2>
      <Experience />
      <h2 className="text__between" id = "skillsets">Here is My Skill Set</h2>
      <Skill />
      <h2 className="text__between" id = "projects">Here are some of my Projects</h2>
      <Project/>
      <Findme />  
      {/* <a href='/'>About Me</a>
          <hr/>
          <a href='/'>Experience</a>
          <hr/>
          <a href='/'>Skill Set</a>
          <hr/>
          <a href='/'>Projects</a>
          <hr/>
          <a href='/'>Hobbies</a>
          <hr/>
          <a href='/'>Find Me</a>
          <hr/> */}
    </div>
  );
}

export default App;
