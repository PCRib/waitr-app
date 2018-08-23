import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'
import EventList from './EventList'
import EventDetails from './EventDetails'
import WaitrList from './WaitrList'
import WaitrDetails from './WaitrDetails'
import ProfilePage from './ProfilePage'
import HomePage from './HomePage';

export default class MainSection  extends Component {

  render() {
    return (
        <Router>
            <div className="main">
                <Header current_waitr={this.props.current_waitr}/>
                <div className="main-section">
                    <Switch>
                        <Route path="/" exact render={(props)=> {
                            return(
                                <HomePage isWaitrOpen={this.props.isWaitrOpen} handleClose={this.props.handleClose} handleOpen={this.props.handleOpen} handleWaitrOpen={this.props.handleWaitrOpen}/>
                            )
                        }} />
                        <Route path="/events" exact render={(props)=>{
                            return(
                                <EventList getTheEvents={this.props.getTheEvents}match={props.match} events={this.props.events} />
                                    );
                                }} />
                        <Route path="/events/:id" exact render={(props)=>{
                                    return(
                                        <EventDetails match={props.match} addToEvent={this.props.addToEvent} event_details={this.props.event_details} getTheEvent={this.props.getTheEvent} events />
                                    );
                                }} />
                        <Route path="/waitrs" render={(props) => {
                                    return (
                                        <WaitrList getTheWaitrs={this.props.getTheWaitrs} match={props.match} waitrs={this.props.waitrs} />
                                    );
                                }} /> 
                        <Route path="/waitr/:id" render={(props) =>{
                                    return(
                                        <WaitrDetails match={props.match} getTheWaitr={this.props.getTheWaitr} waitr_details={this.props.waitr_details} waitrs={this.props.waitrs} />
                                    );
                                }} />
                        <Route path="/profile/:id" exact render={(props) =>{
                                    return(
                                        <ProfilePage match={props.match}  getTheWaitr={this.props.getTheWaitr} waitr_details={this.props.waitr_details} waitrs={this.props.waitrs} />
                                    );
                                }} />
                    </Switch>
                </div>
                <Footer isOpen={this.props.isOpen} handleClose={this.props.handleClose} handleOpen={this.props.handleOpen}/>
            </div>
        </Router>
    );
  }
}

