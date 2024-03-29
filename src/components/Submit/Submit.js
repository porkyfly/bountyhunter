import React, { useState } from 'react';
import styles from './Submit.module.css';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';

import { useDispatch } from 'react-redux'
import { addBounty } from '../../bountySlice';


function Submit() {

  const dispatch = useDispatch()

  const containerStyle = {
    width: '1400px',
    height: '800px'
  };
  const center = {
    lat: 38.8814,
    lng: -77.1098
  };
  
  const [inputField, setinputField] = useState(
    {
      mission: 'sample bounty',
      amount: 1,
      lat: center.lat,
      long: center.lng,
      expiry: -1
    }
  );

  const handleInputChange = e => {
    setinputField( {
      ...inputField,
      [e.target.name]: e.target.value
    } )
    
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (inputField.mission == null || inputField.amount == null) {
      return;
    }

    //construct new props here
    const bounty = {
      mission: inputField.mission,
      amount: inputField.amount,
      lat: inputField.lat,
      long: inputField.long,
      expiry: inputField.expiry
    };

    //insert bounty into redux store
    dispatch(addBounty(bounty))

    //reset input
    setinputField( {
      lat: center.lat,
      long: center.lng,
      mission: '',
      amount: '',
      expiry: -1
    })

  }


  return (
    <div className={styles.Submit}>
      <LoadScript
      googleMapsApiKey="AIzaSyCfh41ptl9vXquEdGliKP2wuRzHP380e7s"
      >
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
            onClick={ev => {
                setinputField(
                  {
                    ...inputField,
                    lat : parseFloat(ev.latLng.lat().toFixed(4)),
                    long : parseFloat(ev.latLng.lng().toFixed(4))
                  }
                )
            }}
        >
          <Marker
            position={{ lat: parseFloat(inputField.lat), lng: parseFloat(inputField.long) }}
          />
          
        </GoogleMap>
      </LoadScript>

      <form onSubmit={handleSubmit}>
        <label>
          Mission:
          <input
            name="mission"
            onChange={handleInputChange}
            value={inputField.mission}
          />
        </label>
        <label>
          Reward
          <input
            type="number"
            name="amount"
            onChange={handleInputChange}
            value={inputField.amount}
          />
        </label>
        <label>
          Expiry
          <input
            type="number"
            name="expiry"
            onChange={handleInputChange}
            value={inputField.expiry}
          />
        </label>
        <button>
          Add Bounty
        </button>
      </form>
    </div>
  )
}



export default Submit;