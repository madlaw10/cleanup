import React from 'react'
import PreCleanUp from './PreCleanUp'
import './precleanups.css'
import PreCleanUpForm from './PreCleanUpForm' 

export default (props) => {
    return (
        <div>
            <PreCleanUpForm addPreCleanUp={props.addPreCleanUp} />
            {props.preCleanUps.map(preCleanUp => 
                <PreCleanUp key={preCleanUp.id} preCleanUp={preCleanUp} getPreCleanUp={props.getPreCleanUp} currentLocation={props.currentLocation} addPreCleanUpComment = {props.addPreCleanUpComment} />)}
        </div>
    )
}