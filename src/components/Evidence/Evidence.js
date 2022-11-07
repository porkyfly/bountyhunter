import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";

class Evidence extends Component {
  constructor(props) {
    super(props);
    this.state = {
      evidence: ''
    }
  }



  //this should be the submit evidence screen
  render() {
    return (
      <div>
        Submit Completion Evidence Here
      </div>
    )
    
  }
}
export default Evidence;
