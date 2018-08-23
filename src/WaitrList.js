import React, { Component } from 'react';
import WaitrCard from "./WaitrCard";
import { Link } from 'react-router-dom';

export default class WaitrList extends Component {
    componentDidMount = () => {
        this.props.getTheWaitrs()
    }
    render(){
        const waitrs = this.props.waitrs
        const waitrArray = waitrs.map(waitrs => {
                return(
                    <Link key={`${waitrs._id}`} to={`/waitr/${waitrs._id}`}> 
                        <WaitrCard  waitrs={waitrs}/>
                    </Link>
                )
            })
        return(
            <div className="waitr-list">
                <div>
                    {waitrArray}
                </div>
            </div>
        )
    }
}