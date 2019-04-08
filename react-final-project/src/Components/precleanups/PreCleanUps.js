import React from 'react'
import PreCleanUp from './PreCleanUp'
import './precleanups.css'

export default (props) => {
    return props.preCleanUps
        .map(preCleanUp => <PreCleanUp key={preCleanUp.id} preCleanUp={preCleanUp} getPreCleanUp={props.getPreCleanUp} currentLocation={props.currentLocation}/>)
}