import Orders from './Orders';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Box
  } from "@chakra-ui/react"
  import { useSelector, useDispatch } from 'react-redux'

function FoodOrders() {
    // console.log(foodListingsState)

    const foodOrders = useSelector(state => state.foodOrder)

     const giverListings = foodOrders.map(foodlisting => <Orders key={foodlisting.id} foodlisting={foodlisting} />)

return(
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden"> 
        <Table variant="simple">
        <Thead > 
            <Tr backgroundColor='#EEF0EB'>
            <Th>Name</Th>
            <Th>Description</Th>
            <Th>Location</Th>
            <Th isNumeric>Amount</Th>
            <Th>Times</Th>
            <Th>Status</Th>
            <Th>Order</Th>
            </Tr>
        </Thead>
        {giverListings}
        </Table>
 </Box>
)

}
export default FoodOrders