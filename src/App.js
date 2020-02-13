import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import Header from './Components/Layouts/header'
import Footer from './Components/Layouts/footer'
import GridTodo from './Components/Layouts/grid'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "100px",
    height: "100%",
    width: "90%",
    
  },
  paper: {
    height: "100%",
  }
}));

function App() {

  const classes = useStyles();

  return (
    <div className="App">
      <Header></Header>
      <div className={classes.root}>
        <Grid container spacing={6}>
          <Grid item xs={6}>
            <GridTodo></GridTodo>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>Hello</Paper>
          </Grid>
        </Grid>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
