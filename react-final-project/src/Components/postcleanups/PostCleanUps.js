import React from 'react'
import PostCleanUp from './PostCleanUp'
import PostCleanUpForm from './PostCleanUpForm'
import './postcleanups.css'

export default (props) => {
    return (
        <div>
            {props.postCleanUps.map(postCleanUp => <PostCleanUp key={postCleanUp.id} postCleanUp={postCleanUp} getPostCleanUp={props.getPostCleanUp} currentLocation={props.currentLocation} addCleanUpComment = {props.addCleanUpComment}/>)}
            <PostCleanUpForm addPostCleanUp={props.addPostCleanUp} />
        </div>
    )
}