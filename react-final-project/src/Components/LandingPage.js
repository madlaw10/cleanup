import React from 'react';
import '../css/landingPage.css';
import MapContainer from './MapContainer'


export default function LandingPage() {
    return (

    <div className="landing-page">
        <section className="map-container">
            <MapContainer />
        </section>
    </div>
    
    );
}