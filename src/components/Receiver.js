import { useState, useEffect } from 'react'
import FoodOrders from './FoodOrders'
import { Box, Text, Heading } from "@chakra-ui/react"
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
                <Box p="4" w={{ base: "100%", sm: "80%", md: "50%" }} mb={{ base: 12, md: 0 }}> 
                <Heading 
            as="h2"
            mt={2}
            textAlign="center"
            color="#5D8074"
            fontWeight="bold"
            > Hello, {receiver.name}!
            </Heading>
            </Box>
            </Box>
                <MapContainer/>
            <Box padding="4">
                <Box p="4" w={{ base: "100%", sm: "80%", md: "50%" }} mb={{ base: 12, md: 0 }}> 
                    <Heading 
                    as="h2"
                    size="md"
                    textAlign="left"
                    color="#5D8074"
                    fontWeight="bold"
                    > Today's Food To Save
                    </Heading>
                </Box>
             </Box>
                {foodOrders.length > 0 ? <FoodOrders/> : "No Listings Today"}
        </Box>
    )
}

export default Receiver