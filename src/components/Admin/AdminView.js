import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminForm from './AdminForm';
import AdminList from './AdminList';

class AdminView extends Component {

  render() {
    return (
      <div className="App">
        <AdminForm />
        <AdminList />
      </div>
    );
  }
}

export default AdminView;
