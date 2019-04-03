import React, { Component } from 'react';
import './App.css';
import LandingPage from './Components/LandingPage';
import Header from './Components/Header';
import Footer from './Components/Footer';

class App extends Component {
  render() {
return (

  <div>
    <Header />
    <LandingPage />
    <Footer />
  </div>
) 
  
  } 
}

export default App;