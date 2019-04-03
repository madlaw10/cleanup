import React from 'react'

export default (props) => 
    <div className="postCleanUp">
        <h3 className="postCleanUp__location">{props.postCleanUp.location} {props.postCleanUp.id}</h3>
        <img className="postCleanUp__image" src={props.postCleanUp.image} alt="CleanUp Photo" />
        <p className="postCleanUp__caption">{props.postCleanUp.caption}</p>
        <p className="postCleanUp__votes">{props.postCleanUp.count}</p>
    </div>


   
