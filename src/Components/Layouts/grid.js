import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 100,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 150
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={6}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Todo</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Todo</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Todo</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Todo</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
