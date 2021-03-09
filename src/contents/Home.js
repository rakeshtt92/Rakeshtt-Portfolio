import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/rakesh.jpeg';
import Social from '../components/Social'



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['I am Rakesh TT','I am a web developer']} speed={100} eraseDelay={700}/>
            <Social />
            </div>
            )
        }
    }
    
    export default Home
    