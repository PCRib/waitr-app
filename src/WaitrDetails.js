import React, { Component } from 'react';
import rating_icon from "./rating_icon.svg"
import bio_icon from "./bio_icon.svg"
import BookingList from "./BookingList"
import WaitrExperience from "./WaitrExperience"
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';

export default class WaitrDetails extends Component {
    componentDidMount = () => {
        const id = this.props.match.params.id
        console.log(id)
        this.props.getTheWaitr(id)
    }
    render(){
        const {name, rating, waitr_type} = this.props.waitr_details
        return(
        <Router>
        <div>
            <div className="waitr-profile">
                <div className="waitr-profile__card">
                    <div className="waitr-profile__image"> </div>
                    <div className="waitr-profile__details">
                        <h2 className="waitr-profile__name">{name}</h2>
                        <div className="waitr-profile__rating">
                            <span className="waitr-profile__position">{waitr_type}</span>
                            <div className="waitr-rating">
                                <img src={rating_icon}/>
                                <span>{rating}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="waitr-profile__extra-details">
                        <Link to="/waitr/events"><div className="waitr-profile__events-title">Events</div></Link>
                        <Link to="/waitr/experience"><div className="waitr-profile__events-title">Waitr Details</div></Link>
                        <Link to="/waitr/groups"><div className="waitr-profile__events-title">Groups</div></Link>
                    </div>
                </div>
            </div>
            <div className="waitr-profile__lower-profile">
                <Switch>
                    <Route path="/waitr/events" exact render={(props) => {
                        return(
                            <BookingList match={props.match} waitr_details={this.props.waitr_details}/>
                        )
                    }}  />
                    <Route path="/waitr/experience" exact render={(props) =>{
                        return(
                            <WaitrExperience match={props.match} waitr_details={this.props.waitr_details} />
                        );
                    }} />
                </Switch>
            </div>
        </div>
        </Router>
        )
    }
}