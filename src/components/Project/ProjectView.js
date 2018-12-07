import React, { Component } from 'react';
import ProjectList from './ProjectList';

class ProjectView extends Component {

  render() {
    return (
        <div className="App">
            <h2>{this.props.name}</h2>
            <ProjectList />
        </div>
    );
  }
}

export default ProjectView;
