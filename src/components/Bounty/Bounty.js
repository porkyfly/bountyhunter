import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Bounty.module.css';
import { useParams } from "react-router-dom";

class Bounty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      evidence: ''
    }
  }
  //this should be the submit evidence screen
  render() {
    return (
      <div className={styles.Bounty}>
        Submit Completion Evidence Here
      </div>
    )
    
  }
}
export default Bounty;
