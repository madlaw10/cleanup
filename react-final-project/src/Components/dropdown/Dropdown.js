import React from 'react'
import './dropdown.css';

class Dropdown extends React.Component {

  constructor(props) {
  super(props)
    this.state = {
      opened: false
    };
  }

  onClick = () => {
    this.setState((state) => ({
      opened: !state.opened
    }))
  }

  render() {
    return(
      <div>
      <DDToggler onClick = {this.onClick} />
       <DDList opened = {this.state.opened} updateCurrentLocation={this.props.updateCurrentLocation} currentLocation={this.props.currentLocation} getUser = {this.props.getUser} user = {this.props.user} />
        </div>
    )
  }
}

const DDToggler = (props) => {
  return (<img onClick = {props.onClick} className="menu__toggle" src="https://raw.githubusercontent.com/nate-fritz/nate-fritz.github.io/master/static/media/cleanuplogo.png" alt="Cleanup Logo" />)
}

const DDList = (props) => {
  return (<div className = {props.opened ? 'opened' : 'closed'}>
        <div className="menu__items">
            <h3 onClick={() => props.getUser(props.user.userName)}className="menu__item">Profile</h3>
            <h3 onClick={() => props.updateCurrentLocation('precleanups')}className="menu__item">CleanUps</h3>
            <h3 onClick={() => props.updateCurrentLocation('mapcontainer')}className="menu__item">Map</h3>
            <h3 onClick={() => props.updateCurrentLocation('postcleanups')}className="menu__item">History</h3>
            <h3 onClick={() => props.updateCurrentLocation('users')}className="menu__item">Leaderboard</h3>
            <h3 onClick={() => props.updateCurrentLocation('landingpage')} className="menu__item">Logout</h3>
        </div> 
    </div>)
}

export default Dropdown;