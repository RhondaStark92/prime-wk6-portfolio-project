import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
  reduxState,
});

const emptyProjectObject = {
  name: '',
  description: '',
  thumbnail: '',
  website: '',
  github: '',
  date_completed: '',
  tag_id: '',
}

class AdminForm extends Component {
  // Renders the entire app on the DOM
  // LOOK AT PUTTING INTO REDUX STATE - 1 SOURCE OF TRUTH!

  state = {newProject: emptyProjectObject};

  handleChange = event => {
      console.log('event happended', this.state)
      this.setState({
        newProject: {
            ...this.state.newProject,
            [event.target.name]: event.target.value,
        }
      });
  }

  addNewProject = event => {
      event.preventDefault();
      this.props.dispatch({ type: 'ADD_PROJECT', payload: this.state.newProject });
      this.setState({
          newProject: emptyProjectObject
      });
  }

  render() {
    return (
      <div className="App">
            <h3>Add Project</h3>
            {/* <pre>{JSON.stringify(this.state.newProject)}</pre> */}
            <form onSubmit={this.addNewProject}>
              <input type='text' name="name" placeholder="project" value={this.state.newProject.name} onChange={this.handleChange} />
              <input type='text' name="description" placeholder="description" value={this.state.newProject.description} onChange={this.handleChange} />
              <input type='text' name="thumbnail" placeholder="thumbnail" value={this.state.newProject.thumbnail} onChange={this.handleChange} />
              <input type='text' name="website" placeholder="website" value={this.state.newProject.website} onChange={this.handleChange} />
              <input type='text' name="github" placeholder="github" value={this.state.newProject.github} onChange={this.handleChange} />
              <input type='text' name="date_completed" placeholder="date_completed" value={this.state.newProject.date_completed} onChange={this.handleChange} />
              <input type='text' name="tag_id" placeholder="tag_id" value={this.state.newProject.tag_id} onChange={this.handleChange} />
              <input type='submit' value='Add New Project' />
            </form>
      </div>
    ); // end return
  } // end render
} // end AdminForm class

export default connect(mapStateToProps)(AdminForm);
