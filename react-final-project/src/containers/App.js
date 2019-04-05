import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header';
import Footer from '../components/footer/Footer';
import LandingPage from '../components/LandingPage'
import PostCleanUps from '../components/postcleanups/PostCleanUps'
import PostCleanUp from '../components/postcleanups/PostCleanUp'
import PreCleanUps from '../components/precleanups/PreCleanUps'
import api from '../util/api'

class App extends Component {

  constructor() {
    super()
    this.state = {
      postCleanUps: [],
      postCleanUp: 'postcleanup',
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

getPostCleanUp = (postCleanUpId) => {
  this.setState({ currentLocation: 'postcleanup' })
  api.getRequest('/cleanups/postcleanups/'+ postCleanUpId, postCleanUp => {
    this.setState({postCleanUp})
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
       {this.state.currentLocation === "postcleanups" && <PostCleanUps postCleanUps={this.state.postCleanUps} getPostCleanUp={this.getPostCleanUp} currentLocation={this.state.currentLocation}/>}
       {this.state.currentLocation === "postcleanup" && <PostCleanUp postCleanUp={this.state.postCleanUp} />}
       {this.state.currentLocation === "precleanups" && <PreCleanUps preCleanUps={this.state.preCleanUps} />}
       {this.state.currentLocation === "landingpage" && <LandingPage />}
      </div>
    ) 
  } 
}

export default App;