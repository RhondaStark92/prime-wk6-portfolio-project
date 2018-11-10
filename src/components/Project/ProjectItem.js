import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const style = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
};

class ProjectItem extends Component {

  render() {
    let project = this.props.item;
    return (
      <Card style={style.card} id="card" key={project.id}>
      <CardActionArea>
        <CardMedia image={project.thumbnail} style={style.media}/>
        <CardContent>       
          <Typography id="TableBody" key={project.id}>
            {/* <img src={project.thumbnail}/> */}
            {project.name}<br/>
            {project.description}<br/>
            {project.date_completed}<br/>
            {project.tag_id}<br/>
            </Typography> 
            <Button target="_blank" href={project.github}>
                GitHub
            </Button>
            <Button target="_blank" href={project.website}>
                Website
            </Button>
          </CardContent>
        </CardActionArea>
      </Card> 
    )
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(ProjectItem);