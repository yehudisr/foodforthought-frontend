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

function FoodListings() {
    const [open, setOpen] = useState(false)
    const giver = useSelector(state => state.giver)
    const dispatch = useDispatch()
    const foodListings = useSelector(state => state.foodListing)
    console.log(foodListings)
     
    // useDispatch(setListings(giver.food_listings))
    const giverListings = foodListings.map(foodlisting => <FoodItem key={foodlisting.name} foodlisting={foodlisting} />)
    
    useEffect(()=>{
    fetch(`http://localhost:3000/food_givers/${giver.id}`)
      .then(res => res.json())
      .then(data => {
        dispatch(setListings(data.food_listings))
      })
    }, [])

    const handleOpen = () => {
    setOpen(open => !open)
  }

  const handleClose = () => {
    setOpen(false)
  }
 console.log(foodListings)
    return(
            <Box><Stack direction="row" spacing={6} p={4}>
                    <Button onClick={handleOpen} size="xs" p={4} variant="solid" bgColor="#167572" color="white">
                    <AddIcon w={4} h={4} />
                    </Button>
                    <Box>
                      <button
                      className="btn btn-primary"
                      onClick={() => generatePDF(foodListings)}
                    >
                      Generate monthly report
                    </button>
                    </Box>
                  </Stack> {open && <AddListing/>}
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