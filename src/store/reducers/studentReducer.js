import { toast } from 'react-toastify';

import {
  GET_STUDENT_START,
  GET_STUDENT_SUCCESS,
  GET_STUDENT_FAILURE,
  GET_SINGLE_STUDENT_START,
  GET_SINGLE_STUDENT_SUCCESS,
  GET_SINGLE_STUDENT_FAILURE,
  CREATE_STUDENT_START,
  CREATE_STUDENT_SUCCESS,
  CREATE_STUDENT_FAILURE,
  DELETE_STUDENT_START,
  DELETE_STUDENT_SUCCESS,
  DELETE_STUDENT_FAILURE,
  STUDENT_ON_EDIT_HANDLE,
  STUDENT_CANCEL_EDIT_HANDLER,
  UPDATE_STUDENT_START,
  UPDATE_STUDENT_SUCCESS,
  UPDATE_STUDENT_FAILURE,
  ADDSTUDENTTOGGLER,
  CANCELTOGGLER
} from '../actions/studentAction';

const initialState = {
  isLoading: false,
  students: [],
  studentId: '',
  edit: false,
  toggleStudent: false,
  singleStudent: null
};

export default function studentReducer(state = initialState, action) {
  switch (action.type) {
    case GET_STUDENT_START:
      return {
        ...state,
        isLoading: true
      };

    case GET_STUDENT_SUCCESS:
      return {
        ...state,
        students: action.payload,
        isLoading: false
      };

    case GET_STUDENT_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case GET_SINGLE_STUDENT_START:
      return {
        ...state,
        isLoading: true
      };

    case GET_SINGLE_STUDENT_SUCCESS:
      return {
        ...state,
        singleStudent: action.payload,
        isLoading: false
      };

    case GET_SINGLE_STUDENT_FAILURE:
      return {
        ...state,
        isLoading: false
      };

    case CREATE_STUDENT_START:
      return {
        ...state,
        isLoading: true
      };

    case CREATE_STUDENT_SUCCESS:
      toast.success('Student was created successfully');
      return {
        ...state,
        students: action.payload,
        isLoading: false
      };

    case CREATE_STUDENT_FAILURE:
      toast.error(action.payload.message);
      return {
        ...state,
        isLoading: false
      };

    case DELETE_STUDENT_START:
      return {
        ...state,
        isLoading: true
      };

    case DELETE_STUDENT_SUCCESS:
      toast.success('Student was successfully deleted');
      return {
        ...state,
        isLoading: false,
        student: action.payload
      };

    case DELETE_STUDENT_FAILURE:
      toast.error(action.payload.message);
      return {
        ...state,
        isLoading: false
      };

    // ----------------- ON_EDIT_HANDLE ---------------
    case STUDENT_ON_EDIT_HANDLE:
      return {
        ...state,
        edit: true,
        studentId: action.studentId,
        name: action.name //title/name
      };
    // ----------------- ON_EDIT_HANDLE ---------------
    case STUDENT_CANCEL_EDIT_HANDLER:
      return {
        ...state,
        edit: false
      };
    // ----------------- ON_UPDATE_HANDLE ---------------
    case UPDATE_STUDENT_START:
      return {
        ...state,
        isLoading: true
      };

    case UPDATE_STUDENT_SUCCESS:
      toast.success('Student Name was successfully updated 👏');

      return {
        ...state,
        isLoading: false,
        edit: false,
        students: action.payload
      };

    case UPDATE_STUDENT_FAILURE:
      toast.error(`${action.payload.message} ❗️`);
      return {
        ...state,
        isLoading: false,
        edit: false
      };
    case ADDSTUDENTTOGGLER:
      return {
        ...state,
        toggleStudent: !state.toggleStudent
      };
    case CANCELTOGGLER:
      return {
        ...state,
        toggleStudent: !state.toggleStudent
      };

    default:
      return state;
  }
}
