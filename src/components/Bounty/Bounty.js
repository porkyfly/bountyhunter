import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Bounty.module.css';

class Bounty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mission: props.mission,
      coords: props.coords,
      evidence: ''
    }
  }
  //this should be the submit evidence screen
  render() {
    return (
      <div className={styles.Bounty}>
        {this.state.mission} {this.state.coords}
        Submit Evidence Here
      </div>
    )
    
  }
}
export default Bounty;
