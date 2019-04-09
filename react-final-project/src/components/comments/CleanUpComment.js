import React from 'react'

export default (props) => {
    return (
    <div className = "comments-feed">
        <div className= "comment-feed-card">
            <div className="comment">
                <p className="comment__content">{props.cleanUpComment.content}</p>
            </div>
        </div>
    </div>
    )
}

