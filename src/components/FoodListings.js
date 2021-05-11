import FoodItem from './FoodItem'
import { Table, Thead, Tr, Th, Box, Button, Spacer, Stack } from "@chakra-ui/react"
import { AddIcon, DownloadIcon } from '@chakra-ui/icons'
import { useSelector, useDispatch } from 'react-redux'
import AddListing from './AddListing'
import { useState, useEffect } from 'react'
import { setListings, fetchFoodListings} from '../redux/foodListingSlice'
import DownloadLink from "react-download-link"
import generatePDF from "./ReportGenerator"
import {Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, FormControl, FormLabel, Input, Tooltip, Text} from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/react"

function FoodListings() {
    const [open, setOpen] = useState(false)
    const giver = useSelector(state => state.giver)
    const dispatch = useDispatch()
    const foodListings = useSelector(state => state.foodListing)
    const { isOpen, onOpen, onClose } = useDisclosure() 

    console.log(foodListings, "foodlistings")

    const sortedListings = [...foodListings]
    // .filter(listing => {
    //   return listing.start_time === new Date()
    // })
    .sort((a,b)=> {
      return new Date(b.created_at) - new Date(a.created_at)
    })
    console.log(sortedListings, "sorted")
    
    const giverListings = sortedListings.map(foodlisting => <FoodItem key={foodlisting.name} foodlisting={foodlisting} />)
    
    
    useEffect(()=>{
    fetch(`http://localhost:3000/food_givers/${giver.id}`)
      .then(res => res.json())
      .then(data => {
        dispatch(setListings(data.food_listings))
        console.log(foodListings, "inside fetch")
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
                  <Tooltip label="Add Listing" placement="top-end"    aria-label="A tooltip">
                    <Button onClick={handleOpen} size="xs" p={4} variant="solid" bgColor="#167572" color="white">
                    <AddIcon w={4} h={4} />
                    </Button>
                    </Tooltip>
                    <Box>
                    <Tooltip label="Download Report" placement="top-end" aria-label="A tooltip">
                      <Button bgColor="#167572" color="white"
                      onClick={() => generatePDF(foodListings, giver)}
                    >
                       Report <DownloadIcon/>
                    </Button>
                    </Tooltip>
                    </Box>
                  </Stack> {open && <Modal
        
                                  isOpen={isOpen}
                                  onClose={onClose}
                                >
                                  <ModalOverlay />
                                  <ModalContent>
                                    <ModalHeader bgColor="#5E8074" color="white">Add Your Listing</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody pb={6}><AddListing handleOpen={handleOpen}/>
                                      </ModalBody>
                                      <ModalFooter>
                                      <Button onClick={onClose}>Cancel</Button>
                                    </ModalFooter>
                                  </ModalContent>
                                </Modal>
                                } 

          
                        <Box spacing={4} borderWidth="1px" borderRadius="lg" overflow="hidden"  boxShadow="lg"> 
                            <Table variant="simple">
                            <Thead > 
                                <Tr backgroundColor='#EEF0EB'>
                                <Th>Name</Th>
                                <Th>Description</Th>
                                <Th isNumeric>Amount</Th>
                                <Th>Times</Th>
                                <Th>Status</Th>
                                <Th>Delete</Th>
                                </Tr>
                            </Thead>
                            {giverListings}
                            </Table>
                        </Box> 
            </Box>
    )

}
export default FoodListings