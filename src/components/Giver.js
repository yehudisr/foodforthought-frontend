import { useState, useEffect } from 'react';
import FoodListings from './FoodListings';
import { Box, Spacer, Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from 'react-redux';
import { setGiver } from '../redux/giverSlice.js'

function Giver(){
   
    const giver = useSelector(state => state.giver)
    console.log(giver)
   
    // const getUser = localStorage.getItem('user')
    // const currentUser = JSON.parse(getUser)



    return(
        <Box p="8">
        <Box padding="4">
            <Text fontSize="4xl">Hello, {giver.name}</Text>
             </Box>
        <FoodListings/>
        </Box>
    )
}

export default Giver