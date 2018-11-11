import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

class AdminList extends Component {

  // mounting GET response to the DOM, when rendered
  componentDidMount() {
    this.getProjects();
  };

  getProjects = () => {
    this.props.dispatch({ type: 'GET_PROJECTS'})
  }

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
              <TableCell><Button>X</Button></TableCell>
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