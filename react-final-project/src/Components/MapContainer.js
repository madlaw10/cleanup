import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        initialCenter={{
         lat: 39.9611,
         lng: -82.9987
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
})(MapContainer);