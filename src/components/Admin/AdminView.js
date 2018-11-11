import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminForm from './AdminForm';
import AdminList from './AdminList';

class AdminView extends Component {

  // mounting GET response to the DOM, when rendered
  componentDidMount() {
    this.getTags();
  };

  getTags = () => {
    this.props.dispatch({ type: 'GET_TAGS'})
  }

  render() {
    return (
      <div className="Admin">
        <AdminForm />
        <AdminList />
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps) (AdminView);
