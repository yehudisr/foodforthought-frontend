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
    Box, Button, Spacer, Stack
  } from "@chakra-ui/react"
  import { AddIcon } from '@chakra-ui/icons'
  import { useSelector, useDispatch } from 'react-redux'
  import AddListing from './AddListing'
  import { useState, useEffect } from 'react'
  import { setListings, fetchFoodListings} from '../redux/foodListingSlice'
  import DownloadLink from "react-download-link"
  import generatePDF from "./ReportGenerator"
  import {Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, FormControl, FormLabel, Input} from "@chakra-ui/react"
  import { useDisclosure } from "@chakra-ui/react"

function FoodListings() {
    const [open, setOpen] = useState(false)
    const giver = useSelector(state => state.giver)
    const dispatch = useDispatch()
    const foodListings = useSelector(state => state.foodListing)
    const { isOpen, onOpen, onClose } = useDisclosure() 

    const giverListings = foodListings.map(foodlisting => <FoodItem key={foodlisting.name} foodlisting={foodlisting} />)
    
    useEffect(()=>{
    fetch(`http://localhost:3000/food_givers/${giver.id}`)
      .then(res => res.json())
      .then(data => {
        dispatch(setListings(data.food_listings))
      })
    }, [])

    const handleOpen = () => {
      onOpen()
    setOpen(open => !open)
  }

  const handleClose = () => {
    setOpen(false)
  }

    return(
            <Box><Stack direction="row" spacing={6} p={4}>
                    <Button onClick={handleOpen} size="xs" p={4} variant="solid" bgColor="#167572" color="white">
                    <AddIcon w={4} h={4} />
                    </Button>
                    <Box>
                      <Button bgColor="#167572" color="white"
                      onClick={() => generatePDF(foodListings)}
                    >
                      Generate Report
                    </Button>
                    </Box>
                  </Stack> {open && <Modal
        
                                  isOpen={isOpen}
                                  onClose={onClose}
                                >
                                  <ModalOverlay />
                                  <ModalContent>
                                    <ModalHeader>Add Your Listing</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody pb={6}><AddListing handleOpen={handleOpen}/>
                                      {/* <OrderForm onOrdered={setOrdered} ordered={ordered} handleOpen={handleOpen} order={order}/> */}
                                      </ModalBody>
                                      <ModalFooter>
                                      <Button onClick={onClose}>Cancel</Button>
                                    </ModalFooter>
                                  </ModalContent>
                                </Modal>
                  
                  
                  
                  
                  
                  }
                <Box spacing={4} borderWidth="1px" borderRadius="lg" overflow="hidden"> 
                    <Table variant="simple">
                    <Thead > 
                        <Tr backgroundColor='#EEF0EB'>
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
                </Box>
            </Box>
    )

}
export default FoodListings