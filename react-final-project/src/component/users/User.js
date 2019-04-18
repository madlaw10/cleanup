import React from 'react'
import './user.css'


export default (props) => {
return(
<div className = "users-leaderboard">
    <div className= "users-leaderboard-card">
        <div className="user">
            <h3 className="user__userName"> {props.user.userName}</h3>
            <img className="user__avatar" src={props.user.avatar} alt="User Avatar" />
            <h3 className = "user__pointCount">Total CleanUp Points: {props.user.pointCount}</h3>
        </div>
    </div>
</div>
)
}