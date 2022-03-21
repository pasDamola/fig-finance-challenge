import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import moment from 'moment';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import useStyles from './styles';

const Event = ({ event }) => {
    const classes = useStyles();
    
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={event.selectedFile} title={event.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{event.title}</Typography>
        <Typography variant="body2">{moment(event.date).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        {/* <Button style={{color: 'white'}} size="small" onClick={() => {}}>
          <MoreHorizIcon fontSize="default" />
        </Button> */}
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">{`#${event.category}`}</Typography>
      </div>
      <CardContent>
      <Typography className={classes.title} variant="h5" gutterBottom>{event.description}</Typography>
      <Typography className={classes.title }  color="textSecondary" variant="h6" component="p">{event.address}</Typography>
      </CardContent>
    </Card>
  )
}

export default Event