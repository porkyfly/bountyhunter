import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '1100px',
  height: '500px'
};
//38.8814358283456, -77.10983118175007
const center = {
  lat: 38.8814,
  lng: -77.1098
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