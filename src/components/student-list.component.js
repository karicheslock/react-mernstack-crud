import React, { useState, useEffect } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import StudentTableRow from './StudentTableRow';

const _ = require('lodash');

export default function StudentList() {
    const[students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/students/')
      .then(res => {
        setStudents([
            res.data
        ]);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);


  let newStudentArray = _.flatten(students);
  //console.log(newStudentArray);

//   const DataTable = () => {
//       newStudentArray.map((res, i) => {
//           return <StudentTableRow obj={res} key={i} />
//       })
//   }

// newStudentArray.map((student) => {
//     console.log(student.name)
// })

  const data = () => {
    {newStudentArray.map((student) => {
        //console.log(student)
        return(
            <StudentTableRow studentObject={student} />
        )
        
    })}
  }



    return (
        <div className="table-wrapper">
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Roll No</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {data()}
                </tbody>
            </Table>
    </div>
    );
}