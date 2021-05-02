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
  
function Orders({foodlisting}) {

    console.log(foodlisting)

    return(
       <>

    <Tbody>
    <Tr>
      <Td>{foodlisting.name}</Td>
      <Td>{foodlisting.description}</Td>
      <Td isNumeric>{foodlisting.amount}</Td>
      <Td>{foodlisting.start_time_display} - {foodlisting.end_time_display}</Td>
      <Td>Available</Td>
      <Td>Order</Td>
    </Tr>
   </Tbody>
              
            </>  

    )
        
}

export default Orders