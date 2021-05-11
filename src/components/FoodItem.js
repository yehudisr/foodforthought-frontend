import { useDispatch } from 'react-redux'
import { removeListing } from '../redux/foodListingSlice'
import { Tbody, Tr, Td, Button, Badge, Tooltip } from "@chakra-ui/react"
import { DeleteIcon } from '@chakra-ui/icons'

  
function FoodItem({foodlisting}) {


  const displayStart = new Date(`${foodlisting.start_time}`).toLocaleString('en-US', {month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })
  const displayEnd = new Date (`${foodlisting.end_time}`).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
   
  // const displayEnd = `${new Date(`${foodlisting.end_time}`).getHours()}:${new Date(`${foodlisting.end_time}`).getMinutes()} `
  

    const dispatch= useDispatch()

    function handleDelete(){
        fetch(`http://localhost:3000/food_listings/${foodlisting.id}`,{
          method: "DELETE"
        })
        .then (resp => resp.json())
        .then(foodlisting => {
          dispatch(removeListing(foodlisting))
        } )
        
      }

    return(
      <>

        <Tbody>
       { new Date(`${foodlisting.start_time}`).toLocaleString('en-US', {month: 'long', day: 'numeric'}) === new Date().toLocaleString('en-US', {month: 'long', day: 'numeric'}) ?  
          (<Tooltip label="Current Listing" placement="bottom"    aria-label="A tooltip"><Tr >
          <Td>{foodlisting.name}</Td>
          <Td>{foodlisting.description}</Td>
          <Td isNumeric>{foodlisting.total_amount}</Td>
          <Td>{displayStart} - {displayEnd}</Td>
          <Td>{foodlisting.amount > 0 ? <Badge bgColor="#698B81" color="#ECF0E9">{foodlisting.amount} Available</Badge> : <Badge bgColor="#DE9A2D" color="#ECF0E9">Taken</Badge>}</Td>
          <Td> <Button bgColor="#167572" onClick={handleDelete} color="white"><DeleteIcon/></Button></Td>
        </Tr></Tooltip>) : 
          (
          <Tr bgColor="#EAEAEA" color="#8D8D8D">
          <Td>{foodlisting.name}</Td>
          <Td>{foodlisting.description}</Td>
          <Td isNumeric>{foodlisting.amount}</Td>
          <Td>{displayStart} - {displayEnd}</Td>
          <Td>{foodlisting.amount > 0 ? <Badge bgColor="#8FAFA6" color="#ECF0E9"> {foodlisting.amount} Available</Badge> : <Badge bgColor="#DE9A2D" color="#ECF0E9">Taken</Badge>}</Td>
          <Td> <Button bgColor="#89BAB9" onClick={handleDelete} color="white"><DeleteIcon/></Button></Td>
        </Tr>) }
      </Tbody>
              
    </>  

    )
        
}

export default FoodItem