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

  componentDidMount() {}

  getPostCleanUps = () => {
    api.getRequest('/cleanups/postcleanups', postCleanUps => {
      this.setState({ postCleanUps, currentLocation: 'postcleanups' })
    })
  }

  getPostCleanUp = (postCleanUpId) => {
    api.getRequest('/cleanups/postcleanups/' + postCleanUpId, postCleanUp => {
      this.setState({ postCleanUp, currentLocation: 'postcleanup' })
    })
  }

  getPreCleanUps = () => {
    api.getRequest('/cleanups/precleanups', preCleanUps => {
      this.setState({ preCleanUps, currentLocation: 'precleanups' })
    })
  }

  getPreCleanUp = (preCleanUpId) => {
    api.getRequest('/cleanups/precleanups/' + preCleanUpId, preCleanUp => {
      this.setState({ preCleanUp, currentLocation: 'precleanup' })
     })
  }  

  getUsers = () => {
    api.getRequest('/users/leaderboard', users => {
      this.setState({ users, currentLocation: 'users' })
    })
  }

  getUser = (userName) => {
    api.getRequest('/users/' + userName, user => {
      this.setState({ user })
    })
  }

  addPostCleanUp = (postCleanUpPhoto, postCleanUpLocation, postCleanUpCaption, postCleanUpUser) => {
    let newPostCleanUp = { postCleanUpPhoto, postCleanUpLocation, postCleanUpCaption, postCleanUpUser }
    api.postRequest('/cleanups/postcleanups/add', newPostCleanUp, postCleanUps =>
          this.setState({ postCleanUps, currentLocation: 'postcleanups' })
    )
  }

  addPreCleanUp = (preCleanUpLocation, preCleanUpDescription, preCleanUpScheduledDate, preCleanUpUser) => {
    let newPreCleanUp = { preCleanUpLocation, preCleanUpDescription, preCleanUpScheduledDate, preCleanUpUser }
    api.postRequest('/cleanups/precleanups/add', newPreCleanUp, preCleanUps =>
          this.setState({ preCleanUps, currentLocation: 'precleanups' })
    )
  }

  addPostCleanUpComment = (cleanUpCommentContent, cleanUpId, cleanUpCommentUser) => {
    let newCleanUpComment = {cleanUpCommentContent, cleanUpId, cleanUpCommentUser }
    api.postRequest('/comments/add/postcleanupcomment', newCleanUpComment, postCleanUp => 
      this.setState({ postCleanUp, currentLocation: 'postcleanup' })
    )
  }

  addPreCleanUpComment = (cleanUpCommentContent, cleanUpId, cleanUpCommentUser) => {
    let newCleanUpComment = {cleanUpCommentContent, cleanUpId, cleanUpCommentUser }
    api.postRequest('/comments/add/precleanupcomment', newCleanUpComment, preCleanUp => 
      this.setState({ preCleanUp, currentLocation: 'precleanup'  })
    )
  }

  voteUp = (postCleanUpId, cleanUpUserId) => {
    let postCleanUpUser = { cleanUpUserId }
    api.postRequest('/cleanups/postcleanups/' + postCleanUpId + '/voteup', postCleanUpUser, postCleanUps => this.setState({ postCleanUps, currentLocation: 'postcleanups' }))
  }

  voteDown = (postCleanUpId, cleanUpUserId) => {
    let postCleanUpUser = { cleanUpUserId }
    api.postRequest('/cleanups/postcleanups/' + postCleanUpId + '/votedown', postCleanUpUser, postCleanUps => this.setState({ postCleanUps, currentLocation: 'postcleanups' }))
  }

  updateCurrentLocation = (location) => {
    this.setState({ currentLocation: location })
  }

  render() {
    return (
      <div>          
      {this.state.currentLocation === "landingpage" && <LandingPage getUser = {this.getUser} currentLocation={this.state.currentLocation} updateCurrentLocation = {this.updateCurrentLocation} />}
      <div className="body__main">

        {this.state.currentLocation !== "landingpage" && <Header updateCurrentLocation={this.updateCurrentLocation} currentLocation={this.state.currentLocation} user = {this.state.user} getPostCleanUps = {this.getPostCleanUps} getPreCleanUps = {this.getPreCleanUps} getUsers = {this.getUsers} getUser = {this.getUser} />}

        {this.state.currentLocation !== "landingpage" && <Footer updateCurrentLocation={this.updateCurrentLocation} />}
        {this.state.currentLocation === "mapcontainer" && <MapContainer />}

        
        {this.state.currentLocation !== "landingpage" && <div className="body__container">

          {this.state.currentLocation === "postcleanups" && <PostCleanUps postCleanUps={this.state.postCleanUps} getPostCleanUp={this.getPostCleanUp} currentLocation={this.state.currentLocation} addPostCleanUp={this.addPostCleanUp} addPostCleanUpComment = {this.addPostCleanUpComment} voteUp = {this.voteUp} voteDown = {this.voteDown}  user = {this.state.user} updateCurrentLocation = {this.updateCurrentLocation}/>}

          {this.state.currentLocation === "postcleanup" && <PostCleanUp postCleanUp={this.state.postCleanUp} currentLocation={this.state.currentLocation} addPostCleanUpComment = {this.addPostCleanUpComment}  user = {this.state.user} updateCurrentLocation = {this.updateCurrentLocation} />}

          {this.state.currentLocation === "precleanups" && <PreCleanUps preCleanUps={this.state.preCleanUps} getPreCleanUp={this.getPreCleanUp} currentLocation={this.state.currentLocation} addPreCleanUp={this.addPreCleanUp} addPreCleanUpComment = {this.addPreCleanUpComment}  user = {this.state.user} />}

          {this.state.currentLocation === "precleanup" && <PreCleanUp preCleanUp={this.state.preCleanUp} currentLocation={this.state.currentLocation} addPreCleanUpComment = {this.addPreCleanUpComment}  user = {this.state.user} />}

          {this.state.currentLocation === "users" && <Users users={this.state.users} currentLocation={this.state.currentLocation} />}

          {this.state.currentLocation === "user" && <User user={this.state.user} currentLocation={this.state.currentLocation} />}

        </div>}


      </div>
      </div>
    )
  }
}

export default App;