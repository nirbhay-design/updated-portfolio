import React from 'react'
import './aboutme.css'
import { MdWavingHand } from "react-icons/md";
import imagef from './66327437.jpg'

function Aboutme({toggle,settoggle}) {
    const edu = "I am a Third Year UG student persuing Computer Science and Engineering from Indian Institute of Technology (IIT) Jodhpur"
    const me = "I have a great interest in Machine learning and mathematics behind it and it fascinates me the most. I also have a great interest in web development and I have been practicing it from past 1 year. Apart from studies and technology I also have a great interest in yoga, meditation, Badminton."
    return (
        <div className='about__me' id='abtme'>
            <div className="tellabout__me">
                <h2 className='title__name'>Hello My Name is Nirbhay Sharma <MdWavingHand className='wavinghand'/></h2>
                <hr />
                <h3>{edu}</h3>
                <h4>{me}</h4>
            </div>
            <img src={imagef} alt="Here is my image" className="aboutme__image"/>
            <button className='resume__button' onClick={(e)=>{
                e.preventDefault();
                settoggle(1-toggle);
            }}>My Resume</button>
        </div>
    )
}


export default Aboutme
