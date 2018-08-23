import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import WaitrDetails from './WaitrDetails'

export default class ProfilePage  extends Component {
    render(){
        return(
            <div>
                <WaitrDetails match={this.props.match}  getTheWaitr={this.props.getTheWaitr} waitr_details={this.props.waitr_details} waitrs={this.props.waitrs}/>
            </div>
        )
    }
}