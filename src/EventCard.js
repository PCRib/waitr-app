import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import dollar from "./dollar.svg"
import clock_icon from "./clock_icon.svg"
import user_icon from "./user_icon.svg"
import next_icon2 from "./next_icon2.svg"

export default class EventCard  extends Component {
    render() {
        const {event_date, event_time, event_price, waitrs_scheduled, } = this.props.events
      return (
          <div className="event-card">
                <div className="event-card__icons">
                    <img className="event-card__clock-icon" src={clock_icon}/>
                    <img src={user_icon}/>
                </div>
                <div>
                    <div className="event-card__details">
                        <p className="event-card__time">{event_date}</p>
                        <p>{event_time}</p>
                    </div>
                    <div className="event-card__waitrs">
                        <p>{waitrs_scheduled.length} Waiters</p>
                    </div>
                </div>
                <div className="event-card__dollar-icon">
                    <img className="event-card__dollar" src={dollar}/>
                </div>
                <div className="event-card__price">
                    <p>{event_price}</p>
                </div>
                <div className="event-card__arrow">
                    <img src={next_icon2} />
                </div>
          </div>
      );
    }
  }