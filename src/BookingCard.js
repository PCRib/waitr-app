import React, { Component } from 'react';

export default class Footer extends Component {
    render(){
        const {event_location, event_address, event_date} = this.props.events
        return(
            <div className="booked-events">
                <div className="booked-events__date">
                    <span className="booked-events__date-day"></span>
                    <span className="booked-events__date-month">{event_date}</span>
                </div>
                <div className="booked-events__location">
                    <span>{event_location}</span>
                    <span>{event_address}</span>
                </div>
                <div className="booked-event__sidebar">
                </div>
            </div>
        )
    }
}