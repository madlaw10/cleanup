import React from 'react'
import './precleanups.css'

export default (props) => 
<div className = "preCleanUp-feed">
    <div className= "preCleanUp-feed-card">
        <div className="preCleanUp">
            <h3 className="preCleanUp__location"> {props.preCleanUp.location} {props.preCleanUp.id}</h3>
            <p className="preCleanUp__description">{props.preCleanUp.description}</p>
        </div>
    </div>
</div>