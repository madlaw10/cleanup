import React from 'react'
import PostCleanUp from './PostCleanUp'
import './postcleanups.css';

export default (props) => {
    return props.postCleanUps
        .map(postCleanUp => <PostCleanUp key={postCleanUp.id} postCleanUp={postCleanUp} />)
}