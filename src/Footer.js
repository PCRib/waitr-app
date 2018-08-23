import React, { Component } from 'react';
import add_event_icon from "./images/add_event_icon.svg"
import event_date_icon from "./images/event_date_icon.svg"
import waitrs_needed_icon from "./images/waitrs_needed_icon.svg"
import EventModal from './EventModal'
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render(){
        return(
            <div className="bot_nav-bar">
                <Link to="/events">
                    <img className="add-btn" src={event_date_icon} />
                </Link>
                <img onClick={this.props.handleOpen}className="add-btn" src={add_event_icon} />
                <Link to="/waitrs">
                    <img className="add-btn" src={waitrs_needed_icon} />
                </Link>
                <EventModal isOpen={this.props.isOpen} handleClose={this.props.handleClose} handleOpen={this.props.handleOpen}/>
            </div>
        )
    }
}