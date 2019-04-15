import React from 'react'
import CleanUpComment from './CleanUpComment'
import PostCleanUpCommentForm from './PostCleanUpCommentForm'
import PreCleanUpCommentForm from './PreCleanUpCommentForm'

export default (props) => {
    return (
      <div>
        {props.cleanUpComments
        .map(cleanUpComment => <CleanUpComment key={cleanUpComment.id} cleanUpComment={cleanUpComment} />)}
        {props.currentLocation === "postcleanup" && <PostCleanUpCommentForm addPostCleanUpComment = {props.addPostCleanUpComment} cleanUpId = {props.cleanUpId} user = {props.user} />}
        {props.currentLocation === "precleanup" && <PreCleanUpCommentForm addPreCleanUpComment = {props.addPreCleanUpComment} cleanUpId = {props.cleanUpId} user = {props.user} />}
      </div>
    )
}