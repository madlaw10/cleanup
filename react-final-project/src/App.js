import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import LandingPage from './Components/LandingPage'
import PostCleanUps from './Components/PostCleanUps'

class App extends Component {

  constructor() {
    super()
    this.state = {
      postCleanUps: []
    }
  }

  componentDidMount() {
    this.getPostCleanUps()
  }

  getPostCleanUps = () => {
    fetch('/cleanups/postcleanups')
    .then(res => res.json())
    .then(data => {
      this.setState({postCleanUps: data})
    })
    .catch(err => console.log(err))
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