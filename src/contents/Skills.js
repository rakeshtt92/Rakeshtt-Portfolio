import React, { Component } from 'react'

class Skills extends Component {
    constructor(props)
    {
        super(props);

        this.state={
            'myskills':['HTML','CSS','JAVASCRIPT','BOOTSTRAP', 'REACT JS','ANGULAR', 'MANGO DB', 'NODE JS']
        };
    }

    render() {
        return (
            <div className="condiv skills">
                <h1 className="subtopic">My Skills</h1>
                <ul>
                    {this.state.myskills.map((value)=>{
                        return <li>{value}</li>
                    })}
                </ul>

                <div className="lists" >
                    <h1 className="subtopic">My Experience</h1>

                    <li>Total <b>3.4 years</b> of experience as Frontend Developer</li>
                    <li>Knowledge of <b>React JS, React Hooks, React States</b></li>
                    <li>Knowledge of Angular JS, <b>Angular 2,4,8</b> Versions</li>
                    <li>Experience in <b>Angular Material and Angular CLI, REST APIs, BootStrap, HTML, CSS.</b></li>
                    <li>Knowledge of <b>NodeJS and MongoDB</b></li>
                    <li>Ability to work on and manage multiple projects and delivering results based on deadlines.</li>
                    <li>Good communication, quick learner and demonstrated leadership skills.</li>
                </div>
            </div>
            )
        }
    }
    
    export default Skills
    