import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header';
import Footer from '../components/footer/Footer';
import LandingPage from '../components/LandingPage'
import PostCleanUps from '../components/postcleanups/PostCleanUps'
import PreCleanUps from '../components/precleanups/PreCleanUps'
import api from '../util/api'

class App extends Component {

  constructor() {
    super()
    this.state = {
      postCleanUps: [],
      preCleanUps: [],
      currentLocation: 'landingpage'
    }
  }

  componentDidMount() {
    this.getPostCleanUps()
    this.getPreCleanUps()
  }

  getPostCleanUps = () => {
    api.getRequest('/cleanups/postcleanups', postCleanUps => {
      this.setState({postCleanUps})
  })
}

getPreCleanUps = () => {
  api.getRequest('/cleanups/precleanups', preCleanUps => {
    this.setState({preCleanUps})
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
       {this.state.currentLocation === "precleanups" && <PreCleanUps preCleanUps={this.state.preCleanUps} />}
       {this.state.currentLocation === "landingpage" && <LandingPage />}
      </div>
    ) 
  } 
}

export default App;