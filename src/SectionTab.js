import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class SectionTab extends Component {
    render(){
        return(
            <div className="sections-link">
                <div className="section-tab">
                    <Link to="/events"> Events</Link>
                </div>
                <div className="section-tab">
                    <Link to="/waitrs"> Waitrs </Link>
                </div>
            </div>
        )
    }
}