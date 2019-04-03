import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends Component {
  static defaultProps = {
    center: {
        lat: 40.008102799999996, 
        lng: -83.0344489
    },
        zoom: 8
    };

    render() {
        return (
            <GoogleMapReact
                defaultCenter = {this.props.center}
                defaultZoom = {this.props.zoom}
            ></GoogleMapReact>
        )
    }
}

export default Map;

