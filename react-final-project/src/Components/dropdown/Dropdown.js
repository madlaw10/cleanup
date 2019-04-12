import React from 'react'
import './dropdown.css';

class Dropdown extends React.Component {
  state = {opened: false};
  onClick = () => {
    this.setState((state, props) => ({
      opened: !state.opened
    }))
  }
  render() {
    return(
      <div>
      <DDToggler onClick = {this.onClick} />
       <DDList opened = {this.state.opened}></DDList>
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
            <h3 className="menu__item">Profile</h3>
            <h3 className="menu__item">Rewards</h3>
            <h3 className="menu__item">CleanUps</h3>
            <h3 className="menu__item">Maps</h3>
            <h3 className="menu__item">History</h3>
            <h3 className="menu__item">Leaderboard</h3>
            <h3 className="menu__item">About</h3>
        </div> 
    </div>)
}

export default Dropdown;