import React from 'react'
import { BsTypeH1 } from 'react-icons/bs'
import './exp.css'


function Experience() {
    const myexpr = [
        { 
            "prof":"Angshuman Paul",
            projtitle:"Automated Detection of anomalies in Chest x-ray Images",
            duration:"5 months",
            desc:"The task is to design a light weight CNN architecture that can decide that whether a chest x-ray has some anomaly or not. The problem is basically a binary classification problem and our implementation has given comparable results with some of the existing state of art architectures such as squeezenet in that regard."
        },
        {
            prof:"Angshuman Paul",
            projtitle:"Object detection",
            duration:"currently going on",
            desc:"use transformers for object detection"
        }
    ]
    return (
        <div className='experience__div'>
            {myexpr.map((exp,index)=>{
                return <>
                        <div className="myexpr">
                            <h3>{index+1}-{exp.projtitle}</h3>
                            <p><b>Mentor</b>: Dr. {exp.prof}</p>
                            <p><b>Duration</b>: {exp.duration}</p>

                            <hr />

                            <h4>{exp.desc}</h4>

                        </div>
                
                    </>
            })}
            
        </div>
    )
}



export default Experience
