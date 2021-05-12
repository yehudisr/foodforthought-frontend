import {
    
    Tbody,
    
    Tr,
    
    Td,
     Button, Badge
  } from "@chakra-ui/react"
  import { useState } from 'react'
  import OrderForm from './OrderForm'
  import { useDisclosure } from "@chakra-ui/react"
  import {Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay} from "@chakra-ui/react"
  import { useSelector } from 'react-redux'
  
function Orders({order, setAlert}) {
  const { isOpen, onOpen, onClose } = useDisclosure() 
  const [open, setOpen] = useState(false)
  const foodOrders = useSelector(state => state.foodOrder)
 

 const displayStart = new Date(`${order.start_time}`).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  const displayEnd = new Date (`${order.end_time}`).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

      const handleOpen = () => {
        onOpen()
        setOpen(open => !open)
      }

    return(
       <>

    <Tbody>
   { new Date(`${order.end_time}`).toLocaleString() < new Date().toLocaleString() ?  (<Tr > 
      <Td>{order.name}</Td>
      <Td>{order.description}</Td>
      <Td>{order.food_giver.name}</Td>
      <Td>{order.food_giver.location}</Td>
      {/* <Td isNumeric>{order.total_amount}</Td> */}
      <Td>{displayStart} - {displayEnd}</Td>
      <Td>{order.amount > 0 ? <Badge bgColor="#DE9A2D" color="#ECF0E9">{order.amount} Left</Badge> : <Badge bgColor="#698B81" color="#ECF0E9">Taken</Badge>}</Td>
      <Td> <Badge bgColor="#698B81" color="#ECF0E9">Unavailable</Badge>
        </Td>
        
    </Tr>) : (<Tr>
      <Td>{order.name}</Td>
      <Td>{order.description}</Td>
      <Td>{order.food_giver.name}</Td>
      <Td>{order.food_giver.location}</Td>
      {/* <Td isNumeric>{order.total_amount}</Td> */}
      <Td>{displayStart} - {displayEnd}</Td>
      <Td>{order.amount > 0 ? <Badge bgColor="#DE9A2D" color="#ECF0E9">{order.amount} Left</Badge> : <Badge bgColor="#698B81" color="#ECF0E9">Taken</Badge>}</Td>
      <Td>
        { order.amount > 0 ? <Button size="sm" variant="ghost" borderRadius="md" onClick={handleOpen}>Order</Button> : null }
      
      {open && ( <Modal
        
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader bgColor="#5E8074" color="white">Place Your Order</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <OrderForm handleOpen={handleOpen} order={order} setAlert={setAlert}/>
               </ModalBody>
              <ModalFooter>
              <Button onClick={onClose}>Cancel</Button>
             </ModalFooter>
          </ModalContent>
        </Modal>)}

        </Td>
        
    </Tr>) }
   </Tbody>
              
            </>  

    )
        
}

export default Orders