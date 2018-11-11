import React, { Component } from 'react';
import { connect } from 'react-redux';
import TagSelector from './TagSelector';
import './Admin.css';

import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';

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

  validProjectData = () => {
    let check = this.state.newProject;
    if (check.name === '' || check.description === '') {
      alert('Please enter a name and description.');
      return false;
    } else {
      return true;
    }
  };

  addNewProject = event => {
      event.preventDefault();
      if (this.validProjectData()) {
        this.props.dispatch({ type: 'ADD_PROJECT', payload: this.state.newProject });
        this.setState({
            newProject: emptyProjectObject
        });
      }
  }

  render() {
    return (
      <div className="App">
        <h3>Add Project</h3>
        {/* <pre>{JSON.stringify(this.state.newProject)}</pre> */}
        <form onSubmit={this.addNewProject}>
        <div>
          <Input
          name="name"
          placeholder="Project Name"
          onChange={this.handleChange}
          value={this.state.newProject.name}/>
          <Input
          type="date"
          name="date_completed"
          placeholder="Date Completed"
          onChange={this.handleChange}
          value={this.state.newProject.date_completed}/>
          <TagSelector />
        </div>
        <div>
          <Input
            type="text"
            name="website"
            placeholder="Website"
            onChange={this.handleChange}
            value={this.state.newProject.website}/>
          <Input
            type="text"
            name="github"
            placeholder="GitHub"
            onChange={this.handleChange}
            value={this.state.newProject.github}/>
        </div>
          {/* <input type='text' name="name" placeholder="project" value={this.state.newProject.name} onChange={this.handleChange} /> */}
          <input type='text' name="description" placeholder="description" value={this.state.newProject.description} onChange={this.handleChange} />
          <input type='text' name="thumbnail" placeholder="thumbnail" value={this.state.newProject.thumbnail} onChange={this.handleChange} />
          {/* <input type='text' name="website" placeholder="website" value={this.state.newProject.website} onChange={this.handleChange} />
          <input type='text' name="github" placeholder="github" value={this.state.newProject.github} onChange={this.handleChange} /> */}
          {/* <input type='date' name="date_completed" placeholder="date_completed" value={this.state.newProject.date_completed} onChange={this.handleChange} /> */}
          <TagSelector />
          {/* <input type='text' name="tag_id" placeholder="tag_id" value={this.state.newProject.tag_id} onChange={this.handleChange} /> */}
          <input type='submit' value='Add New Project' />
        </form>
      </div>
    ); // end return
  } // end render
} // end AdminForm class

export default connect(mapStateToProps)(AdminForm);