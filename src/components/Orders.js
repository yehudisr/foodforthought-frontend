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
  
function Orders({order}) {
  const { isOpen, onOpen, onClose } = useDisclosure() 
  const [open, setOpen] = useState(false)
  const [ordered, setOrdered] = useState(false)
  const foodOrders = useSelector(state => state.foodOrder)
  // console.log(foodOrders)

      const handleOpen = () => {
        onOpen()
        setOpen(open => !open)
      }

    return(
       <>

    <Tbody>
    <Tr>
      <Td>{order.name}</Td>
      <Td>{order.description}</Td>
      <Td>{order.food_giver.location}</Td>
      <Td isNumeric>{order.amount}</Td>
      <Td>{order.start_time_display} - {order.end_time_display}</Td>
      <Td>{!ordered && order.amount > 0 ? <Badge colorScheme="green">Available</Badge> : <Badge colorScheme="red">Taken</Badge>}</Td>
      <Td>
        { !ordered && order.amount > 0 ? <Button size="sm" variant="ghost" borderRadius="md" onClick={handleOpen}>Order</Button> : null }
      
      {open && ( <Modal
        
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Place Your Order</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <OrderForm onOrdered={setOrdered} ordered={ordered} handleOpen={handleOpen} order={order}/>
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