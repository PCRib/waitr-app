import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import attire_icon from "./images/attire_icon.svg"
import client_icon from "./images/client_icon.svg"

export default class Header extends Component {
    render(){
        return(
            <div className="nav-bar">
                <div className="sections-link">
                    <Link to="/">
                        <img src={attire_icon} />
                    </Link>
                    <Link to={`/profile/${this.props.current_waitr.waitrToken}`}>
                        <img className="profile_icon" src={client_icon} />
                    </Link>
                </div>
                {/* <img className="add-btn" src={addbtn} /> */}
            </div>
        )
    }
}