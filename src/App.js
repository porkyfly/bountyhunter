import logo from './monopoly.png';
import './App.css';
import React from 'react';
import {
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MapView from './components/MapView/MapView';
import Submit from './components/Submit/Submit';
import Home from './components/Home/Home';

function App() {

  return (
    <div className="App">

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/map" element={<MapView />} />
        <Route path="/submit" element={<Submit />} />
      </Routes>


      <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            BountyHunter
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/map">Map View</Nav.Link>
            <Nav.Link href="/submit">Drop a Bounty</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </div>
  );

}



export default App;


