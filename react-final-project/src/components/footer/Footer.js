import React from 'react'
import './footer.css'

export default (props) => {
    return (
        <div className="footer">
            <i onClick={() => props.updateCurrentLocation('precleanups')} className="material-icons-outlined footer__button">search</i>
            <i onClick={() => props.updateCurrentLocation('mapcontainer')} className="material-icons-outlined footer__button">map</i>
            <i onClick={() => props.updateCurrentLocation('postcleanups')} className="material-icons-outlined footer__button">history</i>
        </div>
    )
}