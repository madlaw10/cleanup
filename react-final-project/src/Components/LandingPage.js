import React from 'react';
import UserLogin from '../components/users/UserLogin'


export default (props) => {
    return (
    <div className="landing-page">
        <UserLogin getUser = {props.getUser} currentLocation={props.currentLocation} />
    </div>
    );
}