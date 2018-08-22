import React, { Component } from 'react';
import BookingCard  from './BookingCard';


export default class EventList  extends Component {
    render() {
        const events = this.props.waitr_details.events
        const eventsArray = events.map(events => {
                return(
                        <BookingCard events={events}/>
                )
            })
      return (
        
          <div className="event-list">
              {eventsArray}
          </div>
      );
    }
  }