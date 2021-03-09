import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'

class Widecard extends Component {
    render() {
        return (
            <div class="widecard">
            <div class="compdet">
            <h3> <FontAwesomeIcon icon={faUserGraduate} /> {this.props.title}</h3>
            <h4 class="secondtext">{this.props.where}</h4>
            <h4 class="secondtext">{this.props.from} - {this.props.to}</h4>
            </div>
            </div>
            )
        }
    }
    
export default Widecard
    