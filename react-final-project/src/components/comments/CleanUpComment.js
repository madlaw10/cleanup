import React from 'react'
import './comments.css'

export default (props) => {
    const user = props.cleanUpComment.user
    return (
    <div className = "comments-feed">
        <div className= "comment-feed-card">
            <div className="comment">
            <div className = "comment__user">
                <img className="comment__user-avatar" src = {user.avatar} alt = "User Avatar"/>
                <h3 className = "comment__user-userName">{user.userName}</h3>
            </div>
             <p className="comment__content">{props.cleanUpComment.content}</p>
            </div>
        </div>
    </div>
    )
}

