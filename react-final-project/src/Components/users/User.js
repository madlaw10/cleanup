import React from 'react'
import './user.css'
import PostCleanUps from '../postcleanups/PostCleanUps'

export default (props) => {
return(
<div className = "users-leaderboard">
    <div className= "users-leaderboard-card">
        <div className="user">
            <h3 className="user__userName"> {props.user.userName}</h3>
            <img className="user__avatar" src={props.user.avatar} alt="User Avatar" />
            <h3 className = "user__pointCount">Total CleanUp Points: {props.user.pointCount}</h3>
            {props.currentLocation === 'user' &&
            <div className= "user__postCleanUps">
                 <h3>Your Past Cleanups</h3>
                <PostCleanUps postCleanUps = {props.user.postCleanUps} getPostCleanUp={props.getPostCleanUp} currentLocation={props.currentLocation} addPostCleanUpComment = {props.addPostCleanUpComment} />
            </div>}
        </div>
    </div>
</div>
)
}