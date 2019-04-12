import React, { Component } from 'react'

class UserLogin extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            password: ''
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
        this.props.getUser(this.state.userName);
        this.setState(this.baseState);
    }

    render () {
        return (
         <form className="userLogin" onSubmit={this.handleSubmit}>
            <label htmlFor="userName-input" className="form__label">
                Username:
            </label>
                <input 
                    className="userLogin__userName"
                    name="userName"
                    id="userName-input"
                    type="text"
                    placeholder="Username or Email"
                    value={this.state.userName}
                    onChange={this.handleInputChange} />
                <label htmlFor="password-input" className="form__label">
                    Password:
                </label>
                    <input 
                        className="userLogin__password"
                        name="password"
                        id="password-input"
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleInputChange} />
                    <input 
                        className="userLogin__btn"
                        type="submit" value="Login" />
                </form>
        )
    }
}

export default UserLogin;