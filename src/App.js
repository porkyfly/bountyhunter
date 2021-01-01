import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Bounty from './components/Bounty/Bounty';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      bounties: [], formTextMission: '', formTextAmount: ''};
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome, Bounty Hunter</h1>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h3>Active bounties, 1mi radius:</h3>


          <Router>
            <div>
              {/* render list */}
              <ul>
                {this.state.bounties.map(bounty => (
                  <li>
                      <Link className="App-link" to="/bounty">{bounty.mission} {bounty.amount}</Link>
                  </li>
                ))}
              </ul>

              <Route path="/bounty">
                <Bounty />
              </Route>

            </div>
          </Router>
          


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
            <button>
              Add Bounty
            </button>
          </form>


        </header>
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


