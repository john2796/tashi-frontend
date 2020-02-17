import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AddSubjectForm from './AddSubjectForm';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import EditIcon from '@material-ui/icons/Edit';
import { useSelector } from 'react-redux';
import {
  getSubject,
  toggleAddingSubject,
  subjectOnEditHandle,
  deleteSubject
} from '../store/actions/subjectAction';
import { getSingleStudent } from '../store/actions/studentAction';
import { useDispatch } from 'react-redux';
import EditSubject from './EditSubject';
import { useParams } from 'react-router-dom';
import BackropLoader from './BackdropLoader';
import DeleteIcon from '@material-ui/icons/Delete';
const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  calendarIcon: {
    width: '2rem',
    height: '2rem',
    cursor: 'pointer'
  }
});
// 12/23/2019 10:00 AM ET
export default function SubjectContaer() {
  const classes = useStyles();
  const { subjects, edit, subjectId, toggleSubject, isLoading } = useSelector(
    state => state.subjectReducer
  );
  let { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSubject(id));
    dispatch(getSingleStudent(id));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Subject</TableCell>
            <TableCell>Score</TableCell>
            <TableCell>Test Date</TableCell>
            <TableCell>
              Actions
              <span
                onClick={() => dispatch(toggleAddingSubject())}
                style={{
                  // fontSize: '2rem',
                  marginLeft: '1rem',
                  color: 'lightgreen',
                  cursor: 'pointer',
                  position: 'relative',
                  top: '7px'
                }}>
                <AddCircleIcon />
              </span>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {subjects.map(subject => {
            return (
              <TableRow key={subject.id}>
                <TableCell>{subject.id}</TableCell>
                <TableCell>
                  {edit === true && subjectId === subject.id ? (
                    <EditSubject studentId={id} />
                  ) : (
                    <div>{subject.subject}</div>
                  )}
                </TableCell>
                <TableCell>{subject.subject_score}</TableCell>
                <TableCell>{subject.date}</TableCell>
                <TableCell>
                  <span
                    style={{
                      fontSize: '20px',
                      cursor: 'pointer',
                      color: '#00000070'
                    }}>
                    <EditIcon
                      onClick={() => dispatch(subjectOnEditHandle(subject))}
                      style={{ marginRight: '1rem' }}
                    />
                    <DeleteIcon
                      onClick={() => {
                        if (
                          window.confirm(
                            'Are you sure you want to permanently remove this item ?'
                          )
                        ) {
                          dispatch(deleteSubject(id, subject.id));
                        }
                      }}
                    />
                  </span>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      {/* Only show Add new Subject form after toggling green button */}
      {toggleSubject && <AddSubjectForm studentId={id} />}
      <BackropLoader loading={isLoading} />
    </TableContainer>
  );
}
