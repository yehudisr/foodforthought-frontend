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
  
function FoodItem({foodlisting}) {

    console.log(foodlisting)

    return(
       <>

    <Tbody>
    <Tr>
      <Td>{foodlisting.name}</Td>
      <Td>{foodlisting.description}</Td>
      <Td isNumeric>{foodlisting.amount}</Td>
      <Td>{foodlisting.start_time_display} - {foodlisting.end_time_display}</Td>
      <Td>Active</Td>
      <Td>Edit</Td>
    </Tr>
  </Tbody>
              
            </>  

    )
        
}

export default FoodItem