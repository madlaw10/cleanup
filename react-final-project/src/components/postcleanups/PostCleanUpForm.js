import React, { Component } from 'react'

class PostCleanUpForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            postCleanUpPhoto: 'Add a photo of the Cleanup',
            postCleanUpLocation: 'Where was the Cleanup?',
            postCleanUpCaption: 'Write a caption for the Cleanup'
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
        this.props.addPostCleanUp(this.state.postCleanUpPhoto, this.state.postCleanUpLocation, this.state.postCleanUpCaption);
        this.setState(this.baseState);
    }

    render () {
        return (
            <form className="postCleanUpForm" onSubmit={this.handleSubmit}>
                <h2>Add Your Completed Cleanup</h2>
                <label>
                    Location:
                    <input 
                        className="postCleanUpForm__location"
                        name="postCleanUpLocation"
                        type="text"
                        value={this.state.postCleanUpLocation}
                        onChange={this.handleInputChange} />
                </label>
                <label>
                    Photo:
                    <input 
                        className="postCleanUpForm__photo"
                        name="postCleanUpPhoto"
                        type="text"
                        value={this.state.postCleanUpPhoto}
                        onChange={this.handleInputChange} />
                </label>
                <label>
                    Caption:
                    <input 
                        className="postCleanUpForm__caption"
                        name="postCleanUpCaption"
                        type="text"
                        value={this.state.postCleanUpCaption}
                        onChange={this.handleInputChange} />
                </label>
                <input type="submit" value="Add Completed Cleanup" />
            </form>
        )
    }
}

export default PostCleanUpForm;