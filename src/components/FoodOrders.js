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
    console.log(foodOrders)

    const orders = foodOrders.map((order) => <Orders key={order.id} order={order}/>)
    

    //  const giverListings = foodOrders.map((foodlisting) => <Orders key={foodlisting.id} foodlisting={foodlisting} />)

return(
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden"> 
        <Table variant="simple">
        <Thead > 
            <Tr backgroundColor='#EEF0EB'>
            <Th>Item Name</Th>
            <Th>Description</Th>
            <Th>Creator</Th>
            <Th>Location</Th>
            <Th isNumeric>Amount</Th>
            <Th>Times</Th>
            <Th>Status</Th>
            <Th>Order</Th>
            </Tr>
        </Thead>
        {orders}
        </Table>
 </Box>
)

}
export default FoodOrders