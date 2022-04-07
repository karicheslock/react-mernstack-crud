import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function EditStudent({ studentObject }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [rollno, setRollNo] = useState('');

  useEffect(() => {
    axios.get('http://localhost:4000/students/edit-student/' + studentObject.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          email: res.data.email,
          rollno: res.data.rollno
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }, [studentObject.id]);

  const onChangeStudentName = (e) => {
    setName(e.target.value)
  }

  const onChangeStudentEmail = (e) => {
    setEmail(e.target.value)
  }
  const onChangeStudentRollno = (e) => {
    setRollNo(e.target.value)
  }

  let navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault()

    const newStudentObject = {
      name,
      email,
      rollno
    };


    axios.put('http://localhost:4000/students/update-student/' + studentObject.id, newStudentObject)
      .then((res) => {
        //console.log(res.data)
        console.log('Student successfully updated')
      }).catch((error) => {
        console.log(error)
      })
    // Redirect to Student List 
    navigate('/student-list');
  }

  
    return (
        <div className="form-wrapper">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="Name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={name} onChange={onChangeStudentName} />
                </Form.Group>
                <Form.Group controlId="Email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={this} onChange={onChangeStudentEmail} />
                </Form.Group>
                <Form.Group controlId="Name">
                    <Form.Label>Roll No</Form.Label>
                    <Form.Control type="text" value={rollno} onChange={onChangeStudentRollno} />
                </Form.Group>
                <Button variant="danger" size="lg" block="block" type="submit">
                    Update Student
                </Button>
            </Form>
        </div>
    );
  
}