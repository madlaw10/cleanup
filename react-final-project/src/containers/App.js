import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header';
import Footer from '../components/footer/Footer';
import LandingPage from '../components/LandingPage'
import PostCleanUps from '../components/postcleanups/PostCleanUps'
import api from '../util/api'

class App extends Component {

  constructor() {
    super()
    this.state = {
      postCleanUps: [],
      currentLocation: 'postcleanups'
    }
  }

  componentDidMount() {
    this.getPostCleanUps()
  }

  getPostCleanUps = () => {
    api.getRequest('/cleanups/postcleanups', postCleanUps => {
      this.setState({postCleanUps})
  })
}

  updateCurrentLocation = (location) => {
    this.setState({ currentLocation: location })
  }

  render() {
    return (
      <div>
       <Header />
       <Footer updateCurrentLocation={this.updateCurrentLocation} />
       {this.state.currentLocation === "postcleanups" && <PostCleanUps postCleanUps={this.state.postCleanUps} />}
       {this.state.currentLocation === "landingpage" && <LandingPage />}
      </div>
    ) 
  } 
}

export default App;