import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';
import { createSubjects, cancelToggler } from '../store/actions/subjectAction';
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

export default function AddSubjectForm({ studentId }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [state, setState] = useState({
    subject: '', //unique
    subject_score: 0,
    date: '' //string
    // student_id @params
  });
  const handleChange = name => e => {
    setState({ ...state, [name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!state.subject.length || !state.subject_score || !state.date.length) {
      toast.error('All Fields are required!');
      return;
    }
    const newSubject = {
      subject: state.subject, //unique
      subject_score: state.subject_score,
      date: state.date //string
    };
    dispatch(createSubjects(newSubject, studentId));
    // reset form
    setState({
      subject: '', //unique
      subject_score: 0,
      date: '' //string
    });
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
          <Grid item xs={3}>
            <Button className={classes.button} type="submit">
              <CheckIcon />
            </Button>
            <Button
              className={classes.button}
              onClick={() => dispatch(cancelToggler())}>
              <CloseIcon />
            </Button>
          </Grid>

          <Grid item xs={3}>
            <TextField
              id="subject"
              label="Subject"
              margin="normal"
              onChange={handleChange('subject')}
              style={{ marginRight: 15 }}
              value={state.subject}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="score"
              label="score"
              margin="normal"
              onChange={handleChange('subject_score')}
              style={{ marginRight: 15 }}
              value={state.subject_score}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="date"
              label="date"
              margin="normal"
              onChange={handleChange('date')}
              style={{ marginRight: 15 }}
              value={state.date}
            />
          </Grid>
        </form>
      </Grid>
    </>
  );
}
