import React, { Component } from 'react'

class PostCleanUpForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            postCleanUpPhoto: '',
            postCleanUpLocation: '',
            postCleanUpCaption: '',
            postCleanUpUser: props.user.id
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
        this.props.addPostCleanUp(this.state.postCleanUpPhoto, this.state.postCleanUpLocation, this.state.postCleanUpCaption, this.state.postCleanUpUser);
        this.setState(this.baseState);
    }

    render () {
        return (
            <div className="tab">
            <input id="tab-one" className="toggle__checkbox" type="checkbox" name="tabs" />
            <label htmlFor="tab-one" className="postCleanUpForm__toggle">Share a CleanUp</label>
            <div className="tab-content">
                <form className="postCleanUpForm" onSubmit={this.handleSubmit}>
                    <label htmlFor="location-input" className="form__label">
                        Location:</label>
                    <input 
                        className="postCleanUpForm__location"
                        name="postCleanUpLocation"
                        id="location-input"
                        type="text"
                        placeholder="Where was the Cleanup?"
                        value={this.state.postCleanUpLocation}
                        onChange={this.handleInputChange} />
                    <label htmlFor="photo-input" className="form__label">
                        Photo:</label>
                    <input 
                        className="postCleanUpForm__photo"
                        name="postCleanUpPhoto"
                        id="photo-input"
                        type="text"
                        placeholder="Add a photo of the Cleanup"
                        value={this.state.postCleanUpPhoto}
                        onChange={this.handleInputChange} />
                    <label htmlFor="caption-input" className="form__label">
                        Caption:</label>
                    <input 
                        className="postCleanUpForm__caption"
                        name="postCleanUpCaption"
                        id="caption-input"
                        type="text"
                        placeholder="Write a caption for the Cleanup"
                        value={this.state.postCleanUpCaption}
                        onChange={this.handleInputChange} />
                    <input 
                        className="postCleanUpForm__btn"
                        type="submit" value="Add Completed Cleanup" />
                </form>
            </div>
        </div>
        )
    }
}

export default PostCleanUpForm;