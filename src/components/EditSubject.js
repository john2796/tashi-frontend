import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  subjectCancelEditHandler,
  subjectOnUpdateHandle
} from '../store/actions/subjectAction';
import { toast } from 'react-toastify';

export default function EditSubject({ studentId }) {
  const dispatch = useDispatch();
  const { subjectId, subject, date, subject_score } = useSelector(
    state => state.subjectReducer
  );

  const handleSubmit = event => {
    event.preventDefault();
    const updateSubject = event.target.updateSubject.value;
    const updatedSubjectScore = event.target.updatedSubjectScore.value;
    const updateDate = event.target.updateDate.value;
    if (!updateSubject.length) {
      toast.error('Student Name is required!');
      return;
    }
    if (!updatedSubjectScore.length) {
      toast.error('Student Name is required!');
      return;
    }
    if (!updateDate.length) {
      toast.error('Student Name is required!');
      return;
    }
    const updatedSubject = {
      subject: updateSubject,
      subject_score: Number(updatedSubjectScore),
      date: updateDate
    };
    dispatch(subjectOnUpdateHandle(updatedSubject, studentId, subjectId)); //studentId, subjectId
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="item"
          defaultValue={subject}
          name="updateSubject"
          type="text"
        />
        <input
          className="item"
          defaultValue={subject_score}
          name="updatedSubjectScore"
          type="text"
        />
        <input
          className="item"
          defaultValue={date}
          name="updateDate"
          type="text"
        />
        <button className="update-add-item" type="submit">
          Update
        </button>
        <button onClick={() => dispatch(subjectCancelEditHandler())}>
          cancel
        </button>
      </form>
    </>
  );
}
