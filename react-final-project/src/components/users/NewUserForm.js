import React, { Component } from 'react'

class NewUserForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            avatar: '',
            password: ''

        };

        this.baseState = this.state;
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
        this.props.addNewUser(this.state.userName, this.state.avatar);
        this.setState(this.baseState);
    }

    render() {
        return (
            <div className="tab">
                <input id="tab-one" className="toggle__checkbox" type="checkbox" name="tabs" />
                <label htmlFor="tab-one" className="newUserForm__toggle">Register New Account</label>
                <div className="tab-content">
                    <form className="newUserForm" onSubmit={this.handleSubmit}>
                        <label htmlFor="location-input" className="form__label">
                            Username:</label>
                        <input
                            className="newUserForm__userName"
                            name="userName"
                            id="userName-input"
                            type="text"
                            placeholder="Create a username"
                            value={this.state.userName}
                            onChange={this.handleInputChange} />
                        <label htmlFor="caption-input" className="form__label">
                            Password:</label>
                        <input
                            className="newUserForm__password"
                            name="password"
                            id="password-input"
                            type="text"
                            placeholder="Create a password"
                            value={this.state.password}
                            onChange={this.handleInputChange} />
                        <label htmlFor="avatar-input" className="form__label">
                            Avatar:</label>
                        <input
                            className="newUserForm__avatar"
                            name="avatar"
                            id="avatar-input"
                            type="text"
                            placeholder="Add an avatar image"
                            value={this.state.avatar}
                            onChange={this.handleInputChange} />
                        <input
                            className="newUserForm__btn"
                            type="submit" value="Register" />
                    </form>
                </div>
            </div>
        )
    }
}

export default NewUserForm;