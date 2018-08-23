import React, { Component } from 'react';
import './App.css';
import MainSection from './MainSection'

const waitrToken = localStorage.getItem("waitrToken");
class App extends Component {
  state={
    events: [],
    waitrs: [],
    waitr_details:[],
    event_details:[],
    current_waitr:{
      waitrToken:waitrToken
    },
    isOpen: false,
    isWaitrOpen:false
}
  addToEvent = () => {
    const currentEvent = this.state.event_details._id;
    const currentWaitr = this.state.current_waitr.waitrToken;
    const currentIds = {
      currentEvent: currentEvent,
      currentWaitr: currentWaitr
    }
    fetch('/addingIds',{
            method:"put",
            body:JSON.stringify(currentIds),
            headers:{
                'Content-Type':"application/json"
            }
        })
        .then(resp => resp.json(
        ))
        .then(result => {
            window.location.pathname ="/events"
        });
  }
  getTheWaitrs = () => {
    fetch('/waitrs')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        waitrs: data
      })
    })
  }
  getTheWaitr = (id) => {
    const currentWaitr = `/waitrs/${id}`
    fetch(currentWaitr)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        waitr_details: data
      })
    })
  }
  getTheEvents = () => {
    fetch('/events')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        events: data
      })
    })
  }
  getTheEvent = (id) => {
    const currentWaitr = `/events/${id}`
    fetch(currentWaitr)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        event_details: data
      })
    })
  }
  handleOpen = (e) =>{
    e.preventDefault()
    this.setState({
        isOpen:true
    })
  }
  handleWaitrOpen = (e) =>{
    e.preventDefault()
    this.setState({
        isWaitrOpen:true
    })
  }
  handleClose = () =>{
    this.setState({
        isOpen:false,
        isWaitrOpen:false
    })
  }
  render() {
    return (
      <div className="App">
          <MainSection 
            addToEvent={this.addToEvent} 
            isOpen={this.state.isOpen} 
            isWaitrOpen={this.state.isWaitrOpen} 
            handleClose={this.handleClose} 
            handleOpen={this.handleOpen} 
            handleWaitrOpen={this.handleWaitrOpen}
            waitrs={this.state.waitrs} 
            events={this.state.events} 
            event_details={this.state.event_details} 
            waitr_details={this.state.waitr_details} 
            getTheWaitr={this.getTheWaitr} 
            getTheWaitrs={this.getTheWaitrs} 
            getTheEvent={this.getTheEvent} 
            getTheEvents={this.getTheEvents}
            current_waitr={this.state.current_waitr}
          />
      </div>
    );
  }
}

export default App;
