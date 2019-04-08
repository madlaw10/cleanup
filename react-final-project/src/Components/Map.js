import React, { Component } from 'react';
import { Map, GoogleApiWrapper} from 'google-map-react';

const mapStyles = {
    width: '100%',
    height: '100%'
  };
  
  export class MapContainer extends Component {
    render() {
      return (
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
           lat: 39.9612,
           lng: 82.9988
          }}
        />
      );
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
  })(MapContainer);


// const defaultProps = {
//     center: {
//         lat: 40.008102799999996, 
//         lng: -83.0344489
//     },
//         zoom: 8,
//         apiKey: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo&callback=initMap' 
//     };

// class Map extends Component {
//     render() {
//         return (
//             <GoogleMapReact
//                 defaultCenter = {defaultProps.center}
//                 defaultZoom = {defaultProps.zoom}
//             ></GoogleMapReact>
//         )
//     }
// }

// export default Map;

