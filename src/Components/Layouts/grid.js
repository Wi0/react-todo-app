import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: "150px"
  },
}));

export default function CenteredGrid( {todos} ) {
  const classes = useStyles();

  console.log(todos)

  return (
    <div className={classes.root}>
      <Grid container spacing={6}>
        {todos.map( todo =>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <Typography variant="h5" >{todo.title}</Typography>
                    <Typography>{todo.description}</Typography>
                    <Typography>{todo.category}</Typography>
                </Paper>
            </Grid>
        )}
      </Grid>
    </div>
  );
}
