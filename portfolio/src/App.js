import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Landing from './components/LandingPage/Landing';
import Sidebar from './components/Sidebar/Sidebar';
import Project from './components/ProjectPage/Project';
import About from './components/AboutPage/About';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Route path={ '/' } component={ Sidebar } />
          <div className="main">
            <Route exact path={ '/' } component={ Landing } />
            <Route path={ '/about' } component={ About } />
            <Route path={ '/projects' } component={ Project } />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
