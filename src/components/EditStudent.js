import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  studentCancelEditHandler,
  studentOnUpdateHandle
} from '../store/actions/studentAction';
import { toast } from 'react-toastify';

export default function EditStudent() {
  const dispatch = useDispatch();
  const { name, studentId } = useSelector(state => state.studentReducer);

  const handleSubmit = event => {
    event.preventDefault();
    const updatedItem = event.target.updatedItem.value;
    if (!updatedItem.length) {
      toast.error('Student Name is required!');

      return;
    }
    dispatch(studentOnUpdateHandle(updatedItem, studentId));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="item"
          defaultValue={name}
          name="updatedItem"
          type="text"
        />
        <button className="update-add-item" type="submit">
          Update
        </button>
        <button onClick={() => dispatch(studentCancelEditHandler())}>
          cancel
        </button>
      </form>
    </>
  );
}
