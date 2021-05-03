import FoodItem from './FoodItem';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Box, Button, Spacer, Stack
  } from "@chakra-ui/react"
  import { AddIcon } from '@chakra-ui/icons'
  import { useSelector, useDispatch } from 'react-redux'

function FoodListings() {

    const foodListings = useSelector(state => state.foodListing)
    console.log(foodListings)

    const giverListings = foodListings.map(foodlisting => <FoodItem key={foodlisting.name} foodlisting={foodlisting} />)

return(
<Box><Stack direction="row" spacing={6} align="center">
    <Button size="xs" p={4} variant="solid" bgColor="#167572" color="white"><AddIcon w={4} h={4} /></Button></Stack>
    <Box spacing={4} borderWidth="1px" borderRadius="lg" overflow="hidden"> 
        <Table variant="simple">
        <Thead > 
            <Tr backgroundColor='#EEF0EB'>
            <Th>Name</Th>
            <Th>Description</Th>
            <Th isNumeric>Amount</Th>
            <Th>Times</Th>
            <Th>Status</Th>
            <Th>Edit</Th>
            </Tr>
        </Thead>
        {giverListings}
        </Table>
 </Box>
 </Box>
)

}
export default FoodListings