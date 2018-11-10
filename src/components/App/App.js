import React, { Component } from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';

import './App.css';
import Header from '../Header/Header';
import ProjectView from '../ProjectView/ProjectView';
import AdminView from '../AdminView/AdminView';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
        <Header/>
          <Route exact path="/" component= {ProjectView} />
          <Route path="/admin" component= {AdminView} />
        </div>
      </Router>
    );
  }
}

export default App;
