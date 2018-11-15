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
  tag_id: '1',
}

class AdminForm extends Component {
  // Renders the entire app on the DOM
  // LOOK AT PUTTING INTO REDUX STATE - 1 SOURCE OF TRUTH!

  state = {newProject: emptyProjectObject};

  // update state from inputs
  handleChange = event => {
      console.log('event happended', event, this.state);
      this.setState({
        newProject: {
            ...this.state.newProject,
            [event.target.name]: event.target.value,
        }
      });
  }

  // verify that name and description has been filled out
  validProjectData = () => {
    let check = this.state.newProject;
    if (check.name === '' || check.description === '') {
      alert('Please enter a name and description.');
      return false;
    } else {
      return true;
    }
  };

  // add a new project only if valid name and description
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
        <form className="Admin-form" onSubmit={this.addNewProject}>
        <div>
          {/* Project name input */}
          <Input
          name="name"
          placeholder="Project Name"
          onChange={this.handleChange}
          value={this.state.newProject.name}/>
          {/* Project date completed date selector */}
          <Input
          type="date"
          name="date_completed"
          placeholder="Date Completed"
          onChange={this.handleChange}
          value={this.state.newProject.date_completed}/>
          {/* Select field for tag */}
          <TagSelector tag_id={this.state.newProject.tag_id} 
            handleChange={this.handleChange}/>
        </div>
        <div>
          {/* Website input */}
          <Input
            type="text"
            name="website"
            placeholder="Website"
            onChange={this.handleChange}
            value={this.state.newProject.website}/>
          {/* Github input */}
          <Input
            type="text"
            name="github"
            placeholder="GitHub"
            onChange={this.handleChange}
            value={this.state.newProject.github}/>
        </div>
        <div>
          {/* Description input field */}
          <Input
            id="standard-multiline-static"
            label="Description"
            name="description"
            placeholder="Description of project can go here."
            multiline
            rows="4"
            value={this.state.newProject.description}
            onChange={this.handleChange}
            margin="normal"
          />
          {/* Thumbnail input */}
          <Input
            type="text"
            name="thumbnail"
            placeholder="Thumbnail"
            onChange={this.handleChange}
            value={this.state.newProject.thumbnail}/>
        </div>
        <div>
        <input type='submit' value='Add New Project' />
        </div>
        </form>
      </div>
    ); // end return
  } // end render
} // end AdminForm class

export default connect(mapStateToProps)(AdminForm);
