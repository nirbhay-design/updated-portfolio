import imagef from './66327437.jpg'
import './App.css';
import Aboutme from './Aboutme.js'
import Findme from './Findme.js'
import Experience from './Experience.js'
import Skill from './Skill.js'
function App() {
  return (
    <div className="App">
      <Skill/>
      <Experience />
      <Findme />
      <Aboutme />
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
