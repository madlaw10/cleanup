import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const defaultProps = {
    center: {
        lat: 40.008102799999996, 
        lng: -83.0344489
    },
        zoom: 8
    };

class Map extends Component {
    render() {
        return (
            <GoogleMapReact
                defaultCenter = {defaultProps.center}
                defaultZoom = {defaultProps.zoom}
            ></GoogleMapReact>
        )
    }
}

export default Map;

