import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header';
import Footer from '../components/footer/Footer';
import LandingPage from '../components/LandingPage'
import PostCleanUps from '../components/postcleanups/PostCleanUps'
import PostCleanUp from '../components/postcleanups/PostCleanUp'
import PreCleanUps from '../components/precleanups/PreCleanUps'
import api from '../util/api'
import PreCleanUp from '../components/precleanups/PreCleanUp'

class App extends Component {

  constructor() {
    super()
    this.state = {
      postCleanUps: [],
      postCleanUp: 'postcleanup',
      preCleanUps: [],
      currentLocation: 'landingpage',
      preCleanUp: 'precleanup'
    }
  }

  componentDidMount() {
    this.getPostCleanUps()
    this.getPreCleanUps()
  }

  getPostCleanUps = () => {
    api.getRequest('/cleanups/postcleanups', postCleanUps => {
      this.setState({ postCleanUps })
    })
  }

  getPostCleanUp = (postCleanUpId) => {
    this.setState({ currentLocation: 'postcleanup' })
    api.getRequest('/cleanups/postcleanups/' + postCleanUpId, postCleanUp => {
      this.setState({ postCleanUp })
    })
  }

  getPreCleanUps = () => {
    api.getRequest('/cleanups/precleanups', preCleanUps => {
      this.setState({ preCleanUps })
    })
  }

  getPreCleanUp = (preCleanUpId) => {
    this.setState({ currentLocation: 'precleanup' })
    api.getRequest('/cleanups/precleanups/' + preCleanUpId, preCleanUp => {
      this.setState({ preCleanUp })
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
        <div className="body__container">
          {this.state.currentLocation === "postcleanups" && <PostCleanUps postCleanUps={this.state.postCleanUps} getPostCleanUp={this.getPostCleanUp} currentLocation={this.state.currentLocation} />}
          {this.state.currentLocation === "postcleanup" && <PostCleanUp postCleanUp={this.state.postCleanUp} />}
          {this.state.currentLocation === "precleanups" && <PreCleanUps preCleanUps={this.state.preCleanUps} getPreCleanUp={this.getPreCleanUp} currentLocation={this.state.currentLocation} />}
          {this.state.currentLocation === "precleanup" && <PreCleanUp preCleanUp={this.state.preCleanUp} />}
        </div>
        {this.state.currentLocation === "landingpage" && <LandingPage />}
      </div>
    )
  }
}

export default App;