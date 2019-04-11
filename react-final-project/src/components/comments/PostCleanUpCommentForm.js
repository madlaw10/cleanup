import React, { Component } from 'react'

class PostCleanUpCommentForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cleanUpCommentContent: '',
            cleanUpId: props.cleanUpId
        };

        this.baseState=this.state;
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
    
        this.setState({
          [name]: value
          });
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this.props.addPostCleanUpComment(this.state.cleanUpCommentContent, this.state.cleanUpId);
        this.setState(this.baseState);
    }

    render () {
        return (
            <form className="postCleanUpCommentForm" onSubmit={this.handleSubmit}>
                <h2>Add A Comment</h2>
                <label>
                    Your Comment:
                    <input 
                        className="postCleanUpCommentForm__content"
                        name="cleanUpCommentContent"
                        type="text"
                        placeholder="Add your comment"
                        value={this.state.cleanUpCommentContent}
                        onChange={this.handleInputChange} />
                </label>
               <input type="submit" value="Add Comment" />
            </form>
        )
    }
}

export default PostCleanUpCommentForm;