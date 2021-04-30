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
  } from "@chakra-ui/react"

function FoodListings({foodListings}) {
    console.log(foodListings)

    const giverListings = foodListings.map(foodlisting => <FoodItem key={foodlisting.name} foodlisting={foodlisting} />)

return(
<div> YOUR FOOD LISTINGS 

        <Table variant="simple">
        <Thead>
            <Tr>
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
 </div> 
)

}
export default FoodListings