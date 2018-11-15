import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class TagSelector extends Component {

  state= { 
      TagState: '',
  };

  renderTagOptions() {
    // 
    return this.props.reduxState.tags.map((Tag, i) => {
      return (
        <MenuItem
          key={i}
          value={Tag.id}>
          {Tag.name}
        </MenuItem>
      ); // end return
    }); // end map
  } // end renderTagOptions

  render(){
    return (
      <Select autowidth="false"
        value={this.props.tag_id}
        name="tag_id"
        onChange={this.props.handleChange}
      >
        {this.renderTagOptions()}
      </Select>
    )
  } // end return
} // end class TagSelector

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(TagSelector);