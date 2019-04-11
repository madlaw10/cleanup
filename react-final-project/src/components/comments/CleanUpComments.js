import React from 'react'
import CleanUpComment from './CleanUpComment'
import CleanUpCommentForm from './CleanUpCommentForm';

export default (props) => {
    return (
      <div>
      <CleanUpCommentForm addCleanUpComment = {props.addCleanUpComment} cleanUpId = {props.cleanUpId} />
      {props.cleanUpComments
      .map(cleanUpComment => <CleanUpComment key={cleanUpComment.id} cleanUpComment={cleanUpComment} />)}
      </div>
    )
}