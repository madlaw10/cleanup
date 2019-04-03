import React from 'react'
import PostCleanUp from './PostCleanUp'

export default (props) => {
    return props.postCleanUps
        .map(postCleanUp => <PostCleanUp key={postCleanUp.id} postCleanUp={postCleanUp} />)
}