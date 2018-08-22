import React, { Component } from 'react';


export default class EventDetails  extends Component {
    componentDidMount = () => {
        const id = this.props.match.params.id
        console.log(id)
        this.props.getTheEvent(id)
    }
    render() {
        const {event_location, event_address, event_client, event_time, event_type, waitrs_scheduled = [], attire, hourly_rate} = this.props.event_details
      return (
            <div className="event-details">
                <div className="event-details__address">
                    <h4>Event Location</h4>
                    <p>{event_location}</p>
                    <p>{event_address}</p> 
                </div>
                <div className="event-details__client-name">
                    <h4>Client Name</h4>
                    <p>{event_client}</p>
                </div>
                <div className="event-details__specifics">
                    <div>
                        <h4>Event Details</h4>
                        <p>Event Time: {event_time}</p>
                        <p>Event Type: {event_type}</p>
                        <p>Waitrs Scheduled: {waitrs_scheduled.length}</p>
                        <p>Expected Attire: {attire}</p>
                        <p>Hourly Rate: ${hourly_rate}</p>
                    </div>
                </div>
                <form>
                    <div className="add-to__event">
                        <input onClick={this.props.addToEvent} type="submit" className="submit-btn" value="Sign Up"/>
                    </div>
                </form>
            </div>
      )
    }
  }