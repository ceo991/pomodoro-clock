import React, { Component } from 'react';

class TimerDisplay extends Component{
    constructor(props){
       super(props) 
     }
     
     render(){
       return (
         <div className="timer" style={this.props.timerStyle}>
           <h2 id="timer-label">{this.props.timerState}</h2>
           <h1 id="time-left">{`${(Math.floor(this.props.timeLeft/60)===0||Math.floor(this.props.timeLeft/60)<10)?"0"+Math.floor(this.props.timeLeft/60):Math.floor(this.props.timeLeft/60)}:${(Math.floor(this.props.timeLeft%60)===0||Math.floor(this.props.timeLeft%60)<10) ? "0"+Math.floor(this.props.timeLeft%60):Math.floor(this.props.timeLeft%60)}`}</h1>  
         </div>
       )
     }
   }

export default TimerDisplay;