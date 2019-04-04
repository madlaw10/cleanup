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
      currentLocation: "/cleanups/postcleanups",
      postCleanUps: []
    }
  }

  componentDidMount() {
    this.getPostCleanUps()
  }

  getPostCleanUps = () => {
    api.getRequest(this.state.currentLocation, data => {
      this.setState({postCleanUps: data})
  })
}

  render() {
    return (
      <div>
       <Header />
       <LandingPage />
       <PostCleanUps postCleanUps={this.state.postCleanUps} />
       <Footer />
      </div>
    ) 
  } 
}

export default App;