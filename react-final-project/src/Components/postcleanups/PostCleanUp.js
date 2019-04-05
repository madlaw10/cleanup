import React from 'react'

export default (props) =>
    <div className="postCleanUp-feed">
        <div class="postCleanUp-feed-card">
            <div className="postCleanUp">
                <h3 className="postCleanUp__location">{props.postCleanUp.location} {props.postCleanUp.id}</h3>
                <img className="postCleanUp__image" src={props.postCleanUp.image} alt="CleanUp Photo" />
                <button class="postCleanUp-feed__button" type="button">
                    <i class="material-icons-outlined">
                    thumb_up
                    </i>
                </button>
                <p className="postCleanUp__votes">{props.postCleanUp.count}</p>
                <button class="postCleanUp-feed__button" type="button">
                    <i class="material-icons-outlined">
                    thumb_down
                    </i>
                </button>
                <p className="postCleanUp__caption">{props.postCleanUp.caption}</p>
            </div>
        </div>
    </div>

   
