import { useState, useEffect } from 'react';
import FoodListings from './FoodListings';
import { Box, Spacer, Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from 'react-redux';
import { setGiver } from '../redux/giverSlice.js'

function Giver(){

    const giver = useSelector(state => state.giver)
    console.log(giver)

    const [foodListings, setFoodListings] = useState([])

    const getUser = localStorage.getItem('user')
    const currentUser = JSON.parse(getUser)

    useEffect(() => {
        fetch(`http://localhost:3000/food_givers/1`)
            .then(res => res.json())
            .then(data => setFoodListings(data.food_listings))
    }, [])

    console.log(foodListings)

    return(
        <Box p="8">
        <Box padding="4">
            <Text fontSize="4xl">Hello, </Text>
             </Box>
        <FoodListings foodListings={foodListings}/>
        </Box>
    )
}

export default Giver