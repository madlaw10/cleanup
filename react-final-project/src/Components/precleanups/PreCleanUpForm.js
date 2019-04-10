import React, { Component } from 'react'

class PreCleanUpForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            preCleanUpLocation: '',
            preCleanUpDescription: '',
            preCleanUpScheduledDate: ''
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
        this.props.addPreCleanUp(this.state.preCleanUpLocation, this.state.preCleanUpDescription, this.state.preCleanUpScheduledDate);
        this.setState(this.baseState);
    }

    render () {
        return (
            <div className="tab">
            <input id="tab-one" className="toggle__checkbox" type="checkbox" name="tabs" />
            <label for="tab-one" className="postCleanUpForm__toggle">Plan A Cleanup</label>
            <div className="tab-content">
                <form className="preCleanUpForm" onSubmit={this.handleSubmit}>
                    <label for="location-input" className="form__label">
                        Location:</label>
                        <input 
                            className="preCleanUpForm__location"
                            name="preCleanUpLocation"
                            id="location-input"
                            type="text"
                            placeholder="Where are you cleaning?"
                            value={this.state.preCleanUpLocation}
                            onChange={this.handleInputChange} />
                    <label for="description-input" className="form__label">
                    Description:</label>
                        <input 
                            className="preCleanUpForm__description"
                            name="preCleanUpDescription"
                            id="description-input"
                            type="text"
                            placeholder="Add your plan for the Cleanup"
                            value={this.state.preCleanUpDescription}
                            onChange={this.handleInputChange} />
                    <label for="description-input" className="form__label">
                    Scheduled Date:</label>
                        <input 
                            className="preCleanUpForm__scheduledDate"
                            name="preCleanUpScheduledDate"
                            id="date-input"
                            type="text"
                            placeholder="YYYY-MM-DD"
                            value={this.state.preCleanUpScheduledDate}
                            onChange={this.handleInputChange} />
                    <input
                        className="preCleanUpForm__btn" 
                        type="submit" 
                        value="Add Cleanup" />
                </form>
            </div>
        </div>
        )
    }
}

export default PreCleanUpForm;