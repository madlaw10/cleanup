import React from 'react'
import CleanUpComment from './CleanUpComment'

export default (props) => {
    return props.cleanUpComments
      .map(cleanUpComment => <CleanUpComment key={cleanUpComment.id} cleanUpComment={cleanUpComment} />)
}