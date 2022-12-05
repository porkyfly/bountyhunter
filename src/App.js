import logo from './monopoly.png';
import './App.css';
import React, { Component } from 'react';
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

class App extends Component {

  startingBounties =
  [
    {
      mission: "buy me a mcrib",
      amount: 420,
      lat: 38.8824,
      long: -77.1078,
      expiry: 2
    },
    {
      mission: "let me pee in your bathroom",
      amount: 5,
      lat: 38.8844,
      long: -77.1072,
      expiry: 5
    },
    {
      mission: "take a pic of the street parking situation",
      amount: 2,
      lat: 38.8874,
      long: -77.1062,
      expiry: 15
    }
  ]

  arr = [1,2,3,4]


  render() {
    return (
      <div className="App">

        <Routes>
          <Route path="/home" element={<Home data={this.startingBounties} />} />
          <Route path="/map" element={<MapView data={this.startingBounties} />} />
          <Route path="/submit" element={<Submit data={this.startingBounties} />} />
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




}


export default App;


