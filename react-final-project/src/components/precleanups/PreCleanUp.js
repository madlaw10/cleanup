import React from 'react'
import CleanUpComments from '../comments/CleanUpComments'
import './precleanups.css'

export default (props) => {
const preCleanUpId = props.preCleanUp.id
const cleanUpComments = props.preCleanUp.comments
const cleanUpUser = props.preCleanUp.user

return(
<div className = "preCleanUp-feed">
    <div className= "preCleanUp-feed-card">
        <div className="preCleanUp">
            <div className="preCleanUp__header">
                <div className="postCleanUp__heading">
                    <img className="preCleanUp__avatar" src={cleanUpUser.avatar} alt="Avatar" />
                    <h3 className="preCleanUp__location"> {props.preCleanUp.location} </h3>
                </div>
                <h4 className="preCleanUp__scheduledDate"> Cleanup Date: {props.preCleanUp.scheduledDate}</h4>
            </div>
            <p className="preCleanUp__description">{props.preCleanUp.description}</p>
            {props.currentLocation === "precleanups" && <button className="preCleanUp-toggle__button" onClick={() => props.getPreCleanUp(preCleanUpId)}>View More</button>}
            <div>
                {props.currentLocation === "precleanup" && <CleanUpComments cleanUpComments={cleanUpComments} addPreCleanUpComment = {props.addPreCleanUpComment} cleanUpId = {preCleanUpId} currentLocation={props.currentLocation} user = {props.user}/>}
            </div>
        </div>
    </div>
</div>
)
}