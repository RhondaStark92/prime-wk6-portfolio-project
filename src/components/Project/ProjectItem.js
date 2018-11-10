import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class ProjectItem extends Component {

  render() {
    let project = this.props.item;
    return (
      <Card id="card" key={project.id}>
        <CardContent>       
          <Typography id="TableBody" key={project.id}>
            {/* <img src={fav.url}/> */}
            {project.name}<br/>
            {project.description}<br/>
            {project.thumbnail}<br/>
            {project.github}<br/>
            {project.website}<br/>
            {project.date_completed}<br/>
            {project.tag_id}<br/>
            </Typography> 
        </CardContent>
      </Card> 
    )
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(ProjectItem);