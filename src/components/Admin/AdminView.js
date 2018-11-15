import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminForm from './AdminForm';
import AdminList from './AdminList';

class AdminView extends Component {

  // mounting GET response to the DOM, when rendered
  componentDidMount() {
    this.getTags();
  };

  // get all the tags and load to redux 
  getTags = () => {
    this.props.dispatch({ type: 'GET_TAGS'})
  }

  render() {
    return (
      <div className="Admin">
        <AdminForm />
        <AdminList />
      </div>
    ); // end return
  } // end render
} // end class AdminView

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps) (AdminView);
