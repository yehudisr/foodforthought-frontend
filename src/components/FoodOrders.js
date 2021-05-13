import Orders from './Orders'
import { Table, Thead, Tr, Th, Alert, AlertTitle, AlertDescription, CloseButton, Box, Flex } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { useState } from 'react'

function FoodOrders() {
    
    const [alert, setAlert] = useState(false)

    const foodOrders = useSelector(state => state.foodOrder)
    const orders = foodOrders.map((order) => <Orders setAlert={setAlert} key={order.id} order={order}/>)

    function handleAlert(){
        setAlert(alert => !alert)
    }

return(
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="lg"> 
    {alert &&  <Flex justifyContent="center"><Alert color="#F1F2EE" bgColor="#698B81" position="fixed" top="450px" status="success" w="300px">
                           
                            <Box flex="1">
                              <AlertTitle>Success!</AlertTitle>
                              <AlertDescription display="block">
                                Thank you for saving this delicious food! Check your email for your order confirmation.
                              </AlertDescription>
                            </Box>
                            <CloseButton onClick={handleAlert}  position="absolute" right="8px" top="8px" />
                          </Alert></Flex> }
        <Table variant="simple">
        <Thead > 
            <Tr backgroundColor='#EEF0EB'>
            <Th>Item Name</Th>
            <Th>Description</Th>
            <Th>Creator</Th>
            <Th>Location</Th>
            {/* <Th isNumeric>Amount</Th> */}
            <Th>Times</Th>
            <Th>Status</Th>
            <Th>Order</Th>
            </Tr>
        </Thead>
        {orders}
        </Table>
 </Box>
)

}
export default FoodOrders