import logo from './monopoly.png';
import './App.css';
import React, { Component } from 'react';
import Evidence from './components/Evidence/Evidence';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MyMap from './Map.js';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      bounties: [], formTextMission: '', formTextAmount: '', formTextLat: '37.7749', formTextLong: '-122.4194'};
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  containerStyle = {
    width: '800px',
    height: '600px'
  };
  
  center = {
    lat: 37.7749,
    lng: -122.4194
  };


  render() {
    return (
      <div className="App">
          <h1>Welcome, Bounty Hunter</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <h3>CHOOSE. YOUR. BOUNTY:</h3>


          <Router>
            <div>
              {/* render list */}
              <ul>
                {this.state.bounties.map(bounty => (
                  <li>
                      <Link className="App-link" to="/evidence">{bounty.mission} ${bounty.amount}</Link>
                  </li>
                ))}
              </ul>

              {/* route paths */}
              <Route path="/evidence">
                <Evidence />
              </Route>
              <Route path="/map">
                <MyMap />
              </Route>

            </div>
          </Router>

          {/* render map */}
          <MyMap bounties={this.state.bounties}/>

          
          {/* form input */}
          <form onSubmit={this.handleSubmit}>
            <input
              name="formTextMission"
              onChange={this.handleInputChange}
              value={this.state.formTextMission}
            />
            <input
              type="number"
              name="formTextAmount"
              onChange={this.handleInputChange}
              value={this.state.formTextAmount}
            />
            <input
              type="number"
              name="formTextLat"
              onChange={this.handleInputChange}
              value={this.state.formTextLat}
            />
            <input
              type="number"
              name="formTextLong"
              onChange={this.handleInputChange}
              value={this.state.formTextLong}
            />
            <button>
              Add Bounty
            </button>
          </form>


      </div>
    );
  }


  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    //edge case handling
    e.preventDefault();
    if (this.state.formTextMission.length === 0 || this.state.formTextAmount.length === 0) {
      return;
    }

    //construct new props here
    const bounty = {
      mission: this.state.formTextMission,
      amount: this.state.formTextAmount,
      lat: Number(this.state.formTextLat),
      long: Number(this.state.formTextLong),
      evidence: ''
    };

    //insert new bounty, clear form text
    this.setState(state => ({
      bounties: state.bounties.concat(bounty),
      formTextMission: '',
      formTextAmount: ''
    }));
  }

}


export default App;


