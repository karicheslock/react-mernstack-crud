import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreateStudent from "./components/create-student.component";
import EditStudent from "./components/edit-student.component";
import StudentList from "./components/student-list.component";

function App() {
  return (
    <div>
      <Router>
        <header className="App-header">
          <Navbar bg='dark' variant='dark'>
            <Container>
              <Navbar.Brand>
                <Link to={'/create-student'} className='nav-link'>
                  React MERN Stack App
                </Link>
              </Navbar.Brand>
              <Nav className='justify-content-end'>
                <Nav>
                  <Link to={'/create-student'} className='nav-link'>
                    Create Student
                  </Link>
                </Nav>
                <Nav>
                  <Link to={'/student-list'} className='nav-link'>
                    Student List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route 
                    exact
                    path='/'
                    element={<CreateStudent />}
                  />
                  <Route 
                    exact
                    path='/create-student'
                    element={<CreateStudent />}
                  />
                  <Route 
                    exact
                    path='/edit-student/:id'
                    element={<EditStudent />}
                  />
                  <Route 
                    exact
                    path='student-list'
                    element={<StudentList />}
                  />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>     
    </div>
  );
}

export default App;
