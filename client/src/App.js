import React, { useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import { getEvents } from './actions/events';
import Events from './components/Events/Events';
import Form from './components/Form/Form';
import useStyles from './styles';
import { useDispatch } from 'react-redux';

import techevents from './images/techevents.png';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEvents());
    }, [dispatch])

  return (
    <Container>
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography className={classes.heading} variant="h2" align="center">TechEventsUK</Typography>
             <img className={classes.image} src={techevents} alt="events" height="60" />
        </AppBar>
        <Grow in>
            <Container>
                <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={4}>
                    <Grid item xs={12} sm={7}>
                        <Events />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form />
                    </Grid>          
                </Grid>
            </Container>
            
        </Grow>
    </Container>
  )
}

export default App