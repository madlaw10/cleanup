import React from 'react'
import '../css/header.css';

export default function Header() {
    return (
    
    <div className="header">
        <i className="material-icons-outlined mobile__menu__button">menu</i>
        <div className="nav">
            <h3 className="nav__item">CleanUps</h3>
            <h3 className="nav__item">Map</h3>
            <h3 className="nav__item">History</h3>
        </div>
        <div className="user__container">
            <h3 className="user__points">9,999 <span> pts</span></h3>
            <img className ="avatar__image" src="https://4.bp.blogspot.com/-ys1MsCf3fak/WkkufJEuZOI/AAAAAAAAAnY/iHnu2QAQOmoniFuuTLWUaoz1Eq0Z0v6WgCEwYBhgL/s1600/bitmoji-20171231083554.png" alt="Your avatar" />
        </div>
    </div>
    );
}
