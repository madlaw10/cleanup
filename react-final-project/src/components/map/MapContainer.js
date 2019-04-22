import React from 'react';
import { GoogleApiWrapper, Map, Marker, InfoWindow } from 'google-maps-react';
import './map.css'

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
      locations: [],
      showingInfoWindow: false, 
      activeMarker: {},          
      selectedPlace: {}          
    };
    this.handleMapClick = this.handleMapClick.bind(this);
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

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
          <Map
            google={this.props.google}
            className={"map"}
            zoom={this.props.zoom}
            initialCenter={{
              lat: 40.016263,
              lng: -83.012147
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
          

          {/* Clinton-Como Park */}
          <Marker
          onClick={this.onMarkerClick}
          name={'Clinton-Como Park'}
          details={'Lorem ipsum dolor sit amet'}
          url={"https://goo.gl/maps/jgCWspqJYwWDnf577"}
          position = {{ lat:  40.026087, lng: -83.0224795 }}
          icon="https://raw.githubusercontent.com/madlaw10/final-project/master/react-final-project/src/media/cleanup__map-marker.png"
          />

          {/* Tuttle Community Recreation Center */}
          <Marker
          onClick={this.onMarkerClick}
          name={'Tuttle Community Recreation Center'}
          details={'Lorem ipsum dolor sit amet'}
          url={"https://goo.gl/maps/3nv8ZPQK2sPbKejJA"}
          position = {{ lat: 40.009899, lng: -83.016361 }}   
          icon="https://raw.githubusercontent.com/madlaw10/final-project/master/react-final-project/src/media/cleanup__map-marker.png"
          />

          {/* Glen Echo Park */}
          <Marker
          onClick={this.onMarkerClick}
          name={' Glen Echo Park '}
          details={'Lorem ipsum dolor sit amet'}
          url={"https://goo.gl/maps/EMKeNg8j3zeV7Te48"}
          position = {{ lat: 40.019343, lng: -82.998632 }}
          icon="https://raw.githubusercontent.com/madlaw10/final-project/master/react-final-project/src/media/cleanup__map-marker.png"
          />


          {/* Portal Park */}
          <Marker
          onClick={this.onMarkerClick}
          name={' Portal Park '}
          details={'Lorem ipsum dolor sit amet'}
          url={"https://goo.gl/maps/G91ajUPfRuSnZMq79"}
          position = {{ lat: 40.018145, lng: -83.011651 }}
          icon="https://raw.githubusercontent.com/madlaw10/final-project/master/react-final-project/src/media/cleanup__map-marker.png"
          />

          {/* Audobon Park */}
          <Marker
          onClick={this.onMarkerClick}
          name={' Audobon Park '}
          details={'Lorem ipsum dolor sit amet'}
          url={"https://goo.gl/maps/XHobeB6YQw6W9SFT7"}
          position = {{ lat: 40.021056, lng: -82.991674 }}
          icon="https://raw.githubusercontent.com/madlaw10/final-project/master/react-final-project/src/media/cleanup__map-marker.png"
          />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
              <h5>{this.state.selectedPlace.details}</h5>
              <a href={this.state.selectedPlace.url} target="_blank">Click for directions</a>
            </div>
          </InfoWindow>
          </Map>
      </div>
      
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyC-OZk5IeNBPvd0hN7gDKFNVK2ZCvIUC3Y'
})(MapContainer);



