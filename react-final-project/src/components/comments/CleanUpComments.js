import React from 'react'
import CleanUpComment from './CleanUpComment'
import PostCleanUpCommentForm from './PostCleanUpCommentForm'
import PreCleanUpCommentForm from './PreCleanUpCommentForm'

export default (props) => {
    return (
      <div>
      <CleanUpCommentForm addCleanUpComment = {props.addCleanUpComment} cleanUpId = {props.cleanUpId} />
      {props.cleanUpComments
      .map(cleanUpComment => <CleanUpComment key={cleanUpComment.id} cleanUpComment={cleanUpComment} />)}
      {props.currentLocation === "postcleanup" && <PostCleanUpCommentForm addPostCleanUpComment = {props.addPostCleanUpComment} cleanUpId = {props.cleanUpId} />}
      {props.currentLocation === "precleanup" && <PreCleanUpCommentForm addPreCleanUpComment = {props.addPreCleanUpComment} cleanUpId = {props.cleanUpId} />}
      </div>
    )
}