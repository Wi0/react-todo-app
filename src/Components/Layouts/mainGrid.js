import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GridTodo from './grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: "100%"
  },
}));

export default function CenteredGrid( {todos} ) {
  const classes = useStyles();

  return (

    <div className={classes.root}>
      <Grid container spacing={6}>
            <Grid item xs={9}>
                <GridTodo todos={todos}></GridTodo>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>Todo</Paper>
            </Grid>
        </Grid>
    </div>
  );
}