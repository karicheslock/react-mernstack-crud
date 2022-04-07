import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';


export default function StudentTableRow({ studentObject }) {

    const deleteStudent = () => {
        axios.delete('http://localhost:4000/students/delete-student/' + studentObject._id)
            .then((res) => {
                console.log('Student successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }
    
    return (
        <tr>
            <td>{studentObject.name}</td>
            <td>{studentObject.email}</td>
            <td>{studentObject.rollno}</td>
            <td>
                <Link className="edit-link" to={"/edit-student/" + studentObject._id}>
                    Edit
                </Link>
                <Button onClick={deleteStudent} size="sm" variant="danger">Delete</Button>
            </td>
        </tr>
    );
    
}