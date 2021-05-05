import { Route, Switch, NavLink, Redirect, useHistory } from 'react-router-dom'
import { useState } from 'react'
import { Button, ButtonGroup, Box, Flex, Spacer } from "@chakra-ui/react"
import { useDispatch } from 'react-redux'
import {setGiver} from '../redux/giverSlice'
import {setListings} from '../redux/foodListingSlice'
import {setReceiver} from '../redux/receiverSlice'


function Navbar() {

    const getUser = localStorage.getItem('currentGiver')
    const currentUser = JSON.parse(getUser)
    const history = useHistory()
    const dispatch = useDispatch()
  
  
    const handleLogout = () => {
      localStorage.removeItem('currentGiver')
      localStorage.removeItem('giverFoodListings')
      history.push('/')
      dispatch(setGiver(null))
      dispatch(setListings([]))
      dispatch(setReceiver(null))
    }

    return (
      <div>
      <Flex>
      {/* <Box p="4" >
        <NavLink
          to='/events'
          exact
          
        > Events</NavLink>
        </Box>
      <Box p="4" >
        <NavLink
          to={`/profile/${currentUser.id}`}
          exact
          
        >My Events</NavLink>
        </Box> */}
        <Box p="4" >
        <button onClick={handleLogout}>Logout</button>
        </Box>
      </Flex> 
      {/* <Flex> <Box p="4" >
        <NavLink
          to={'/login'}
          exact
        >Login</NavLink>
        </Box>
        <Box p="4" >
        <NavLink
          to={'/signup'}
          exact
        >Signup</NavLink>
        </Box>
        </Flex>  */}
        </div>
        )
     
   
  
  }
    
  
  export default Navbar
  
  