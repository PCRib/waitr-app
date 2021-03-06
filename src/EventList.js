import React, { Component } from 'react';
import EventCard  from './EventCard';
import { Link } from 'react-router-dom';

export default class EventList  extends Component {
    componentDidMount = () => {
        this.props.getTheEvents()
    }
    render() {
        const events = this.props.events
        const eventsArray = events.map(events => {
                return(
                        <Link key={`${events._id}`} to={`/events/${events._id}`}> 
                            <EventCard key={`${events._id}`} events={events}/>
                        </Link>
                )
            })
      return (
        
          <div className="event-list">
              {eventsArray}
          </div>
      );
    }
  }