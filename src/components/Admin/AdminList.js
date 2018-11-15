import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

class AdminList extends Component {

  // mounting GET response to the DOM, when rendered
  componentDidMount() {
    this.getProjects();
  };

  // get all projects
  getProjects = () => {
    this.props.dispatch({ type: 'GET_PROJECTS'})
  }

  // handle Delete click
  handleClick = (id) => {
    // confirm the deletion 
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure? This is permanent.',
      buttons: [
        {
          label: 'Delete',
          onClick: () => this.props.dispatch({ type: 'DELETE_PROJECT', payload: id})
        },
        {
          label: 'Cancel',
          onClick: () => console.log('cancelled delete do nothing.')
        }
      ]
    })// end confirmAlert
  } // end handleClick

  render() {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Project</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.reduxState.projects.map(project =>
            <TableRow key={project.id}>
              <TableCell>{project.name}</TableCell>
              <TableCell>
                <Button onClick={() => this.handleClick(project.id)}>X</Button>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    );
  } // end render
} // end AdminList class

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(AdminList);