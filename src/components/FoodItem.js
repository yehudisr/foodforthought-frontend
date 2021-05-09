import {useSelector, useDispatch} from 'react-redux'
import { removeListing } from '../redux/foodListingSlice'
import {Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, Button, Badge } from "@chakra-ui/react"
import { DeleteIcon } from '@chakra-ui/icons'

  
function FoodItem({foodlisting}) {


  const displayStart = new Date(`${foodlisting.start_time}`).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
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
        <Tr>
          <Td>{foodlisting.name}</Td>
          <Td>{foodlisting.description}</Td>
          <Td isNumeric>{foodlisting.amount}</Td>
          <Td>{displayStart} - {displayEnd}</Td>
          <Td>{foodlisting.amount > 0 ? <Badge bgColor="#698B81" color="#ECF0E9">Available</Badge> : <Badge bgColor="#DE9A2D" color="#ECF0E9">Taken</Badge>}</Td>
          <Td> <Button bgColor="#167572" onClick={handleDelete} color="white"><DeleteIcon/></Button></Td>
        </Tr>
      </Tbody>
              
    </>  

    )
        
}

export default FoodItem