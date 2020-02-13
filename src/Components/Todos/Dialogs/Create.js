import React, { Component ,Fragment } from './node_modules/react';
import Button from './node_modules/@material-ui/core/Button';
import TextField from './node_modules/@material-ui/core/TextField';
import Dialog from './node_modules/@material-ui/core/Dialog';
import DialogActions from './node_modules/@material-ui/core/DialogActions';
import DialogContent from './node_modules/@material-ui/core/DialogContent';
import DialogContentText from './node_modules/@material-ui/core/DialogContentText';
import DialogTitle from './node_modules/@material-ui/core/DialogTitle';
import AddIcon from './node_modules/material-ui-icons/Add'

export default class extends Component {

  state = {
    open: false
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }


  render(){

    const { open } = this.state
    return 
    <Fragment>
    <Button varient="fab" color="primary" onClick={this.handleToggle} mini>
      <AddIcon></AddIcon>  
    </Button>

  <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">
        Create a new todo
    </DialogTitle>
    <DialogContent>
      <DialogContentText>
        Please fill out form below.
      </DialogContentText>
      <TextField
        autoFocus
        margin="dense"
        id="name"
        label="todo"
        type="text"
        fullWidth
      />
    </DialogContent>
    <DialogActions>
      <Button color="primary">
        Create
      </Button>
    </DialogActions>
  </Dialog>
</Fragment>
  }
}
  
