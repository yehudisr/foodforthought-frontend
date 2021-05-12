import { useState, useEffect } from 'react'
import FoodOrders from './FoodOrders'
import { Box, Text } from "@chakra-ui/react"
import { useSelector, useDispatch } from 'react-redux'
import { setOrders } from '../redux/foodOrderSlice'
import MapContainer from './MapContainer'

function Receiver(){

    
    // const [search, setSearch] = useState('')
    const receiver = useSelector(state => state.receiver)
    const foodOrders = useSelector(state => state.foodOrder)
    const dispatch = useDispatch()

    useEffect(() => {
        fetch(`http://localhost:3000/food_listings`)
            .then(res => res.json())
            .then(data => { console.log(data)
                dispatch(setOrders(data))
            })
    }, [])

   console.log(foodOrders)

    return(
        <Box p="8">
        <Box padding="4">
            <Text fontSize="4xl">Hello, {receiver.name}!</Text>
            <MapContainer/>
            <Text fontSize="4xl"> Today's Listings </Text>
             </Box>
                {foodOrders.length > 0 ? <FoodOrders/> : "No Listings Today"}
        </Box>
    )
}

export default Receiver