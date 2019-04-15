import React, { Component } from 'react'

class PreCleanUpCommentForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cleanUpCommentContent: '',
            cleanUpId: props.cleanUpId,
            cleanUpCommentUser: props.user.id
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
        this.props.addPreCleanUpComment(this.state.cleanUpCommentContent, this.state.cleanUpId, this.state.cleanUpCommentUser);
        this.setState(this.baseState);
    }

    render () {
        return (
            <form className="cleanUpCommentForm" onSubmit={this.handleSubmit}>
                <label for="content__input"></label>
                    <input 
                        className="cleanUpCommentForm__content"
                        name="cleanUpCommentContent"
                        id="content__input"
                        type="text"
                        placeholder="Add your comment"
                        value={this.state.cleanUpCommentContent}
                        onChange={this.handleInputChange} />
               <input className="commentForm__button" type="submit" value="Add Comment" />
            </form>
        )
    }
}

export default PreCleanUpCommentForm;