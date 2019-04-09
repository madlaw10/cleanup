import React from 'react'
import CleanUpComment from './CleanUpComment'

export default (props) => {
    console.log(props.comments)
    return <p>{props.comments.content}</p>
        // .map(comment => <p>Test Comment</p>)
        // <CleanUpComment key={comment.id} comment={comment} />)
}