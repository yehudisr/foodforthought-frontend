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

function FoodOrders({foodListings}) {
    console.log(foodListings)

    const giverListings = foodListings.map(foodlisting => <Orders key={foodlisting.name} foodlisting={foodlisting} />)

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