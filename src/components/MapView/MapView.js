import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
import { useSelector } from 'react-redux'

const containerStyle = {
  width: '1400px',
  height: '800px'
};
const center = {
  lat: 38.8814,
  lng: -77.1098
};

function MapView() {

  const bounties = useSelector((state) => state.bounty.bounties)

  return (
      <LoadScript
      googleMapsApiKey="AIzaSyCfh41ptl9vXquEdGliKP2wuRzHP380e7s"
      >
      <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
      >
          { /* Child components, such as markers, info windows, etc. */ }
          {bounties.map(bounty => (
                <Marker
                  position={{ lat: bounty.lat, lng: bounty.long }}
                />
          ))}
      </GoogleMap>
      </LoadScript>
  )
}




export default MapView;
