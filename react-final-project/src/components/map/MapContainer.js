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
          name={"Clinton-Como Park"}
          details={"Planning a quick afternoon Cleanup, head over to help out if you can! We'll be grabbing some margaritas at the nearby Condados afterwards!"}
          url={"https://goo.gl/maps/jgCWspqJYwWDnf577"}
          position = {{ lat:  40.026087, lng: -83.0224795 }}
          icon="https://raw.githubusercontent.com/madlaw10/final-project/master/react-final-project/src/media/cleanup__map-marker.png"
          />

          {/* Tuttle Community Recreation Center */}
          <Marker
          onClick={this.onMarkerClick}
          name={'Tuttle Community Recreation Center'}
          details={"Columbus Recreation and Parks is looking for volunteers this weekend to help with various maintenance needs around the center. Center opens at 9am; coffee and donuts will be provided! Volunteers should park in the main lot."}
          url={"https://goo.gl/maps/3nv8ZPQK2sPbKejJA"}
          position = {{ lat: 40.009899, lng: -83.016361 }}   
          icon="https://raw.githubusercontent.com/madlaw10/final-project/master/react-final-project/src/media/cleanup__map-marker.png"
          />

          {/* Glen Echo Park */}
          <Marker
          onClick={this.onMarkerClick}
          name={"Glen Echo Park"}
          details={"Noticed lots of trash here while walking my pup the other day. It looks like the recent rain raised stream levels high enough to deposit trash around the banks. It's going to take a whole afternoon to clear out, would love to get some help from the neighborhood!"}
          url={"https://goo.gl/maps/EMKeNg8j3zeV7Te48"}
          position = {{ lat: 40.019343, lng: -82.998632 }}
          icon="https://raw.githubusercontent.com/madlaw10/final-project/master/react-final-project/src/media/cleanup__map-marker.png"
          />


          {/* Portal Park */}
          <Marker
          onClick={this.onMarkerClick}
          name={' Portal Park '}
          details={"Planning to go during my lunch break tomorrow and tidy up the sitting area right by Sahara Cafe. If you're in the area around noon, please feel free to stop by!"}
          url={"https://goo.gl/maps/G91ajUPfRuSnZMq79"}
          position = {{ lat: 40.018145, lng: -83.011651 }}
          icon="https://raw.githubusercontent.com/madlaw10/final-project/master/react-final-project/src/media/cleanup__map-marker.png"
          />

          {/* Audobon Park */}
          <Marker
          onClick={this.onMarkerClick}
          name={"Audobon Park"}
          details={"Thanks to everyone for coming out yesterday. We managed to fill six trashbags in just a few hours! I feel like this park is constanlty in need of a quick pick-up, seems like a good idea to plan on coming back every couple weeks."}
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



