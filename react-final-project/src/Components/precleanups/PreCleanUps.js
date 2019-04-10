import React from 'react'
import PreCleanUp from './PreCleanUp'
import './precleanups.css'
import PreCleanUpForm from './PreCleanUpForm' 

export default (props) => {
    return (
        <div>
            {props.preCleanUps.map(preCleanUp => <PreCleanUp key={preCleanUp.id} preCleanUp={preCleanUp} getPreCleanUp={props.getPreCleanUp} currentLocation={props.currentLocation} />)}
        <PreCleanUpForm addPreCleanUp={props.addPreCleanUp} />
        </div>
    )
}