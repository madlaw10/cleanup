import React from 'react'
import CleanUpComments from '../comments/CleanUpComments'

export default (props) => {
    const postCleanUpId = props.postCleanUp.id
    const cleanUpComments = props.postCleanUp.comments
    return (
        <div className="postCleanUp-feed">
            <div className="postCleanUp-feed-card">
                <div className="postCleanUp">
                    <div className="postCleanUp__header">
                        <img className="postCleanUp__avatar" src="https://farm2.staticflickr.com/1723/42703297172_fd3e3933d6.jpg" alt="Avatar" />
                        <h3 className="postCleanUp__location">{props.postCleanUp.location} {props.postCleanUp.id}</h3>
                    </div>
                    <img className="postCleanUp__image" src={props.postCleanUp.image} alt="CleanUp" />
                    <p className="postCleanUp__caption">{props.postCleanUp.caption}</p>
                    {!(props.currentLocation === "postcleanups") &&
                    <p className="postCleanUp__votes">User Votes: {props.postCleanUp.count}</p>
                    }
                    {props.currentLocation === "postcleanups" &&
                    <div className="postCleanUp__vote-container">
                        <button className="postCleanUp-feed__button" type="button" onClick={() => props.voteDown(postCleanUpId)}>
                            <i className="material-icons-outlined postCleanUp-feed__button-icon-down">
                                arrow_downward
                        </i>
                        </button>
                        <p className="postCleanUp__votes">{props.postCleanUp.count}</p>
                        <button className="postCleanUp-feed__button" type="button" onClick={() => props.voteUp(postCleanUpId)}>
                            <i className="material-icons-outlined postCleanUp-feed__button-icon-up">
                                arrow_upward
                        </i>
                        </button>
                    </div>
                    }

                    {!(props.currentLocation === "postcleanup") && <button className="postCleanUp-toggle__button" onClick={() => props.getPostCleanUp(postCleanUpId)}>View More</button>}
                    
                    <div>
                        {props.currentLocation === "postcleanup" && <CleanUpComments cleanUpComments={cleanUpComments} addPostCleanUpComment = {props.addPostCleanUpComment} cleanUpId = {postCleanUpId} currentLocation={props.currentLocation}/>}
                    </div>
                </div>
            </div>
        </div>
    )
} 
