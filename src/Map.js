import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '800px',
  height: '600px'
};
//38.8814358283456, -77.10983118175007
const center = {
  lat: 37.7749,
  lng: -122.4194
};

function MyMap(props) {
    const [map, setMap] = React.useState(null)
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
            {props.bounties.map(bounty => (
                  <Marker
                    position={{ lat: bounty.lat, lng: bounty.long }}
                  />
            ))}
        </GoogleMap>
        </LoadScript>
  )
}

export default React.memo(MyMap)