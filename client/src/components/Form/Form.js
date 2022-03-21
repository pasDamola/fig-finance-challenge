import React, { useState, useEffect } from 'react';
import { Select, MenuItem, Typography, Paper, FormControl, InputLabel, CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getEventsByCategory } from '../../actions/events';


import useStyles from './styles';


const Form = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleFilter = (e) =>  {

    dispatch(getEventsByCategory(e.target.value))
  }


  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}>
        <Typography variant="h6">Filter Events based on category</Typography>


        <FormControl className={classes.inputControl} fullWidth>
          <InputLabel>Category</InputLabel>
          <Select onChange={handleFilter}>
            <MenuItem value="Blockchain">Blockchain</MenuItem>
            <MenuItem value="Web Application">Web Application</MenuItem>
            <MenuItem value="Security">Security</MenuItem>
            <MenuItem value="Artificial Intelligence">Artificial Intelligence</MenuItem>
          </Select>
      </FormControl>
      </form>
    </Paper>
  );
}

export default Form