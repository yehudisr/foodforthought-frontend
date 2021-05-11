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
import FindLongLat from './FindLongLat'
import smallicon from './smallicon.png'


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

// const locations = foodOrders.map(order => order.food_giver.location)
// console.log(locations)

// function locationDisplay(locations) { 
//     const display = locations.map(
//     location => 
//     { console.log(location)
    //   const kingston =  Geocode.fromAddress('270 Kingtson ave').then(
    //     (response) => { 
    //         console.log(response)
    //     const { lat, lng } = response.results[0].geometry.location;
    //     console.log(lat, lng);
    //        },
    //         (error) => {
    //       console.error(error);
    //     }
    //    )
//  return display
//     }
// )
// }
//   locationDisplay(locations)

// const platform = new H.service.Platform({
//   'apikey': 'process.env.REACT_APP_GOOGLE_API_KEY'
// });

// // Get an instance of the geocoding service:
// const service = platform.getSearchService();

// // Call the geocode method with the geocoding parameters,
// // the callback and an error callback function (called if a
// // communication error occurs):
// service.geocode({
//   q: '200 S Mathilda Ave, Sunnyvale, CA'
// }, (result) => {
//   // Add a marker for each location found
//   result.items.forEach((item) => {
//     map.addObject(new H.map.Marker(item.position));
//   });
// }, alert);
  
  const locations = [
    {
      name: "Basil Pizza",
      location: { 
        lat: 40.67044,
        lng: -73.94230 
      },
    },
    {
      name: "Tammam Cafe",
      location: { 
        lat: 40.67293,
        lng: -73.95021
      },
    },
    {
      name: "Mozarella",
      location: { 
        lat: 40.67049,
        lng: -73.93650
      },
    },
    {
      name: "Location 4",
      location: { 
        lat: 41.3797,
        lng: 2.1682
      },
    },
    {
      name: "Location 5",
      location: { 
        lat: 41.4055,
        lng: 2.1915
      },
    }
  ];
  

  return (

        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={13}
          center={currentPosition}
          options={options}
          onLoad={onLoad}
          onUnmount={onUnmount}
          >
          {
            locations.map(item => {
              return (
              <Marker icon={{url: smallicon}} key={item.name} position={item.location} onClick={() => onSelect(item)}/>
              )
            })
         }
         {/* <FindLongLat/> */}
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