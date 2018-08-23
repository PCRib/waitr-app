import React, { Component } from 'react';
import WaitrModal from './WaitrModal';

export default class HomePage  extends Component{
    render(){
        return(
            <div className="animated fadeIn container">
                <div id="logo" className="logo animated fadeOut"></div>
                <div className="sign-up__box animated fadeIn container">
                    <form>
                        <input onClick={this.props.handleWaitrOpen} type="submit" className="submit-btn" value="Sign Up"/>
                    </form>
                </div>
                <WaitrModal isWaitrOpen={this.props.isWaitrOpen} handleClose={this.props.handleClose} handleOpen={this.props.handleOpen}/>
            </div>
        )
    }
}