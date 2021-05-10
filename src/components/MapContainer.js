import React from "react"
import { useState, useRef, useCallback } from 'react'
import { GoogleMap, useLoadScript, LoadScript, Marker, InfoWindow, useJsApiLoader } from '@react-google-maps/api'
import mapStyles from './mapStyles'


const libraries = ["places"];

const mapContainerStyle = {
  height: "45vh",
  width: "90vw",
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: 40.7128,
  lng: -73.935242,
};

const MapContainer = () => {

    const [selected, setSelected] = useState(false)

const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
      })

  const [map, setMap] = React.useState(null)
      const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
      }, [])
      const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])

  if (!isLoaded) return "Loading...";

//  const success = position => {
//     const currentPosition = {
//       lat: position.coords.latitude,
//       lng: position.coords.longitude
//     }
//     setCurrentPosition(currentPosition);
//   }
  
  const onSelect = item => {
    setSelected(item);
  }
  
  
//   const defaultCenter = {
//     lat: 40.7128, lng: 74.0060
//   }

  const locations = [
    {
      name: "Location 1",
      location: { 
        lat: 40.6703,
        lng: -73.9423 
      },
    },
    {
      name: "Location 2",
      location: { 
        lat: 40.6702,
        lng: -73.9363
      },
    },
    // {
    //   name: "Location 3",
    //   location: { 
    //     lat: 41.3773,
    //     lng: 2.1585
    //   },
    // },
    // {
    //   name: "Location 4",
    //   location: { 
    //     lat: 41.3797,
    //     lng: 2.1682
    //   },
    // },
    // {
    //   name: "Location 5",
    //   location: { 
    //     lat: 41.4055,
    //     lng: 2.1915
    //   },
    // }
  ];
  

  return (

        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={6}
          center={center}
          options={options}
          onLoad={onLoad}
          onUnmount={onUnmount}
          >
          {
            locations.map(item => {
              return (
              <Marker key={item.name} position={item.location} onClick={() => onSelect(item)}/>
              )
            })
         }
          {
            selected.location && 
            (
              <InfoWindow
              position={selected.location}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <p>{selected.name}</p>
            </InfoWindow>
            )
         }
        </GoogleMap>
  
  )
}
export default MapContainer;