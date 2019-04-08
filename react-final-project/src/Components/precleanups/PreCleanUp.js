import React from 'react'
import './precleanups.css'

export default (props) => {
const preCleanUpId = props.preCleanUp.id
return(
<div className = "preCleanUp-feed">
    <div className= "preCleanUp-feed-card">
        <div className="preCleanUp">
            <h3 className="preCleanUp__location"> {props.preCleanUp.location} {props.preCleanUp.id}</h3>
            <p className="preCleanUp__description">{props.preCleanUp.description}</p>
            {props.currentLocation === "precleanups" && <button className="preCleanUp-toggle__button" onClick={() => props.getPreCleanUp(preCleanUpId)}>View More</button>}
        </div>
    </div>
</div>
)
}