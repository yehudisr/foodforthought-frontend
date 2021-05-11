import { Route, Switch, NavLink, Redirect, useHistory } from 'react-router-dom'
import { useState } from 'react'
import { Button, ButtonGroup, Box, Flex, Spacer } from "@chakra-ui/react"
import { useDispatch, useSelector } from 'react-redux'
import {setGiver} from '../redux/giverSlice'
import {setListings} from '../redux/foodListingSlice'
import {setReceiver} from '../redux/receiverSlice'


function Navbar() {

    // const getGiver = localStorage.getItem('currentGiver')
    // const currentUser = JSON.parse(getGiver)
    // const getReceiver = localStorage.getItem('currentReceiver')
    // const currentReceiver = JSON.parse(getReceiver)
    const history = useHistory()
    const dispatch = useDispatch()

    const receiver = useSelector(state => state.receiver)
    const giver = useSelector(state => state.giver)
  
  
    const handleLogout = () => {
      localStorage.removeItem('currentGiver')
      localStorage.removeItem('giverFoodListings')
      localStorage.removeItem('currentReceiver')
      history.push('/')
      dispatch(setGiver(null))
      dispatch(setListings([]))
      dispatch(setReceiver(null))
    }
    

    return (
      <div>
      <Flex> 
      <Flex
            align={["center", "center", "center", "center"]}
            justify={["center", "space-between", "flex-end", "flex-end"]}
            direction={["column", "row", "row", "row"]}
            pt={[4, 4, 0, 0]}
          >
            <Box p="4" ><NavLink to="/">Home</NavLink></Box>
            <Box p="4" ><NavLink to="/how">About Us </NavLink></Box>
            {receiver && <Box p="4" ><NavLink to="/listings">Listings</NavLink></Box>}
          
           { giver || receiver ?  
           
              <Box p="4" > <NavLink to="/" isLast>
              <Button
                size="sm"
                rounded="md"
                color={["primary.500", "primary.500", "white", "white"]}
                bg={["#5E8074", "#5E8074", "primary.500", "primary.500"]}
                _hover={{
                  bg: [
                    "primary.100",
                    "primary.100",
                    "primary.600",
                    "primary.600",
                  ],
                }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </NavLink></Box> :  <Box p="4" ><NavLink to="/signup" isLast>
              <Button
                size="sm"
                rounded="md"
                color={["primary.500", "primary.500", "white", "white"]}
                bg={["#5E8074", "#5E8074", "primary.500", "primary.500"]}
                _hover={{
                  bg: [
                    "primary.100",
                    "primary.100",
                    "primary.600",
                    "primary.600",
                  ],
                }}
              >
                Sign Up
              </Button>
            </NavLink></Box>}
          </Flex>
   
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
  
  