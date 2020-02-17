import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';
import { createStudent, cancelToggler } from '../store/actions/studentAction';
import { toast } from 'react-toastify';

const useStyles = makeStyles(theme => ({
  textField: {
    width: '100%'
  },
  formControl: {
    minWidth: '100%'
  },
  formContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  button: {
    marginTop: '-25px'
  }
}));

export default function AddStudentForm() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [state, setState] = useState({
    name: ''
  });
  const handleChange = name => e => {
    setState({ ...state, [name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!state.name.length) {
      toast.error('Student Name is required!');
      return;
    }
    const newStudent = {
      name: state.name
    };
    dispatch(createStudent(newStudent));
    // reset form
    setState({ name: '' });
  };
  return (
    <>
      <Grid
        alignItems="flex-start"
        container
        direction="row"
        justify="flex-start">
        <form
          autoComplete="off"
          className={classes.formContainer}
          noValidate
          onSubmit={handleSubmit}>
          <Grid item xs={6}>
            <Button className={classes.button} type="submit">
              <CheckIcon />
            </Button>
            <Button
              className={classes.button}
              onClick={() => dispatch(cancelToggler())}>
              <CloseIcon />
            </Button>
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="student-name"
              label="Name"
              margin="normal"
              onChange={handleChange('name')}
              value={state.name}
            />
          </Grid>
        </form>
      </Grid>
    </>
  );
}
