import React, { Component } from 'react';
import rating_icon from "./rating_icon.svg"

export default class WaitrCard extends Component {
    render(){
        const {name, rating} = this.props.waitrs
        return(
            <div className="waitr-card">
                    <div className="waitr-image"> </div>
                    <div className="waitr-details">
                        <h2 className="waitr-details__name">{name}</h2>
                        <div>
                            <span className="waitr-details__position">Bartender</span>
                            <img src={rating_icon}/><span>{rating}</span>
                        </div>
                    </div>
            </div>
        )
    }
}