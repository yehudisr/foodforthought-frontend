import {useSelector, useDispatch} from 'react-redux'
import { removeListing } from '../redux/foodListingSlice'
import {Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, Button, Badge } from "@chakra-ui/react"

  
function FoodItem({foodlisting}) {

    console.log(foodlisting)

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

     const start =  foodlisting.start_time

     console.log(Date.parse(foodlisting.start_time))

    return(
      <>

        <Tbody>
        <Tr>
          <Td>{foodlisting.name}</Td>
          <Td>{foodlisting.description}</Td>
          <Td isNumeric>{foodlisting.amount}</Td>
          <Td>{foodlisting.start_time} - {foodlisting.end_time}</Td>
          <Td>{foodlisting.amount > 0 ? <Badge colorScheme="green">Available</Badge> : <Badge colorScheme="red">Taken</Badge>}</Td>
          <Td> <Button bgColor="#167572" onClick={handleDelete} color="white">delete</Button></Td>
        </Tr>
      </Tbody>
              
    </>  

    )
        
}

export default FoodItem