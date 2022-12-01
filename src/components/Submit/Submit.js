import React, { Component } from 'react';
import styles from './Submit.module.css';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';

class Submit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bounties: [],
      formTextMission: '',
      formTextAmount: '',
      formTextLat: '38.8814',
      formTextLong: '-77.1098'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  containerStyle = {
    width: '1400px',
    height: '800px'
  };
  center = {
    lat: 38.8814,
    lng: -77.1098
  };
  
  render() {
    return (
      <div className={styles.Submit}>

        <LoadScript
        googleMapsApiKey="AIzaSyCfh41ptl9vXquEdGliKP2wuRzHP380e7s"
        >
          <GoogleMap
              mapContainerStyle={this.containerStyle}
              center={this.center}
              zoom={15}
              onClick={ev => {
                this.setState({
                  formTextLat : ev.latLng.lat(),
                  formTextLong : ev.latLng.lng()
                })
              }}
          >
            <Marker
              position={{ lat: this.state.formTextLat, lng: this.state.formTextLong }}
            />
            
          </GoogleMap>
        </LoadScript>


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
    )
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
    };

    //insert new bounty, clear form text
    this.setState(state => ({
      bounties: state.bounties.concat(bounty),
      formTextMission: '',
      formTextAmount: ''
    }));
  }

}


export default Submit;


