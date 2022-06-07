import React, { Component } from 'react';
import './App.css';
import TimerModifier from './components/TimerModifier';
import TimerDisplay from './components/TimerDisplay';
import TimerController from './components/TimerController';

class App extends Component{
  
  constructor(props){
    super(props)
    this.audioRef = React.createRef();
    this.state={
      sessionLength: 25,
      breakLength: 5,
      timeLeft: 1500,
      timerState: "Session",
      isRunning: false,
      interval: "",
      style:{
        color: ""
      }
    }
    this.incrementSession =this.incrementSession.bind(this)
    this.decrementSession =this.decrementSession.bind(this)
    this.incrementBreak =this.incrementBreak.bind(this)
    this.decrementBreak =this.decrementBreak.bind(this)
    this.changeTimerMode =this.changeTimerMode.bind(this)
    this.startTimer =this.startTimer.bind(this)
    this.resetTimer =this.resetTimer.bind(this)
    this.updateTimer =this.updateTimer.bind(this)
  }
  
  resetTimer(){
    clearInterval(this.state.interval)
    this.setState({
      sessionLength: 25,
      breakLength: 5,
      timeLeft: 1500,
      timerState: "Session",
      isRunning: false,
      interval: "",
      style:{
        color: ""
      }
    })
    if(this.audioRef){
      this.audioRef.current.pause()
      this.audioRef.current.currentTime = 0
    }
    
  }

  
  startTimer(){
    this.setState({isRunning: !this.state.isRunning})
    if(!this.state.isRunning){
      this.setState({interval:setInterval(()=>{
        this.setState({timeLeft:this.state.timeLeft-1})
        this.updateTimer()
      },1000)})
    }else{
      clearInterval(this.state.interval)
    }

  }
 

  updateTimer(){
    if(this.state.timeLeft < 0){
      clearInterval(this.state.interval)
      this.setState({isRunning: false})
      this.changeTimerMode()
    }
    
    if(this.state.timeLeft < 61){
      if(this.state.style.color === ""){
        this.setState({style:{color:"red"}})
      }
      
      if(this.state.timeLeft <= 0){
        this.audioRef.current.play()
      }
    }else{
      this.setState({style:{color:""}})
    }
    
  }
  
  changeTimerMode(){
    this.setState({timerState:this.state.timerState==="Break"?"Session":"Break",timeLeft:this.state.timerState==="Break"?this.state.sessionLength*60:this.state.breakLength*60,
      isRunning: false, style:{color: ""}},()=>this.startTimer())
  }
  
  incrementSession(){
    if(!this.state.isRunning){
       if(this.state.sessionLength!==60){
        this.setState({sessionLength:this.state.sessionLength+1},()=>{
          if(this.state.timerState==="Break")return
          this.setState({timeLeft:this.state.sessionLength*60})
        })
      }
    }
  }
  
  decrementSession(){
    if(!this.state.isRunning){
       if(this.state.sessionLength!==1){
        this.setState({sessionLength:this.state.sessionLength-1},()=>{
          if(this.state.timerState==="Break")return
          this.setState({timeLeft:this.state.sessionLength*60})
        })
      }
    }

  }
  
    incrementBreak(){
      if(!this.state.isRunning){
        if(this.state.breakLength!==60){
          this.setState({breakLength:this.state.breakLength+1},()=>{
            if(this.state.timerState==="Session")return
            this.setState({timeLeft:this.state.breakLength*60})
          })
        }
      }
  }
  
  decrementBreak(){
    if(!this.state.isRunning){
      if(this.state.breakLength!==1){
        this.setState({breakLength:this.state.breakLength-1},()=>{
            if(this.state.timerState==="Session")return
            this.setState({timeLeft:this.state.breakLength*60})
          })
      }
    }
  }
  
  render(){
    return (
      <div id="container">
        <h1 id="title">25 + 5 Clock</h1>
        <TimerModifier
          incSession={this.incrementSession}
          decSession={this.decrementSession}
          incBreak={this.incrementBreak}
          decBreak={this.decrementBreak}
          sessionLength={this.state.sessionLength}
          breakLength={this.state.breakLength}
          />
        <TimerDisplay timeLeft={this.state.timeLeft} timerState ={this.state.timerState} timerStyle={this.state.style}/>
        <TimerController startTimer ={this.startTimer} resetTimer ={this.resetTimer}/>
        <audio src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" ref={this.audioRef} id="beep"/>
      </div>
    )
  }
}
export default App;
