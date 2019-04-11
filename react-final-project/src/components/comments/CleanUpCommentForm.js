import React, { Component } from 'react'

class CleanUpCommentForm extends Component {

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
        this.props.addCleanUpComment(this.state.cleanUpCommentContent, this.state.cleanUpId);
        this.setState(this.baseState);
    }

    render () {
        return (
            <form className="cleanUpCommentForm" onSubmit={this.handleSubmit}>
                <label>
                    <input 
                        className="cleanUpCommentForm__content"
                        name="cleanUpCommentContent"
                        type="text"
                        placeholder="Add your comment"
                        value={this.state.cleanUpCommentContent}
                        onChange={this.handleInputChange} />
                </label>
               <input className="commentForm__button" type="submit" value="Add Comment" />
            </form>
        )
    }
}

export default CleanUpCommentForm;