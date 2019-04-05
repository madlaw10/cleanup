import React from 'react'

export default (props) =>
    <div className="postCleanUp-feed">
        <div className="postCleanUp-feed-card">
            <div className="postCleanUp">
                <div className="postCleanUp__header">
                    <img className ="postCleanUp__avatar" src="https://farm2.staticflickr.com/1723/42703297172_fd3e3933d6.jpg" />  
                    <h3 className="postCleanUp__location">{props.postCleanUp.location} {props.postCleanUp.id}</h3>
                </div>
                <img className="postCleanUp__image" src={props.postCleanUp.image} alt="CleanUp Photo" />
                <div className="postCleanUp__vote-container">
                    <button className="postCleanUp-feed__button" type="button">
                        <i className="material-icons-outlined postCleanUp-feed__button-icon-down">
                        thumb_down
                        </i>
                    </button>
                    <p className="postCleanUp__votes">{props.postCleanUp.count}</p>
                    <button className="postCleanUp-feed__button" type="button">
                        <i className="material-icons-outlined postCleanUp-feed__button-icon-up">
                        thumb_up
                        </i>
                    </button>
                </div>
                <p className="postCleanUp__caption">{props.postCleanUp.caption}</p>
            </div>
        </div>
    </div>

   
