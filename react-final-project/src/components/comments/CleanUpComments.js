import React from 'react'
import CleanUpComment from './CleanUpComment'

export default (props) => {
    console.log(props.cleanUpComments)
    return props.cleanUpComments
        .map(cleanUpComment => <CleanUpComment key={cleanUpComment.id} cleanUpComment={cleanUpComment} />)
}