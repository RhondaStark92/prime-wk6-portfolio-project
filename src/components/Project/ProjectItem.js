import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const style = {
  card: {
    maxWidth: 345,
    margin: 25,
  },
  media: {
    height: 200,
  },
};

// const formattedDate = (dateIn) => {
//   return dateIn.toLocaleDateString('en-US');
// }

class ProjectItem extends Component {

  render() {
    let project = this.props.item;
    return (
      <Card style={style.card} id="card" key={project.id}>
      <CardActionArea>
        <CardMedia image={project.thumbnail} style={style.media}/>
        <CardContent>       
            <h2>{project.name}</h2>
            <p>{project.description}</p><br/>
            <p>{moment(project.date_completed).format('LL')}</p><br/>
            <p>{project.tag}</p><br/>
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