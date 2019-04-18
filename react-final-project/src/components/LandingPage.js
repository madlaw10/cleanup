import React from 'react';
import UserLogin from '../components/users/UserLogin'



export default (props) => {
    return (
    <div className="landing-page">
        <img className="login__logo" src="https://raw.githubusercontent.com/madlaw10/final-project/master/react-final-project/src/media/cleanuplogo2.png" />
        <div className="userLogin__form">
        
            <h2>Log in</h2>
            <h6>No account?  <span className="register" onClick={()=>props.updateCurrentLocation('newuserform')}>Register</span></h6>
              <UserLogin getUser = {props.getUser} updateCurrentLocation = {props.updateCurrentLocation} currentLocation={props.currentLocation} addNewUser = {props.addNewUser}/>
            
       </div>
    </div>
    );
}