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
            <form className="preCleanUpForm" onSubmit={this.handleSubmit}>
                <h2>Plan A Cleanup</h2>
                <label>
                    Location:
                    <input 
                        className="preCleanUpForm__location"
                        name="preCleanUpLocation"
                        type="text"
                        placeholder="Where are you cleaning?"
                        value={this.state.preCleanUpLocation}
                        onChange={this.handleInputChange} />
                </label>
                <label>
                    Description:
                    <input 
                        className="preCleanUpForm__description"
                        name="preCleanUpDescription"
                        type="text"
                        placeholder="Add your plan for the Cleanup"
                        value={this.state.preCleanUpDescription}
                        onChange={this.handleInputChange} />
                </label>
                <label>
                    Scheduled Date:
                    <input 
                        className="preCleanUpForm__scheduledDate"
                        name="preCleanUpScheduledDate"
                        type="text"
                        placeholder="YYYY-MM-DD"
                        value={this.state.preCleanUpScheduledDate}
                        onChange={this.handleInputChange} />
                </label>
                <input type="submit" value="Add Cleanup" />
            </form>
        )
    }
}

export default PreCleanUpForm;