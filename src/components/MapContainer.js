import React from "react"
import { useState, useRef, useCallback, useEffect } from 'react'
import { GoogleMap, useLoadScript, LoadScript, Marker, InfoWindow, useJsApiLoader } from '@react-google-maps/api'
import mapStyles from './mapStyles'
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete'
import Geocode from "react-geocode"
import {useSelector} from 'react-redux'


const libraries = ["places"]

const mapContainerStyle = {
  height: "45vh",
  width: "90vw",
}
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
}
const center = {
  lat: 40.7128,
  lng: -73.935242,
}

const MapContainer = () => {
const foodOrders = useSelector(state => state.foodOrder)
const [selected, setSelected] = useState(false)
const [ currentPosition, setCurrentPosition ] = useState({});

const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
      })

  const success = position => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    setCurrentPosition(currentPosition);
  };
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
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

  if (!isLoaded) return "Loading..."

  
  
  const onSelect = item => {
    setSelected(item);
  }

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY)

const locations = foodOrders.map(order => order.food_giver.location)

function locationDisplay(locations) { 
    locations.map(
    location => 
    { console.log(location)
        Geocode.fromAddress(location).then(
        (response) => { 
            console.log(response)
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
           },
            (error) => {
          console.error(error);
        }
       )
    }
//  return { lat, lng }
)
}
//   locationDisplay(locations)
  
//   const locations = [
//     {
//       name: "Location 1",
//       location: { 
//         lat: 40.6703,
//         lng: -73.9423 
//       },
//     },
//     {
//       name: "Location 2",
//       location: { 
//         lat: 40.6702,
//         lng: -73.9363
//       },
//     },
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
//   ];
  

  return (

        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={11}
          center={currentPosition}
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