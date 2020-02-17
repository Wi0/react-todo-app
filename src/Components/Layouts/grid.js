import React from 'react';
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

export default function CenteredGrid( {todos, category} ) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={6}>
        {todos.map( todo =>
          !category || todo.category === category ?
            <Grid item xs={3} key={todo.title}>
                <Paper className={classes.paper}>
                    <Typography variant="h5" >{todo.title}</Typography>
                    <Typography>{todo.description}</Typography>
                    <Typography>{todo.category}</Typography>
                </Paper>
            </Grid>
          : null  
        )}
      </Grid>
    </div>
  );
}
