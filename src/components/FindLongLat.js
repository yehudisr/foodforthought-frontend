import React, { useState, useEffect } from 'react';
import Geocode from 'react-geocode';
import {useSelector} from 'react-redux'
import { Marker } from '@react-google-maps/api'

export default function FindLatLong () {
const [selected, setSelected] = useState(false)
 const foodOrders = useSelector(state => state.foodOrder)

  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY) 
  Geocode.setLanguage("en")
  Geocode.setLocationType("ROOFTOP")
  Geocode.enableDebug();

  
  const locations = foodOrders.map(order => order.food_giver.location)
  const geoLocations =[]

  const [lat, setLat] = useState(0)
  const [long, setLong] = useState(0)

   const onSelect = location => {
    setSelected(location);
  }
 console.log(locations)
  useEffect(() => {
    locations.map(location => { console.log(location)
        Geocode.fromAddress(location)
        .then(response => { console.log(response)
        setLat(response.results[0].geometry.location.lat);
        setLong(response.results[0].geometry.location.lng);
        // geoLocations.push({lat, long})  
        console.log(response)
        const marker = <Marker key={response.name} position={response.location} onClick={() => onSelect(response)}/>
        geoLocations.push(marker)
        })
      
    })
    }, [])
    
  
  console.log(geoLocations)

  return(
    <>
      {/* {geoLocations} */}
      <Marker position={{lat: 40.713468006091794,
            lng: -74.0150387326917}} />
    </>
  )
}