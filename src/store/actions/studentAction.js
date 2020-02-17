import axios from 'axios';
// const URL = process.env.REACT_APP_BACKEND_URL;
const URL = 'https://tashi-be.herokuapp.com';

// -------------- GET ALL STUDENT ----------------------

export const GET_STUDENT_START = 'GET_STUDENT_START';
export const GET_STUDENT_SUCCESS = 'GET_STUDENT_SUCCESS';
export const GET_STUDENT_FAILURE = 'GET_STUDENT_FAILURE';

export const getStudent = () => dispatch => {
  dispatch({ type: GET_STUDENT_START });
  axios
    .get(`${URL}/api/students`)
    .then(res => {
      dispatch({ type: GET_STUDENT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: GET_STUDENT_FAILURE,
        payload: err.message.includes('Network Error')
          ? { message: err.message }
          : err.response.data
      });
    });
};
// -------------- GET Single STUDENT ----------------------

export const GET_SINGLE_STUDENT_START = 'GET_SINGLE_STUDENT_START';
export const GET_SINGLE_STUDENT_SUCCESS = 'GET_SINGLE_STUDENT_SUCCESS';
export const GET_SINGLE_STUDENT_FAILURE = 'GET_SINGLE_STUDENT_FAILURE';

export const getSingleStudent = id => dispatch => {
  dispatch({ type: GET_SINGLE_STUDENT_START });
  axios
    .get(`${URL}/api/students/${id}`)
    .then(res => {
      dispatch({ type: GET_SINGLE_STUDENT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: GET_SINGLE_STUDENT_FAILURE,
        payload: err.message.includes('Network Error')
          ? { message: err.message }
          : err.response.data
      });
    });
};

// -------------- POST NEW STUDENT ----------------------

export const CREATE_STUDENT_START = 'CREATE_STUDENT_START';
export const CREATE_STUDENT_SUCCESS = 'CREATE_STUDENT_SUCCESS';
export const CREATE_STUDENT_FAILURE = 'CREATE_STUDENT_FAILURE';

export const createStudent = newStudent => dispatch => {
  dispatch({ type: CREATE_STUDENT_START });
  axios
    .post(`${URL}/api/students`, newStudent)
    .then(res => {
      dispatch({ type: CREATE_STUDENT_SUCCESS, payload: res.data });
    })

    .catch(err => {
      dispatch({
        type: CREATE_STUDENT_FAILURE,
        payload: err.message.includes('Network Error')
          ? { message: err.message }
          : err.response.data
      });
    });
};

// ------------------------------------ Delete STUDENTs ------------------------------------

export const DELETE_STUDENT_START = 'DELETE_STUDENT_START';
export const DELETE_STUDENT_SUCCESS = 'DELETE_STUDENT_SUCCESS';
export const DELETE_STUDENT_FAILURE = 'DELETE_STUDENT_FAILURE';

export const deleteSTUDENT = id => dispatch => {
  dispatch({ type: DELETE_STUDENT_START });
  axios
    .delete(`${URL}/api/STUDENTs/${id}`)
    .then(res => {
      dispatch({ type: DELETE_STUDENT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: DELETE_STUDENT_FAILURE,
        payload: err.message.includes('Network Error')
          ? { message: err.message }
          : err.response.data
      });
    });
};

// UPDATES STEPS
// -------------- ON_EDIT_HANDLE TASK --------------
export const STUDENT_ON_EDIT_HANDLE = 'STUDENT_ON_EDIT_HANDLE';
export const studentOnEditHandle = (studentId, name) => {
  return {
    type: STUDENT_ON_EDIT_HANDLE,
    studentId,
    name
  };
};
// -------------- CANCEL_EDIT_HANDLER TASK --------------
export const STUDENT_CANCEL_EDIT_HANDLER = 'STUDENT_CANCEL_EDIT_HANDLER';
export const studentCancelEditHandler = () => {
  return {
    type: STUDENT_CANCEL_EDIT_HANDLER
  };
};
// -------------- ON_UPDATE_HANDLE TASK --------------

export const UPDATE_STUDENT_START = 'UPDATE_STUDENT_START';
export const UPDATE_STUDENT_SUCCESS = 'UPDATE_STUDENT_SUCCESS';
export const UPDATE_STUDENT_FAILURE = 'UPDATE_STUDENT_FAILURE';

export const studentOnUpdateHandle = (name, studentId) => dispatch => {
  dispatch({ type: UPDATE_STUDENT_START });
  axios
    .put(`${URL}/api/students/${studentId}`, { name })
    .then(res => {
      dispatch({
        type: UPDATE_STUDENT_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: UPDATE_STUDENT_FAILURE,
        payload: err.message.includes('Network Error')
          ? { message: err.message }
          : err.response.data
      });
    });
};

export const ADDSTUDENTTOGGLER = 'ADDSTUDENTTOGGLER';
export const toggleAddingStudent = () => {
  return {
    type: ADDSTUDENTTOGGLER
  };
};
export const CANCELTOGGLER = 'CANCELTOGGLER';
export const cancelToggler = () => {
  return {
    type: CANCELTOGGLER
  };
};
