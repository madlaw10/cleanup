import React from 'react';
import UserLogin from '../components/users/UserLogin'


export default (props) => {
    return (
    <div className="landing-page">
                <img className="login__logo" src="https://raw.githubusercontent.com/madlaw10/final-project/master/react-final-project/src/media/cleanuplogo2.png" />
        <UserLogin getUser = {props.getUser} updateCurrentLocation = {props.updateCurrentLocation} currentLocation={props.currentLocation} />
    </div>
    );
}