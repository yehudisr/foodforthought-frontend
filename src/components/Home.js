import { Box, Heading, Text, Button, Spacer, Flex, Container, Image} from '@chakra-ui/react'
import GiverLogin from './GiverLogin'
import { useState } from 'react'
import ReceiverLogin from './ReceiverLogin'


export default function Home() {

 const [displayGiver, setDisplayGiver] = useState(false)
 const [displayOrder, setDisplayOrder] = useState(false)

 function toggleGiver(){
    setDisplayGiver(displayGiver => !displayGiver)
}

function toggleOrder(){
    setDisplayOrder(displayOrder => !displayOrder)
}

	return (
        <Container maxW="container.sm" centerContent>
            {/* <Box
            
        bgImage="url('https://images.unsplash.com/photo-1598514982901-ae62764ae75e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')"
        bgPosition="center"
        bgRepeat="no-repeat"
        > */}
            <Heading fontSize="50px" textAlign="center">
					Food For Thought
				</Heading>
                

                 <Box p={4} maxW="sm" borderWidth="1px" borderRadius="lg">
                <Button size="sm" borderRadius="md" onClick={toggleGiver}>List My Food</Button>
                {displayGiver && <GiverLogin/>} </Box><Spacer/>
                <Box p={4} maxW="sm" borderWidth="1px" borderRadius="lg">
                <Button size="sm" borderRadius="md" onClick={toggleOrder}>Order Food</Button>
                {displayOrder && <ReceiverLogin/>}
                </Box>
        
     
     
                
                {/* </Box> */}
         
          

      </Container>

        
	)
}