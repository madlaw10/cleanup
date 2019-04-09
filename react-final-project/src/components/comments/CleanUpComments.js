import React from 'react'
import CleanUpComment from './CleanUpComment'
import CleanUpCommentForm from './CleanUpCommentForm';

export default (props) => {
    return (
      <div>
      {props.cleanUpComments
      .map(cleanUpComment => <CleanUpComment key={cleanUpComment.id} cleanUpComment={cleanUpComment} />)}
      <CleanUpCommentForm addCleanUpComment = {props.addCleanUpComment} cleanUpId = {props.cleanUpId} />
      </div>
    )
}