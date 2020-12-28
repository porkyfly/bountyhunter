import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      items: [
        {mission: 'fry egg', coords: '39.234,160.442'}
      ],
       formTextMission: '', formTextCoords: ''};
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome, Bounty Hunter</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Active bounties, 1mi radius:</h3>
          <TodoList items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <input
              name="formTextMission"
              onChange={this.handleInputChange}
              value={this.state.formTextMission}
            />
            <input
              name="formTextCoords"
              onChange={this.handleInputChange}
              value={this.state.formTextCoords}
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
    if (this.state.formTextMission.length === 0 || this.state.formTextCoords.length === 0) {
      return;
    }

    //construct new item here
    const newItem = {
      mission: this.state.formTextMission,
      coords: this.state.formTextCoords
    };

    //insert new item, clear form text
    this.setState(state => ({
      items: state.items.concat(newItem),
      formTextMission: '',
      formTextCoords: ''
    }));
  }

}

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li>{item.mission} {item.coords}</li>
        ))}
      </ul>
    );
  }
}

export default App;


