import React from 'react'
import './header.css'
import iitjimg from './iitj.png'
// import {GiNinjaHead} from 'react-icons/gi'
function Header() {
    return (
        <div className='header__class'>
            <div className="tempcont">
                <img className="iitj__img" src={iitjimg} alt="IITJ" />
                {/* <GiNinjaHead className="iitj__img"/> */}
            </div>
            <div className="all__options">

                <a className='options__all' href="#abtme">AboutMe</a>
                <a className='options__all' href="#expprojects">Experience</a>
                <a className='options__all' href="#skillsets">SkillSet</a>
                <a className='options__all' href="#projects">Projects</a>            
                <a className='options__all' href="#fndme">FindMe</a>            
            </div>
            <div className="tempcont"></div>
        </div>
    )
}

export default Header
