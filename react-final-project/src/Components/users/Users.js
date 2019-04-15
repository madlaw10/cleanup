import React from 'react'
import User from './User'

export default (props) => {
    return (
        <div>
            {props.users.map(user => 
                <User key={user.id} user={user} currentLocation={props.currentLocation} getPostCleanUp={props.getPostCleanUp} addPostCleanUpComment = {props.addPostCleanUpComment} />)}
        </div>
    )
}