import React from 'react';
import PropTypes from 'prop-types';
import styles from './CreateBounty.module.css';

class CreateBounty extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], formTextMission: '', formTextCoords: ''};
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>Your Bounties</h3>
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
      formTextMission: this.state.formTextMission,
      formTextCoords: this.state.formTextCoords
    };

    //insert new item, clear form text
    this.setState(state => ({
      items: state.items.concat(newItem),
      formTextMission: '',
      formTextCoords: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li>{item.formTextMission} {item.formTextCoords}</li>
        ))}
      </ul>
    );
  }
}

export default CreateBounty;
