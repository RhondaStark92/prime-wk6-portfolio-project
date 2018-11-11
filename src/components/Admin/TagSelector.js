import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class TagSelector extends Component {

  state= { 
      TagState: '',
  };

  renderTagOptions() {

    return this.props.reduxState.tags.map((Tag, i) => {
      return (
        <MenuItem
          key={i}
          value={Tag.id}>
          {Tag.name}
        </MenuItem>
      );
    });
  }

  handleChangeTag = (event) => {
    this.setState({ TagState: event.target.value });
  }

  render(){
    console.log('tags', this.props.reduxState.tags);
    return (
      <Select autowidth="false"
        value={this.state.TagState}
        onChange={this.handleChangeTag}
      >
        {this.renderTagOptions()}
      </Select>
    )}
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(TagSelector);