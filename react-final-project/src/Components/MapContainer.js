import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import '../css/map.css';

export class MapContainer extends Component {
  render() {
    return (
      <div className="map-view">
        <section className="map-container">
        <Map
          google={this.props.google}
          zoom={14}
          initialCenter={{
          lat: 39.9611,
          lng: -82.9987
          }}
        />
        </section>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
})(MapContainer);