import React from 'react'
import Dropdown from '../components/dropdown/Dropdown';
import '../css/header.css';

export default (props) => {
    return (
        <div className="header">

            <div className="dropdown">
                <Dropdown updateCurrentLocation={props.updateCurrentLocation} currentLocation={props.currentLocation} getPostCleanUps = {props.getPostCleanUps} getPreCleanUps = {props.getPreCleanUps} getUsers = {props.getUsers} getUser = {props.getUser} user = {props.user}/>
            </div>

            <div className="nav">
                <h3 onClick={() => props.getPreCleanUps()} className="nav__item">Cleanups</h3>
                <h3 onClick={() => props.updateCurrentLocation('mapcontainer')} className="nav__item">Map</h3>
                <h3 onClick={() => props.getPostCleanUps()} className="nav__item">History</h3>
            </div>


            {props.currentLocation === "landingpage" &&
                <div className="user__container">
                    <h3 className="user__points">Login</h3>
                    <img className ="avatar__image" src="https://4.bp.blogspot.com/-ys1MsCf3fak/WkkufJEuZOI/AAAAAAAAAnY/iHnu2QAQOmoniFuuTLWUaoz1Eq0Z0v6WgCEwYBhgL/s1600/bitmoji-20171231083554.png" alt="Default avatar" />
                </div>
            }

            {!(props.currentLocation === "landingpage") &&
                <div className="user__container">
                    <h3 className="user__points">{props.user.pointCount} <span> pts</span></h3>
                    <img onClick={() => props.getUser(props.user.userName)} className ="avatar__image" src={props.user.avatar} alt="Your avatar" />
                </div>
            }

        </div>
    );
}
