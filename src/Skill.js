import React from 'react'
import './skill.css'
import {FaReact,FaNodeJs,FaPython} from 'react-icons/fa'
import {SiPytorch,SiHaskell,SiMysql,SiFlask} from 'react-icons/si'



function Skill() {
    const list = ['languages','frameworks','database','deployment']
    const myskill = {
        languages:['Python','HTML',"CSS","Js","C","C++","Java","Haskell","Prolog"],
        frameworks:['Pytorch',"Sklearn","Flask","Numpy","Pandas","Matplotlib","Seaborn","Regex","Git","Github","linux","React","Nodejs","ejs"],
        database:['MySql',"MongoDB","Firebase"],
        deployment:['Heroku',"Firebase"]
    }
    return (
        <div className='skills__nirbhay'>
            <div className="skill__section">
                
                <FaPython className="icons"/>
                <FaNodeJs className="icons"/>
                <FaReact className="icons"/>
                <SiFlask className="icons"/>
                <SiHaskell className="icons"/>
                <SiMysql className="icons"/>
                <SiPytorch className="icons"/>
            </div>
            {list.map((item,idx)=>{
                return <div className="skill__section">
                    <h3 className='each__title'>{item}</h3>
                    <hr />
                    {myskill[item].map((skl,index)=>{
                        return <p>{skl}</p> 
                    })}
            </div>
            })}
            
        </div>
    )
}

export default Skill
