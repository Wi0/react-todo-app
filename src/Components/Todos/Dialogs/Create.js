import React, {Fragment, Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

export default class extends Component {
  state = {
    open: false,
    todo: {
      title: '',
      description: '',
      category: ''
    }
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
    this.clearState();
  }

  handleChange = name => ({ target: { value } }) => {
    this.setState({
      todo: {
        ...this.state.todo,
        [name]: value
      }
    })
  }

  handleSubmit = () => {
    const { todo } = this.state;
    this.handleToggle();
    console.log(todo);
    this.props.onCreate(todo);
    this.clearState();
  }

  clearState = () => {
    this.setState({
      todo: {
        title: '',
        description: '',
        category: ''
      }
    })
  }

  render () {
    const { todo: { title, description, category } } = this.state
      
  return (
    <Fragment>
      <Button color="inherit" onClick={this.handleToggle}>
        <AddCircleOutlineIcon fontSize="large" />
      </Button>
      <Dialog open={this.state.open} onClose={this.handleToggle} onSubmit={this.handleSubmit} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create New Todo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill out the form with your new todo!
          </DialogContentText>
          <form>
            <TextField
              autoFocus
              margin="dense"
              value={title}
              label="Title"
              type="text"
              fullWidth
              onChange={this.handleChange('title')}
            />
            <TextField
            margin="dense"
            value={description}
            label="Description"
            type="text"
            fullWidth
            multiline
            rows="4"
            onChange={this.handleChange('description')}
            />
            <FormControl className="create-select">
              <InputLabel>Category</InputLabel>
              <Select
                value={category}
                onChange={this.handleChange('category')}
                className="create-select"
              >
                <MenuItem value="urgent">urgent</MenuItem>
                <MenuItem value="soon">soon</MenuItem>
                <MenuItem value="whenever">whenever</MenuItem>
              </Select>
            </FormControl> 
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleToggle} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleSubmit} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
  }
}
  
