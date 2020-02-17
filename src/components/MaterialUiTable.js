import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AddStudentForm from './AddStudentForm';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import EditIcon from '@material-ui/icons/Edit';
import { useSelector } from 'react-redux';
import {
  studentOnEditHandle,
  toggleAddingStudent
} from '../store/actions/studentAction';
import { useDispatch } from 'react-redux';
import EditStudent from './EditStudent';
import calendarIcon from '../assets/calendar-10-512.png';
import { withRouter } from 'react-router-dom';

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

function MaterialUiTable(props) {
  const classes = useStyles();
  const { students, edit, studentId, toggleStudent } = useSelector(
    state => state.studentReducer
  );
  const dispatch = useDispatch();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Subjects</TableCell>
            <TableCell>Avg. Score</TableCell>
            <TableCell>
              Actions
              <span
                onClick={() => dispatch(toggleAddingStudent())}
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
          {students.map(student => {
            return (
              <TableRow key={student.id}>
                <TableCell>{student.id}</TableCell>
                <TableCell>
                  {edit === true && studentId === student.id ? (
                    <EditStudent />
                  ) : (
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}>
                      {student.name}
                      <span
                        onClick={() =>
                          dispatch(
                            studentOnEditHandle(student.id, student.name)
                          )
                        }
                        style={{
                          fontSize: '20px',
                          paddingLeft: '5rem',
                          cursor: 'pointer',
                          color: '#00000070'
                        }}>
                        <EditIcon />
                      </span>
                    </div>
                  )}
                </TableCell>
                <TableCell>{student.subject_count}</TableCell>
                <TableCell>{student.score_average}</TableCell>
                <TableCell>
                  {/* <EventNoteIcon /> */}
                  <img
                    alt="calendar icon"
                    className={classes.calendarIcon}
                    onClick={() => {
                      props.history.push(`/dashboard/subject/${student.id}`);
                    }}
                    src={calendarIcon}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      {/* Only show Add new Student form after toggling green button */}
      {toggleStudent && <AddStudentForm />}
    </TableContainer>
  );
}
export default withRouter(MaterialUiTable);
