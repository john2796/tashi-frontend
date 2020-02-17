import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const NavGridStyle = styled.div`
  color: black;
  display: flex;
  .studentsBorder {
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    padding: 6px;
    border-right: none;
    margin-bottom: -1px;
  }
  .studentsBorder .value {
    text-align: center;
    margin-top: 10px;
  }
  #customers {
    font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
    color: black;
    font-size: 13px;
    text-align: center;
  }
  #customers td,
  #customers th {
    border: 1px solid black;
    padding: 8px;
  }

  #customers th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    color: black;
  }
  .val {
    min-width: 4rem;
  }
`;

export default function NavbarGrid() {
  const { students, singleStudent } = useSelector(
    state => state.studentReducer
  );

  return (
    <NavGridStyle className="grid">
      <div className="studentsBorder">
        <span>Students</span>
        <span className="value">{students && students.length}</span>
      </div>
      <table id="customers">
        <tr>
          <td>selected</td>
          <td className="val">{singleStudent && singleStudent.name}</td>
        </tr>
        <tr>
          <td>subjects</td>
          <td className="val">
            {singleStudent && singleStudent.subject_count}
          </td>
        </tr>
        <tr>
          <td>average</td>
          <td className="val">
            {singleStudent && singleStudent.score_average}
          </td>
        </tr>
      </table>
    </NavGridStyle>
  );
}
