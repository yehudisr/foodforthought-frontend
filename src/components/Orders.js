import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption, Button, Badge
  } from "@chakra-ui/react"
  import { useState, useEffect } from 'react'
  import OrderForm from './OrderForm'
  
function Orders({foodlisting}) {

  const [open, setOpen] = useState(false)

  const [ordered, setOrdered] = useState(false)

      const handleOpen = () => {
        setOpen(open => !open)
      }

    return(
       <>

    <Tbody>
    <Tr>
      <Td>{foodlisting.name}</Td>
      <Td>{foodlisting.description}</Td>
      <Td>{foodlisting.food_giver.location}</Td>
      <Td isNumeric>{foodlisting.amount}</Td>
      <Td>{foodlisting.start_time_display} - {foodlisting.end_time_display}</Td>
      <Td>{!ordered ? <Badge colorScheme="green">Available</Badge> : <Badge colorScheme="red">Taken</Badge>}</Td>
      <Td>
        {!ordered && <Button size="sm" variant="ghost" borderRadius="md" onClick={handleOpen}>Order</Button>}
      
      {open && <OrderForm onOrdered={setOrdered} ordered={ordered} onOpen={handleOpen} foodlisting={foodlisting}/>}</Td>
    </Tr>
   </Tbody>
              
            </>  

    )
        
}

export default Orders