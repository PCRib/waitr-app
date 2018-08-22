import React, { Component } from 'react';
import './App.css';
import MainSection from './MainSection'


class App extends Component {
  state={
    events: [],
    waitrs: [],
    waitr_details:[],
    event_details:[],
    isOpen: false
}
  addToEvent = () => {
    const currentEvent = this.state.event_details._id;
    const currentWaitr = this.state.waitr_details._id;
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
    console.log(id)
    fetch(currentWaitr)
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
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
    console.log(id)
    fetch(currentWaitr)
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      this.setState({
        event_details: data
      })
    })
  }
  handleOpen = () =>{
    this.setState({
        isOpen:true
    })
  }
  handleClose = () =>{
    this.setState({
        isOpen:false
    })
  }
  render() {
    return (
      <div className="App">
          <MainSection addToEvent={this.addToEvent} isOpen={this.state.isOpen} handleClose={this.handleClose} handleOpen={this.handleOpen} waitrs={this.state.waitrs} events={this.state.events} event_details={this.state.event_details} waitr_details={this.state.waitr_details} getTheWaitr={this.getTheWaitr} getTheWaitrs={this.getTheWaitrs} getTheEvent={this.getTheEvent} getTheEvents={this.getTheEvents}/>
      </div>
    );
  }
}

export default App;
