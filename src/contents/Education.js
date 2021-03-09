import React, { Component } from 'react';
import Widecard from '../components/Widecard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">  
           My Education</h1>
            <Widecard  title="BACHELOR OF ENGINERRING" where="BMS Evening College Of Engineering Bengaluru" from="2015" to="2018"/>
            <Widecard title="DIPLOMA" where="Govt Polytechnic Chamarajanagar" from="2009" to="2012"/>
            <Widecard title="SSLC | HSC" where="Government High School Thorenuru" from="2005" to="2008"/>
            </div>
            )
        }
    }
    
export default Education
    