import React, { Component } from 'react';
import PropTypes from 'prop-types';
import client_icon from "./images/client_icon.svg"
import attire_icon from "./images/attire_icon.svg"
import event_address_icon from "./images/event_address_icon.svg"
import event_date_icon from "./images/event_date_icon.svg"
import event_location_icon from "./images/event_location_icon.svg"
import event_type_icon from "./images/event_type_icon.svg"
import hourly_rate_icon from "./images/hourly_rate_icon.svg"
import waitrs_needed_icon from "./images/waitrs_needed_icon.svg"
import event_time_icon from "./images/event_time_icon.svg"

export default class EventModal extends Component {
    postNewEvent = (e) => {
        e.preventDefault();
        const event_location  = e.target.eventLocation.value;
        const event_address = e.target.eventAddress.value;
        const event_client = e.target.eventClient.value;
        const event_time = e.target.eventTime.value;
        const event_date = e.target.eventDate.value;
        const event_type = e.target.eventType.value;
        const waitrs_scheduled = e.target.waitrsScheduled.value;
        const attire = e.target.waitrAttire.value;
        const hourly_rate = e.target.hourlyRate.value;
        const event_price = e.target.eventPrice.value;

        const newEvent = {
            event_location: event_location,
            event_address: event_address,
            event_client: event_client,
            event_date: event_date,
            event_time: event_time,
            event_type: event_type ,
            waitrs_scheduled: waitrs_scheduled,
            attire: attire,
            hourly_rate: hourly_rate,
            event_price: event_price
        };
        fetch('http://localhost:3001/events',{
            method:"post",
            body:JSON.stringify(newEvent),
            headers:{
                'Content-Type':"application/json"
            }
        })
        .then(resp => resp.json(
        ))
        .then(result => {
            window.location.pathname ="/events"
        })
    }
    render() {
        return (
            <div style={{...flex, display: this.props.isOpen ? 'flex' : 'none'}}>
                <div className='modal-layer' onClick={this.props.handleClose} style={{...modalLayer}}></div>
                <div className="form-modal" style={formModal}>
                    <div className="modal-header" style={modalHeader}>
                        <div className="close-container" style={closeContainer}>
                            <span onClick={this.props.handleClose}>Close</span>
                        </div>
                    </div>
                    <h6 style={modalHeaderH6}>Add new event</h6>
                        <form onSubmit={this.postNewEvent}>
                            <div className="add-new__event">
                                <div className="input-box">
                                    <img src={event_location_icon}/>
                                    <input type="text" placeholder="Event Location" name="eventLocation"/>
                                </div>
                                <div className="input-box">
                                    <img src={event_address_icon}/>
                                    <input type="text" placeholder="Event Address" name="eventAddress"/>
                                </div>
                                <div className="input-box">
                                    <img src={client_icon}/>
                                    <input type="text" placeholder="Client Name" name="eventClient"/>
                                </div>
                                <div className="input-box">
                                    <img src={event_time_icon}/>
                                    <input type="text" placeholder="Event Time" name="eventTime"/>
                                </div>
                                <div className="input-box">
                                    <img src={event_date_icon}/>
                                    <input type="text" placeholder="Event Date" name="eventDate"/>
                                </div>
                                <div className="input-box">
                                    <img src={event_type_icon}/>
                                    <input type="text" placeholder="Type of Event" name="eventType"/>
                                </div>
                                <div className="input-box">
                                    <img src={waitrs_needed_icon}/>
                                    <input type="text" placeholder="Waitrs Needed" name="waitrsScheduled"/>
                                </div>
                                <div className="input-box">
                                    <img src={attire_icon}/>
                                    <input type="text" placeholder="Event Attire" name="waitrAttire"/>
                                </div>
                                <div className="input-box">
                                    <img src={hourly_rate_icon}/>
                                    <input type="text" placeholder="Hourly Rate" name="hourlyRate"/>
                                </div>
                                <div className="input-box">
                                    <img src={hourly_rate_icon}/>
                                    <input type="text" placeholder="Event Price" name="eventPrice"/>
                                </div>
                            </div>
                            <div className="submit-new__location">
                                <input type="submit" className="submit-btn" value="Save Location"/>
                            </div>
                        </form>
                </div>
            </div>
        );
    }
}

EventModal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
};


const flex = {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    zIndex: 1,
    top:0,
    left:0,
    overflow: 'hidden',
    backgroundColor: 'rgba(58,58,58,0.8)',
}

const modalLayer = {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    zIndex: 1,
    backgroundColor: 'transparent'
  }
  
  const formModal = {
    position: 'absolute',
    backgroundColor: '#06d2b5',
    width: '600px',
    maxWidth: '100%',
    height: '600px',
    maxHeight: '100%',
    zIndex: 2,
    borderRadius: '3px',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column'
  }
  
//   const modalHeader = {
//     margin: '2rem 3rem',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignContent: 'center'
//   }
  const modalHeader = {
    margin: '1.5rem 3rem',
    display: 'flex',
    width:"75%",
    justifyContent: 'flex-end',
    alignContent: 'center',
    color:'#FFFFFF'
  }
  
  const modalHeaderH6 = {
    margin: '0 0 1em 0',
    textAlign: 'center',
    fontSize: '1em',
    color: '#FFFFFF'
  }
  
  const closeContainer = {
    display: 'flex',
    alignItems: 'center'
  }