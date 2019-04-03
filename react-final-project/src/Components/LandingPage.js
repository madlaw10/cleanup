import React from 'react';
import '../CSS/landingPage.css';
import Map from './Map'


export default function LandingPage() {
    return (

    <div className="landing-page">
        <section className="map-container">
            <Map />
        </section>
    </div>
    
    );
}

