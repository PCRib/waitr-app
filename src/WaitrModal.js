import React, { Component } from "react";
import PropTypes from "prop-types";
import client_icon from "./images/client_icon.svg";
import attire_icon from "./images/attire_icon.svg";
import event_address_icon from "./images/event_address_icon.svg";
import event_date_icon from "./images/event_date_icon.svg";
import event_location_icon from "./images/event_location_icon.svg";
import event_type_icon from "./images/event_type_icon.svg";
import hourly_rate_icon from "./images/hourly_rate_icon.svg";
import waitrs_needed_icon from "./images/waitrs_needed_icon.svg";
import event_time_icon from "./images/event_time_icon.svg";

export default class EventModal extends Component {
  postNewWaitr = e => {
    e.preventDefault();
    const name = e.target.waitrName.value;
    const waitr_type = e.target.waitrType.value;
    const biography = e.target.biography.value;
    const skills = e.target.skills.value;
    const rating = e.target.rating.value;
    // const availability = e.target.availability.value;

    const newWaitr = {
      name: name,
      waitr_type: waitr_type,
      biography: biography,
      skills: skills,
      rating: rating
    };
    fetch("http://localhost:5000/waitrs", {
      method: "post",
      body: JSON.stringify(newWaitr),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(resp => resp.json())
      .then(result => {
        localStorage.setItem("waitrToken", `${result._id}`);
        window.location.pathname = "/events";
      });
  };
  render() {
    return (
      <div
        style={{ ...flex, display: this.props.isWaitrOpen ? "flex" : "none" }}
      >
        <div
          className="modal-layer"
          onClick={this.props.handleClose}
          style={{ ...modalLayer }}
        />
        <div className="form-modal" style={formModal}>
          <div className="modal-header" style={modalHeader}>
            <div className="close-container" style={closeContainer}>
              <span onClick={this.props.handleClose}>Close</span>
            </div>
          </div>
          <h6 style={modalHeaderH6}>Welcome New Waitr!</h6>
          <form onSubmit={this.postNewWaitr}>
            <div className="add-new__event">
              <div className="input-box">
                <img src={event_location_icon} />
                <input type="text" placeholder="Full Name" name="waitrName" />
              </div>
              <div className="input-box">
                <img src={event_address_icon} />
                <input
                  type="text"
                  placeholder="Bartendr or Waitr?"
                  name="waitrType"
                />
              </div>
              <div className="input-box">
                <img src={client_icon} />
                <input
                  type="text"
                  placeholder="A little about yourself"
                  name="biography"
                />
              </div>
              <div className="input-box">
                <img src={event_time_icon} />
                <input
                  type="text"
                  placeholder="One Skill about yourself"
                  name="skills"
                />
              </div>
              <div className="input-box">
                <img src={event_date_icon} />
                <input
                  type="text"
                  placeholder="How would you rate yourself out of 5"
                  name="rating"
                />
              </div>
              <div className="input-box">
                <img src={waitrs_needed_icon} />
                <input
                  type="text"
                  placeholder="When are you available?"
                  name="availability"
                />
              </div>
            </div>
            <div className="submit-new__location">
              <input
                type="submit"
                className="submit-btn"
                value="Add me to Waitr"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

EventModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isWaitrOpen: PropTypes.bool.isRequired
};

const flex = {
  position: "fixed",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh",
  zIndex: 1,
  top: 0,
  left: 0,
  overflow: "hidden",
  backgroundColor: "rgba(58,58,58,0.8)"
};

const modalLayer = {
  position: "fixed",
  width: "100vw",
  height: "100vh",
  zIndex: 1,
  backgroundColor: "transparent"
};

const formModal = {
  position: "absolute",
  backgroundColor: "#06d2b5",
  width: "600px",
  maxWidth: "100%",
  height: "600px",
  maxHeight: "100%",
  zIndex: 2,
  borderRadius: "3px",
  overflow: "auto",
  display: "flex",
  flexDirection: "column"
};

//   const modalHeader = {
//     margin: '2rem 3rem',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignContent: 'center'
//   }
const modalHeader = {
  margin: "1.5rem 3rem",
  display: "flex",
  width: "75%",
  justifyContent: "flex-end",
  alignContent: "center",
  color: "#FFFFFF"
};

const modalHeaderH6 = {
  margin: "0 0 1em 0",
  textAlign: "center",
  fontSize: "1em",
  color: "#FFFFFF"
};

const closeContainer = {
  display: "flex",
  alignItems: "center"
};
