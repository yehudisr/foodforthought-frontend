import { useState, useEffect } from 'react';
import FoodOrders from './FoodOrders';
import { Box, Spacer, Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from 'react-redux'

function Receiver(){

    const [foodListings, setFoodListings] = useState([])
    const receiver = useSelector(state => state.receiver)
    // const getUser = localStorage.getItem('user')
    // const currentUser = JSON.parse(getUser)

    useEffect(() => {
        fetch(`http://localhost:3000/food_listings`)
            .then(res => res.json())
            .then(setFoodListings)
    }, [])

    console.log(foodListings)

    return(
        <Box p="8">
        <Box padding="4">
            <Text fontSize="4xl">Hello, {receiver.name} </Text>
             </Box>
        <FoodOrders foodListings={foodListings}/>
        </Box>
    )
}

export default Receiver