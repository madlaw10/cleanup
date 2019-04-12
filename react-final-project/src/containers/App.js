import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header';
import Footer from '../components/footer/Footer';
import LandingPage from '../components/LandingPage'
import MapContainer from '../components/MapContainer'
import PostCleanUps from '../components/postcleanups/PostCleanUps'
import PostCleanUp from '../components/postcleanups/PostCleanUp'
import PreCleanUps from '../components/precleanups/PreCleanUps'
import PreCleanUp from '../components/precleanups/PreCleanUp'
import Users from '../components/users/Users'
import User from '../components/users/User'
import api from '../util/api'


class App extends Component {

  constructor() {
    super()
    this.state = {
      postCleanUps: [],
      postCleanUp: {},
      preCleanUps: [],
      preCleanUp: {},
      users:[],
      user:{},
      currentLocation: 'landingpage'
    }
  }

  componentDidMount() {
    this.getPostCleanUps()
    this.getPreCleanUps()
    this.getUsers()
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

  getUsers = () => {
    api.getRequest('/users/leaderboard', users => {
      this.setState({ users })
    })
  }

  getUser = (userId) => {
    api.getRequest('/users/' + userId, user => {
      this.setState({ user, currentLocation: 'user' })
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
      this.setState({ postCleanUp })
    )
  }

  addPreCleanUpComment = (cleanUpCommentContent, cleanUpId) => {
    let newCleanUpComment = {cleanUpCommentContent, cleanUpId }
    api.postRequest('/comments/add/precleanupcomment', newCleanUpComment, preCleanUp => 
      this.setState({ preCleanUp })
    )
  }

  voteUp = (postCleanUpId) => {
    api.postRequest('/cleanups/postcleanups/' + postCleanUpId + '/voteup', postCleanUpId, postCleanUps => this.setState({ postCleanUps }))
  }

  voteDown = (postCleanUpId) => {
    api.postRequest('/cleanups/postcleanups/' + postCleanUpId + '/votedown', postCleanUpId, postCleanUps => this.setState({ postCleanUps }))
  }

  updateCurrentLocation = (location) => {
    this.setState({ currentLocation: location })
  }

  render() {
    return (
      <div>
        <Header updateCurrentLocation={this.updateCurrentLocation} currentLocation={this.state.currentLocation} user = {this.state.user} />
        <Footer updateCurrentLocation={this.updateCurrentLocation} />

        <div className="body__container">
          {this.state.currentLocation === "mapcontainer" && <MapContainer />}

          {this.state.currentLocation === "postcleanups" && <PostCleanUps postCleanUps={this.state.postCleanUps} getPostCleanUp={this.getPostCleanUp} currentLocation={this.state.currentLocation} addPostCleanUp={this.addPostCleanUp} addPostCleanUpComment = {this.addPostCleanUpComment} voteUp = {this.voteUp} voteDown = {this.voteDown} />}

          {this.state.currentLocation === "postcleanup" && <PostCleanUp postCleanUp={this.state.postCleanUp} currentLocation={this.state.currentLocation} addPostCleanUpComment = {this.addPostCleanUpComment} />}

          {this.state.currentLocation === "precleanups" && <PreCleanUps preCleanUps={this.state.preCleanUps} getPreCleanUp={this.getPreCleanUp} currentLocation={this.state.currentLocation} addPreCleanUp={this.addPreCleanUp} addPreCleanUpComment = {this.addPreCleanUpComment} />}

          {this.state.currentLocation === "precleanup" && <PreCleanUp preCleanUp={this.state.preCleanUp} currentLocation={this.state.currentLocation} addPreCleanUpComment = {this.addPreCleanUpComment} />}

          {this.state.currentLocation === "users" && <Users users={this.state.users} currentLocation={this.state.currentLocation} />}

          {this.state.currentLocation === "user" && <User user={this.state.user} currentLocation={this.state.currentLocation} />}

        </div>

        {this.state.currentLocation === "landingpage" && <LandingPage getUser = {this.getUser} currentLocation={this.state.currentLocation} />}

      </div>
    )
  }
}

export default App;