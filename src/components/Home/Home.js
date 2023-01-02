import logo from '../../monopoly.png';
import './Home.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { useSelector } from 'react-redux'



function Home() {

  const bounties = useSelector((state) => state.bounties)

  return (
      <div className="Bounties">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome, Bounty Hunter</h1>

        {bounties.map(bounty => (
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


export default Home;


