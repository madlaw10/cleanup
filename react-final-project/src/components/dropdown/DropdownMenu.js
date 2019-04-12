import React from 'react'

export default (props) => {
    return (
        <div className="menu__items">
            <h3 className="menu__item">Profile</h3>
            <h3 className="menu__item">Rewards</h3>
            <h3 className="menu__item">CleanUps</h3>
            <h3 className="menu__item">Maps</h3>
            <h3 className="menu__item">History</h3>
            <h3 onClick={() => props.updateCurrentLocation('users')}className="menu__item">Leaderboard</h3>
            <h3 className="menu__item">About</h3>
            <h3 onClick={() => props.updateCurrentLocation('landingpage')} className="menu__item">Logout</h3>
        </div> 
    )
}
