import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LandingPage from '../components/LandingPage'
import PostCleanUps from '../components/PostCleanUps'
import api from '../util/api'

class App extends Component {

  constructor() {
    super()
    this.state = {
      currentLocation: "postcleanups",
      postCleanUps: []
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
       <LandingPage />
       {this.state.currentLocation === "postcleanups" && <PostCleanUps postCleanUps={this.state.postCleanUps} />}
       <Footer />
      </div>
    ) 
  } 
}

export default App;