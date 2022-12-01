import logo from '../../monopoly.png';
import './Home.css';
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Home extends Component {

  constructor(props) {
    super(props);
    this.data = props.data
  }


  render() {
    return (
      <div className="Bounties">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome, Bounty Hunter</h1>

        {this.data.map(bounty => (
          <Card>
            <Card.Body>
              <Card.Title>{bounty.expiry} min</Card.Title>
              <Card.Text>
                {bounty.mission} ${bounty.amount}
              </Card.Text>
              <Button variant="primary">Collect</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }


}


export default Home;


