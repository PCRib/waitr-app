import React, { Component } from 'react';
import user_icon from "./user_icon.svg"



export default class WaitrExperience extends Component{
render(){
    const {biography, skills, greats, great_service,five_star_ratings,events_worked} = this.props.waitr_details
    return(
        <div>
            <div className="waitr-details__box">
                <div className="waitr-details__bio">
                    <img src={user_icon} className="waitr-details__bio-image"/>
                </div>
                <div className="booked-event__sidebar">
                </div>
                <div className="waitr-details__content">
                    <span>Biography</span>
                    <p className="waitr-bio">{biography}
                    </p>
                </div>
            </div>
            <div className="waitr-details__box">
                <div className="waitr-details__bio">
                    <img src={user_icon} className="waitr-details__bio-image"/>
                </div>
                <div className="booked-event__sidebar">
                </div>
                <div className="waitr-details__content">
                    <span>Skills</span>
                    <div className="waitr-details__skills">
                        <p>
                            Mixologist
                        </p>
                        <p>
                            {skills}
                        </p>
                        <p>
                            Veteran
                        </p>
                        <p>
                            Muti-lingual
                        </p>
                        <p>
                            Sommelier
                        </p>
                    </div>
                </div>
            </div>
            <div className="waitr-details__box">
                <div className="waitr-details__bio">
                    <img src={user_icon} className="waitr-details__bio-image"/>
                </div>
                <div className="booked-event__sidebar">
                </div>
                <div className="waitr-details__experience">
                    <span>Work Experience</span>
                        <div className="waitr-details__experience-boxes">
                        <div className="waitr-details_experience-box_events">
                            <span className="waitr-details__experience-number">{events_worked ? events_worked : 0}</span>
                            <span className="waitr-details__experience-title">Events Worked</span>
                    </div>
                        <div className="waitr-details_experience-box_rating">
                            <span className="waitr-details__experience-number">{five_star_ratings ? five_star_ratings : 0}</span>
                            <span className="waitr-details__experience-title">5 Star Rating</span>
                         </div>
                        <div className="waitr-details_experience-box_service">
                            <span className="waitr-details__experience-number">{great_service ? great_service : 0}</span>
                            <span className="waitr-details__experience-title">Great Service</span>
                        </div>
                        <div className="waitr-details_experience-box_greats">
                            <span className="waitr-details__experience-number">{greats ? greats : 0}</span>
                            <span className="waitr-details__experience-title">Great</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
