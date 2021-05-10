import { useSelector, useDispatch } from 'react-redux'
import {setGiver} from '../redux/giverSlice'
import { setReceiver } from '../redux/receiverSlice'
import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex } from "@chakra-ui/react"
import ReceiverSignUp from './ReceiverSignUp'
import GiverSignUp from './GiverSignUp'

export default function SignUp (){
   
    const dispatch = useDispatch()



return (

    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
    //   direction={{ base: "column-reverse", md: "row" }}
    //   wrap="no-wrap"
    //   minH="70vh"
    //   px={8}
    //   mb={18}
    >

        <Tabs borderRadius="4px" isFitted variant="enclosed">
        <TabList mb="1em">
            <Tab>Sign Up to Order</Tab>
            <Tab>Sign Up to List</Tab>
        </TabList>
        <TabPanels>
            <TabPanel>
            <ReceiverSignUp/>
            </TabPanel>
            <TabPanel>
           <GiverSignUp/>
            </TabPanel>
        </TabPanels>
        </Tabs>
  </Flex>
)

}