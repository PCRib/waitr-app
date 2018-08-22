import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render(){
        return(
            <div className="nav-bar">
                <div className="sections-link">
                    <Link to="/events">
                        <button className="section-tab">Events</button>
                    </Link>
                    <Link to="/waitrs">
                        <button onClick={this.props.getTheWaitrs} className="section-tab">Waitrs</button>
                    </Link>
                </div>
                {/* <img className="add-btn" src={addbtn} /> */}
            </div>
        )
    }
}