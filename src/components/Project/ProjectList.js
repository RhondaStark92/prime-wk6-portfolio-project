import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import ProjectItem from './ProjectItem';

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
      <Grid container spacing={16}>
          {this.props.reduxState.projects.map(project =>
          <ProjectItem key={project.id} item={project} />
          )} 
      </Grid>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(ProjectList);