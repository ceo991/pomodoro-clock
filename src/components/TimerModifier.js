import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown, faAnglesUp, faCoffee } from '@fortawesome/free-solid-svg-icons'

class TimerModifier extends Component{
  
    constructor(props){
      super(props)
      
    }
    
    render(){
      return (
        <div>
          <div className="modifier-buttons">
            <div>
              <h4 id="break-label">Break Length</h4>
              <div id="modifier">
                <button id="break-decrement" onClick={this.props.decBreak}><FontAwesomeIcon  icon={faAnglesDown} size="2x"/></button>
                <h2 id="break-length">{this.props.breakLength}</h2>
                <button id="break-increment" onClick={this.props.incBreak}><FontAwesomeIcon  icon={faAnglesUp} size="2x"/></button>
              </div>
            </div>
            <div>
              <h4 id="session-label">Session Length</h4>
              <div id="modifier">
                <button id="session-decrement" onClick={this.props.decSession}><FontAwesomeIcon  icon={faAnglesDown} size="2x"/></button>
                <h2 id="session-length">{this.props.sessionLength}</h2>
                <button id="session-increment" onClick={this.props.incSession}><FontAwesomeIcon  icon={faAnglesUp} size="2x"/></button>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

export default TimerModifier;