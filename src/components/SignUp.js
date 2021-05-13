import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex } from "@chakra-ui/react"
import ReceiverSignUp from './ReceiverSignUp'
import GiverSignUp from './GiverSignUp'

export default function SignUp (){
   
  



return (

    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
  
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