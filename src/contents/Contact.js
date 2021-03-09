import React, { Component } from 'react';
import Social from '../components/Social';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt} from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt} from '@fortawesome/free-solid-svg-icons'


class Contact extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">Contact Me</h1>
            <h3><FontAwesomeIcon icon={faAt} /> Email  :   Rakeshyasht92@gmail.com</h3>
             <h3> <FontAwesomeIcon icon={faPhoneAlt} /> Mobile   :   9620156725</h3>
            <Social />
            </div>
            )
        }
    }
    
    export default Contact
    