import React from 'react'
import PreCleanUp from './PreCleanUp'
import './precleanups.css'
import PreCleanUpForm from './PreCleanUpForm' 

export default (props) => {
    return (
        <div>
            {props.currentLocation === 'precleanups' && <PreCleanUpForm addPreCleanUp={props.addPreCleanUp} user = {props.user}/>}
            {props.preCleanUps.map(preCleanUp => 
                <PreCleanUp key={preCleanUp.id} preCleanUp={preCleanUp} getPreCleanUp={props.getPreCleanUp} currentLocation={props.currentLocation} addPreCleanUpComment = {props.addPreCleanUpComment} />)}
        </div>
    )
}