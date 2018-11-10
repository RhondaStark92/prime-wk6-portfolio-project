import React, { Component } from 'react';

import ProjectList from './ProjectList';


class ProjectView extends Component {

  render() {
    return (
        <div className="App">
            <p>Project View</p>
            <ProjectList />
        </div>
    );
  }
}

export default ProjectView;
