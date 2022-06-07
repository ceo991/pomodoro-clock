import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPause, faPlay, faPlayCircle, faReplyAll, faSync } from '@fortawesome/free-solid-svg-icons'

class TimerController extends Component{
  
    constructor(props){
     super(props)
     
   }
   
   render(){
     return (
       <div>
         <button id="start_stop" onClick={this.props.startTimer}><FontAwesomeIcon  icon={faPlay} size="3x"/> <FontAwesomeIcon  icon={faPause} size="3x"/></button>
         <button id="reset" onClick={this.props.resetTimer}><FontAwesomeIcon  icon={faSync} size="3x"/></button>
         
       </div>
     )
   }
 }

export default TimerController;