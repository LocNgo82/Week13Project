
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// create a navigation bar using react-bootstrap
export default class Nav_Bar extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Week13</Nav.Link>
                    <Nav.Link href="#link">About me</Nav.Link>
                    
                </Nav>
                </Navbar.Collapse>
      
            </Navbar>
        );
        
    }
}