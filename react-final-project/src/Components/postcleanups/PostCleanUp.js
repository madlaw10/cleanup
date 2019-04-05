import React from 'react'

export default (props) =>{
    const postCleanUpId = props.postCleanUp.id 
    return(
    <div className="postCleanUp-feed">
        <div className="postCleanUp-feed-card">
            <div className="postCleanUp">
                <h3 className="postCleanUp__location">{props.postCleanUp.location} {props.postCleanUp.id}</h3>
                <img className="postCleanUp__image" src={props.postCleanUp.image} alt="CleanUp Photo" />
                <button className="postCleanUp-feed__button" type="button">
                    <i className="material-icons-outlined">
                    thumb_up
                    </i>
                </button>
                <p className="postCleanUp__votes">{props.postCleanUp.count}</p>
                <button className="postCleanUp-feed__button" type="button">
                    <i className="material-icons-outlined">
                    thumb_down
                    </i>
                </button>
                <p className="postCleanUp__caption">{props.postCleanUp.caption}</p>
                {props.currentLocation === "postcleanups" && <button className="postCleanUp-toggle__button" onClick={() => props.getPostCleanUp(postCleanUpId)}>View More</button>}
            </div>
        </div>
    </div>
    )
} 
