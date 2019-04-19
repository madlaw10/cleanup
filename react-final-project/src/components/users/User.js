import React from 'react'
import './user.css'


export default (props) => {
return(
<div className = "users-leaderboard">
    <div className= "users-leaderboard-card">
        <div className="user">
            <div className="user__heading">
                <h3 className="user__userName"> User: {props.user.userName}</h3>
                <h3 className = "user__pointCount">Cleanup Points: {props.user.pointCount}</h3>
            </div>
            <img className="user__avatar" src={props.user.avatar} alt="User Avatar" />
        </div>
    </div>
</div>
)
}