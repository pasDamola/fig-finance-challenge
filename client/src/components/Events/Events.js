import { CircularProgress, Grid } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';


import Event from './Event/Event';
import useStyles from './styles';

const Events = () => {
  const events = useSelector((state) => state.events);
  const classes = useStyles();

  return (
      events.length > 0 ? (
        <Grid className={classes.container} container alignItems="stretch" spacing="3">
          {
            events.map((event) =>(
              <Grid key={event._id} item xs={12} sm={6}>
                <Event event={event} />
              </Grid>
            ))
          }
        </Grid>
      ) : <CircularProgress />
  )
}

export default Events