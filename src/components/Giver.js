
import FoodListings from './FoodListings'
import { Box, Text } from "@chakra-ui/react"
import { useSelector } from 'react-redux'


function Giver(){
   
    const giver = useSelector(state => state.giver)

    return(
        <Box p="8">
        <Box padding="4">
            <Text fontSize="4xl">Hello, {giver.name}</Text>
        </Box> <FoodListings/> 
             
        </Box>
    )
}

export default Giver