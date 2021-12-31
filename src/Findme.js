import React from 'react'
import './findme.css'
import {SiGmail, SiGithub} from 'react-icons/si'
import {BsLinkedin,BsFilePdfFill} from "react-icons/bs";

function Findme() {
    return (
        <div className='find__me'>
            <div className="find__me__icons">
                <h2 className="findme">Find Me Here</h2>
                <hr />
                <div className="icons__find">
                    <a href="https://github.com/nirbhay-design"><SiGithub className="git"/></a>
                    <a href="mailto:sharma.59@iitj.ac.in"><SiGmail className="gm"/></a>
                    <a href="https://www.linkedin.com/in/nirbhay-sharma-a2b846204/"><BsLinkedin className="lin"/></a>
                    {/* <a href="https://google.com"><BsFilePdfFill className="pdf"/></a> */}
                </div>
                
            </div>
        </div>
    )
}

export default Findme
