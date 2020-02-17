import { toast } from 'react-toastify';

import {
  GET_SUBJECT_START,
  GET_SUBJECT_SUCCESS,
  GET_SUBJECT_FAILURE,
  CREATE_SUBJECT_START,
  CREATE_SUBJECT_SUCCESS,
  CREATE_SUBJECT_FAILURE,
  DELETE_SUBJECT_START,
  DELETE_SUBJECT_SUCCESS,
  DELETE_SUBJECT_FAILURE,
  SUBJECT_ON_EDIT_HANDLE,
  SUBJECT_CANCEL_EDIT_HANDLER,
  UPDATE_SUBJECT_START,
  UPDATE_SUBJECT_SUCCESS,
  UPDATE_SUBJECT_FAILURE,
  ADDSUBJECTTOGGLER,
  CANCELTOGGLER
} from '../actions/subjectAction';

const initialState = {
  isLoading: false,
  subjects: [],
  subjectId: '',
  edit: false,
  toggleSubject: false
};

export default function subjectReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SUBJECT_START:
      return {
        ...state,
        isLoading: true
      };

    case GET_SUBJECT_SUCCESS:
      return {
        ...state,
        subjects: action.payload,
        isLoading: false
      };

    case GET_SUBJECT_FAILURE:
      return {
        ...state,
        isLoading: false
      };

    case CREATE_SUBJECT_START:
      return {
        ...state,
        isLoading: true
      };

    case CREATE_SUBJECT_SUCCESS:
      toast.success('SUBJECT was created successfully');
      return {
        ...state,
        subjects: action.payload,
        isLoading: false
      };

    case CREATE_SUBJECT_FAILURE:
      toast.error(action.payload.message);
      return {
        ...state,
        isLoading: false
      };

    case DELETE_SUBJECT_START:
      return {
        ...state,
        isLoading: true
      };

    case DELETE_SUBJECT_SUCCESS:
      toast.success('SUBJECT was successfully deleted');
      return {
        ...state,
        isLoading: false,
        subjects: action.payload
      };

    case DELETE_SUBJECT_FAILURE:
      toast.error(action.payload.message);
      return {
        ...state,
        isLoading: false
      };

    // ----------------- ON_EDIT_HANDLE ---------------
    case SUBJECT_ON_EDIT_HANDLE:
      return {
        ...state,
        edit: true,
        subjectId: action.subject.id,
        subject: action.subject.subject,
        date: action.subject.date,
        subject_score: action.subject.subject_score
      };
    // ----------------- ON_EDIT_HANDLE ---------------
    case SUBJECT_CANCEL_EDIT_HANDLER:
      return {
        ...state,
        edit: false
      };
    // ----------------- ON_UPDATE_HANDLE ---------------
    case UPDATE_SUBJECT_START:
      return {
        ...state,
        isLoading: true
      };

    case UPDATE_SUBJECT_SUCCESS:
      toast.success('SUBJECT Name was successfully updated 👏');

      return {
        ...state,
        isLoading: false,
        edit: false,
        subjects: action.payload
      };

    case UPDATE_SUBJECT_FAILURE:
      toast.error(`${action.payload.message} ❗️`);
      return {
        ...state,
        isLoading: false,
        edit: false
      };
    case ADDSUBJECTTOGGLER:
      return {
        ...state,
        toggleSubject: !state.toggleSubject
      };
    case CANCELTOGGLER:
      return {
        ...state,
        toggleSubject: !state.toggleSubject
      };
    default:
      return state;
  }
}
