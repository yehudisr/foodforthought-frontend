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
  import { useDisclosure } from "@chakra-ui/react"
  import {Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, FormControl, FormLabel, Input} from "@chakra-ui/react"
  import { useSelector, useDispatch } from 'react-redux'
  
function Orders({foodlisting}) {
  const { isOpen, onOpen, onClose } = useDisclosure() 
  const [open, setOpen] = useState(false)
  const [ordered, setOrdered] = useState(false)
  const foodOrders = useSelector(state => state.foodOrder)
  console.log(foodOrders)

      const handleOpen = () => {
        onOpen()
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
      <Td>{!ordered && foodlisting.amount > 0 ? <Badge colorScheme="green">Available</Badge> : <Badge colorScheme="red">Taken</Badge>}</Td>
      <Td>
        {!ordered && foodlisting.amount > 0 ? <Button size="sm" variant="ghost" borderRadius="md" onClick={handleOpen}>Order</Button> : null }
      
      {open && ( <Modal
        
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Place Your Order</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <OrderForm onOrdered={setOrdered} ordered={ordered} handleOpen={handleOpen} foodlisting={foodlisting}/>
               </ModalBody>
              <ModalFooter>
              <Button onClick={onClose}>Cancel</Button>
             </ModalFooter>
          </ModalContent>
        </Modal>)}
        </Td>
    </Tr>
   </Tbody>
              
            </>  

    )
        
}

export default Orders