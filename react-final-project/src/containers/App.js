import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header';
import Footer from '../components/footer/Footer';
import LandingPage from '../components/LandingPage'
import PostCleanUps from '../components/postcleanups/PostCleanUps'
import PostCleanUp from '../components/postcleanups/PostCleanUp'
import PreCleanUps from '../components/precleanups/PreCleanUps'
import PreCleanUp from '../components/precleanups/PreCleanUp'
import api from '../util/api'

class App extends Component {

  constructor() {
    super()
    this.state = {
      postCleanUps: [],
      postCleanUp: {},
      preCleanUps: [],
      currentLocation: 'landingpage',
      preCleanUp: {}
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
    api.getRequest('/cleanups/postcleanups/' + postCleanUpId, postCleanUp => {
      this.setState({ postCleanUp, currentLocation: 'postcleanup' })
    })
  }

  getPreCleanUps = () => {
    api.getRequest('/cleanups/precleanups', preCleanUps => {
      this.setState({ preCleanUps })
    })
  }

  getPreCleanUp = (preCleanUpId) => {
    api.getRequest('/cleanups/precleanups/' + preCleanUpId, preCleanUp => {
      this.setState({ preCleanUp, currentLocation: 'precleanup' })
     })
  }  

  addPostCleanUp = (postCleanUpPhoto, postCleanUpLocation, postCleanUpCaption) => {
    let newPostCleanUp = { postCleanUpPhoto, postCleanUpLocation, postCleanUpCaption }
    api.postRequest('/cleanups/postcleanups/add', newPostCleanUp, postCleanUps =>
          this.setState({ postCleanUps })
    )
  }

  addPreCleanUp = (preCleanUpLocation, preCleanUpDescription, preCleanUpScheduledDate) => {
    let newPreCleanUp = { preCleanUpLocation, preCleanUpDescription, preCleanUpScheduledDate }
    api.postRequest('/cleanups/precleanups/add', newPreCleanUp, preCleanUps =>
          this.setState({ preCleanUps })
    )
  }

  addPostCleanUpComment = (cleanUpCommentContent, cleanUpId) => {
    let newCleanUpComment = {cleanUpCommentContent, cleanUpId }
    api.postRequest('/comments/add/postcleanupcomment', newCleanUpComment, postCleanUp => 
      this.setState({ postCleanUp})
    )
  }

  addPreCleanUpComment = (cleanUpCommentContent, cleanUpId) => {
    let newCleanUpComment = {cleanUpCommentContent, cleanUpId }
    api.postRequest('/comments/add/precleanupcomment', newCleanUpComment, preCleanUp => 
      this.setState({ preCleanUp})
    )
  }

  updateCurrentLocation = (location) => {
    this.setState({ currentLocation: location })
  }

  render() {
    return (
      <div>
        <Header updateCurrentLocation={this.updateCurrentLocation} />
        <Footer updateCurrentLocation={this.updateCurrentLocation} />
        <div className="body__container">
          {this.state.currentLocation === "postcleanups" && <PostCleanUps postCleanUps={this.state.postCleanUps} getPostCleanUp={this.getPostCleanUp} currentLocation={this.state.currentLocation} addPostCleanUp={this.addPostCleanUp} addPostCleanUpComment = {this.addPostCleanUpComment} />}
          {this.state.currentLocation === "postcleanup" && <PostCleanUp postCleanUp={this.state.postCleanUp} currentLocation={this.state.currentLocation} addPostCleanUpComment = {this.addPostCleanUpComment} />}
          {this.state.currentLocation === "precleanups" && <PreCleanUps preCleanUps={this.state.preCleanUps} getPreCleanUp={this.getPreCleanUp} currentLocation={this.state.currentLocation} addPreCleanUp={this.addPreCleanUp} addPreCleanUpComment = {this.addPreCleanUpComment} />}
          {this.state.currentLocation === "precleanup" && <PreCleanUp preCleanUp={this.state.preCleanUp} currentLocation={this.state.currentLocation} addPreCleanUpComment = {this.addPreCleanUpComment} />}
        </div>
        {this.state.currentLocation === "landingpage" && <LandingPage />}
      </div>
    )
  }
}

export default App;