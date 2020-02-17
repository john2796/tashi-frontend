import axios from 'axios';
import { getStudent } from './studentAction';
// const URL = process.env.REACT_APP_BACKEND_URL;
const URL = 'https://tashi-be.herokuapp.com';

// -------------- GET ALL SUBJECT ----------------------

export const GET_SUBJECT_START = 'GET_SUBJECT_START';
export const GET_SUBJECT_SUCCESS = 'GET_SUBJECT_SUCCESS';
export const GET_SUBJECT_FAILURE = 'GET_SUBJECT_FAILURE';

export const getSubject = id => dispatch => {
  dispatch({ type: GET_SUBJECT_START });
  axios
    .get(`${URL}/api/subjects/${id}`)
    .then(res => {
      dispatch({ type: GET_SUBJECT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: GET_SUBJECT_FAILURE,
        payload: err.message.includes('Network Error')
          ? { message: err.message }
          : err.response.data
      });
    });
};

// -------------- POST NEW SUBJECT ----------------------

export const CREATE_SUBJECT_START = 'CREATE_SUBJECT_START';
export const CREATE_SUBJECT_SUCCESS = 'CREATE_SUBJECT_SUCCESS';
export const CREATE_SUBJECT_FAILURE = 'CREATE_SUBJECT_FAILURE';

export const createSubjects = (newSubjects, studentId) => dispatch => {
  dispatch({ type: CREATE_SUBJECT_START });
  axios
    .post(`${URL}/api/subjects/${studentId}`, newSubjects)
    .then(res => {
      dispatch({ type: CREATE_SUBJECT_SUCCESS, payload: res.data });
    })
    .then(() => getStudent()(dispatch))

    .catch(err => {
      dispatch({
        type: CREATE_SUBJECT_FAILURE,
        payload: err.message.includes('Network Error')
          ? { message: err.message }
          : err.response.data
      });
    });
};

// ------------------------------------ Delete subjects ------------------------------------

export const DELETE_SUBJECT_START = 'DELETE_SUBJECT_START';
export const DELETE_SUBJECT_SUCCESS = 'DELETE_SUBJECT_SUCCESS';
export const DELETE_SUBJECT_FAILURE = 'DELETE_SUBJECT_FAILURE';

export const deleteSubject = (studentId, subjectId) => dispatch => {
  dispatch({ type: DELETE_SUBJECT_START });
  axios
    .delete(`${URL}/api/subjects/${studentId}/${subjectId}`)
    .then(res => {
      dispatch({ type: DELETE_SUBJECT_SUCCESS, payload: res.data });
    })
    .then(() => getStudent()(dispatch))

    .catch(err => {
      dispatch({
        type: DELETE_SUBJECT_FAILURE,
        payload: err.message.includes('Network Error')
          ? { message: err.message }
          : err.response.data
      });
    });
};

// UPDATES STEPS
// -------------- ON_EDIT_HANDLE TASK --------------
export const SUBJECT_ON_EDIT_HANDLE = 'SUBJECT_ON_EDIT_HANDLE';
export const subjectOnEditHandle = subject => {
  return {
    type: SUBJECT_ON_EDIT_HANDLE,
    subject
  };
};
// -------------- CANCEL_EDIT_HANDLER TASK --------------
export const SUBJECT_CANCEL_EDIT_HANDLER = 'SUBJECT_CANCEL_EDIT_HANDLER';
export const subjectCancelEditHandler = () => {
  return {
    type: SUBJECT_CANCEL_EDIT_HANDLER
  };
};
// -------------- ON_UPDATE_HANDLE TASK --------------

export const UPDATE_SUBJECT_START = 'UPDATE_SUBJECT_START';
export const UPDATE_SUBJECT_SUCCESS = 'UPDATE_SUBJECT_SUCCESS';
export const UPDATE_SUBJECT_FAILURE = 'UPDATE_SUBJECT_FAILURE';

export const subjectOnUpdateHandle = (
  updatedSubject,
  studentId,
  subjectId
) => dispatch => {
  dispatch({ type: UPDATE_SUBJECT_START });
  axios
    .put(`${URL}/api/subjects/${studentId}/${subjectId}`, updatedSubject)
    .then(res => {
      dispatch({
        type: UPDATE_SUBJECT_SUCCESS,
        payload: res.data
      });
    })
    .then(() => getStudent()(dispatch))

    .catch(err => {
      dispatch({
        type: UPDATE_SUBJECT_FAILURE,
        payload: err.message.includes('Network Error')
          ? { message: err.message }
          : err.response.data
      });
    });
};

export const ADDSUBJECTTOGGLER = 'ADDSUBJECTTOGGLER';
export const toggleAddingSubject = () => {
  return {
    type: ADDSUBJECTTOGGLER
  };
};
export const CANCELTOGGLER = 'CANCELTOGGLER';
export const cancelToggler = () => {
  return {
    type: CANCELTOGGLER
  };
};
