import React from 'react'
import './project.css'
import {FaReact,FaNodeJs} from 'react-icons/fa'
import {SiPytorch,SiFlask,SiGithub} from 'react-icons/si'
import {VscLiveShare} from 'react-icons/vsc'

function Project() {
    const plist = [
        {
            title:"email-service-app flask",
            github:"https://github.com/nirbhay-design/email-service",
            livelink:"https://email-services-sharma59.herokuapp.com/",
            category:"web dev",
            desc:"This app was developed in flask. A user can login to this app and can send emails from one emailid to another. this app comes with a fully functional database which stores all the mails and user credentials.",
            tech:<SiFlask className='iconss'/>
        },
        {
            title:"page replacement algorithms visualizer using react",
            github:"https://github.com/nirbhay-design/pra-visualizer",
            livelink:"https://pra-visualizer.web.app/",
            category:"web dev",
            desc:"This app is targetting the topic, page replacement algorithms in Operating system. A user can easily be able to visualize the page replacement algorithms. Some of the advance algorithms are also implemented in this application.",
            tech:<FaReact className='icons1'/>
        },
        {
            title:"netflix-clone using react",
            github:"https://github.com/nirbhay-design/netflix-clone-nirbhaysharma",
            livelink:"https://netflix-clone-d6989.web.app/",
            category:"web dev",
            desc:"This the app made in react. This is the small level netflix-clone.",
            tech:<FaReact className='icons1'/>
        },
        {
            title:"todo-app using nodejs",
            github:"https://github.com/nirbhay-design/todo-app-nodejs",
            livelink:"https://todos-sharma59.herokuapp.com/",
            category:"web dev",
            desc:"This is the app made for practice and built using nodejs, ejs. It also contains mysql database and hosted on heroku platform.",
            tech:<FaNodeJs className='icons2'/>
        },
        {
            title:"skin-cancer-detection using deep learning",
            github:"https://github.com/nirbhay-design/SkinCancerDetection",
            livelink:null,
            category:"Machine learning",
            desc:"This project uses CNN architectures for detecting skin cancer on a skin image.",
            tech:<SiPytorch className='iconss'/>
        },
        {
            title:"mask-nomask classification using deep learning",
            github:"https://github.com/nirbhay-design/mask-nomask-classification",
            livelink:null,
            category:"Machine learning",
            desc:"This project uses CNN architectures for detecting whether a person is masked or not in real time using opencv.",
            tech:<SiPytorch className='iconss'/>
        },
        {
            title:"ML-DL algo from scratch",
            github:"https://github.com/nirbhay-design/ML-DL-algo-from-scratch",
            livelink:null,
            category:"Machine learning",
            desc:"This is the github repo maintained in which I have implemetned some of the neural network architectures from scratch in pytorch.",
            tech:<SiPytorch className='iconss'/>
        },


    ]
    
    return (
        <div class="project__list">
            {plist.map((pro,index)=>{
                return <><div className="each__project">
                    <div className="pack__project">

                        <h3 className='mytext'><b>Title</b>: {pro.title}</h3>
                        <h3 className='mytext'><b>Category</b>: {pro.category}</h3>
                        <h3 className='mytext'><a className='icon__hub' href={pro.github}><SiGithub/> Github</a></h3>

                        {(pro.livelink != null)?<h3 className="mytext"><a className='icon__hub' href={pro.livelink}><VscLiveShare/> Live</a></h3>:<></>}
                        
                        <p><b>short description</b>: {pro.desc}</p>
                    </div>
                    <div className="tech__stack">
                        {pro.tech}
                    </div>
                </div>
                <hr id='horizontal__line'/></>
            })}
            {/* <FaPython className="icons_"/>
                <FaNodeJs className="icons_"/>
                <FaReact className="icons_"/>
                <SiFlask className="icons_"/>
                <SiHaskell className="icons_"/>
                <SiMysql className="icons_"/>
                <SiPytorch className="icons_"/> */}
            
        </div>
    )
}

export default Project
