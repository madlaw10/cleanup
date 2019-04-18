import React from 'react'
import PostCleanUp from './PostCleanUp'
import PostCleanUpForm from './PostCleanUpForm'
import './postcleanups.css'

export default (props) => {
    return (
        <div>
            {props.currentLocation === 'postcleanups' && <PostCleanUpForm addPostCleanUp={props.addPostCleanUp}  user = {props.user}/>}
            {props.postCleanUps.map(postCleanUp =>
                <PostCleanUp key={postCleanUp.id} postCleanUp={postCleanUp} getPostCleanUp={props.getPostCleanUp} currentLocation={props.currentLocation} addPostCleanUpComment = {props.addPostCleanUpComment} voteUp = {props.voteUp} voteDown = {props.voteDown} updateCurrentLocation={props.updateCurrentLocation}/>)}  
        </div>
    )
}