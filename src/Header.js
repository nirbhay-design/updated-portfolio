import React from 'react'
import './header.css'
import iitjimg from './iitj.png'
import {Link} from 'react-scroll'
import {GiHamburgerMenu} from 'react-icons/gi'
import {useState, useEffect} from 'react'

function Header() {
    const [tgl , settgl] = useState(0);
    var width;
    window.onresize = function() {     
        settgl((window.innerWidth>700)?0:tgl)
    }; 
    return (
        <div className='header__class'>
            <div className="tempcont">
                <img className="iitj__img" src={iitjimg} alt="IITJ" />
                <button onClick={(e)=>{
                    e.preventDefault();
                    settgl(1-tgl);
                }} className='drop__button'><GiHamburgerMenu className='ham'/></button>
                {/* <GiNinjaHead className="iitj__img"/> */}
            </div>
            <div className={(!tgl)?"all__options":"toggle__options"}>
                <Link className='options__all' to="abtme" smooth={true} duration={1000}>AboutMe</Link>
                <Link className='options__all' to="expprojects" smooth={true} duration={1000}>Experience</Link>
                <Link className='options__all' to="skillsets" smooth={true} duration={1000}>SkillSet</Link>
                <Link className='options__all' to="projects" smooth={true} duration={1000}>Projects</Link>
                <Link className='options__all' to="fndme" smooth={true} duration={1000}>FindMe</Link>
                {/* <a className='options__all' href="#abtme">AboutMe</a> */}
                {/* <a className='options__all' href="#expprojects">Experience</a>
                <a className='options__all' href="#skillsets">SkillSet</a>
                <a className='options__all' href="#projects">Projects</a>            
                <a className='options__all' href="#fndme">FindMe</a>             */}
            </div>
            <div className="tempcont"></div>
        </div>
    )
}

export default Header
