import React from 'react';
import { GoogleApiWrapper, Map, Marker, InfoWindow } from 'google-maps-react';
import '../css/map.css'

const MarkersList = props => {
  const { locations, ...markerProps } = props;
  return (
    <span>
      {locations.map((location, i) => {
        return (
          <Marker
            key={i}
            {...markerProps}
            position={{ lat: location.lat(), lng: location.lng() }}
          />
        );
      })}
    </span>
  );
};

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: []
    };
    this.handleMapClick = this.handleMapClick.bind(this);
  }

  handleMapClick = (ref, map, ev) => {
    const location = ev.latLng;
    this.setState(prevState => ({
      locations: [...prevState.locations, location]
    }));
    map.panTo(location);
  };

  render() {
    return (
      <div className="map-view">
        <div className="map-container">
          <Map
            google={this.props.google}
            className={"map"}
            zoom={this.props.zoom}
            initialCenter={{
              lat: 39.9611,
              lng: -82.9987
              }}
              styles={ [    
                {
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [{ visibility: "off" }]
                }
            ]}
            onClick={this.handleMapClick}
          >
          <MarkersList locations={this.state.locations} icon="https://raw.githubusercontent.com/madlaw10/final-project/master/react-final-project/src/media/cleanup__map-marker.png" />

          <Marker
          position = {{ lat: 39.9611, lng: -82.9987 }}
          icon="https://raw.githubusercontent.com/madlaw10/final-project/master/react-final-project/src/media/cleanup__map-marker.png"
          />


          </Map>
        </div>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyA8x0vAXqI7h6s44_Ro_g_6FWMCadssyOs'
})(MapContainer);



