import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProjectList extends Component {

  // mounting GET response to the DOM, when rendered
  componentDidMount() {
    this.getProjects();
  };

getProjects = () => {
  this.props.dispatch({ type: 'GET_PROJECTS'})
}

  render() {
    return (
        <div>
           {this.props.reduxState.projects.map(project =>
            <li key={project.id}>{project.name}</li>
           )} 
        </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(ProjectList);