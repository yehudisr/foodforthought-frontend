import { useSelector, useDispatch } from 'react-redux'
import {Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, FormControl, FormLabel, Input, Button} from "@chakra-ui/react"
import DateTimePicker from 'react-datetime-picker'
import { useState, useRef } from 'react'
import { useDisclosure } from "@chakra-ui/react"
import { addListing } from '../redux/foodListingSlice'

function AddListing({handleOpen}){
   const giver = useSelector(state => state.giver)
   const { isOpen, onOpen, onClose } = useDisclosure()
   const initialRef = useRef()
   const dispatch = useDispatch()
   const [date, setDate] = useState(new Date())
   const [formData, setFormData] = useState({ name: "", description: "", amount: "", start_time: date, end_time:""})
     console.log(date)

   function handleChange(event){
     setFormData({
       ...formData, 
       [event.target.name]: event.target.value,
         })
   }
  
   function onChange(value){
     console.log(value)
    setFormData({
      ...formData, 
      start_time: value,
        })
   }
   console.log(formData)

   function handleSubmit(event){
     event.preventDefault()
     const newListing = {
       ...formData,
       food_giver_id: giver.id
     }

     fetch("http://localhost:3000/food_listings", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(newListing)
      })
      .then(resp=>resp.json())
      .then((newListing=>{ 
          dispatch(addListing(newListing))
        }))
        handleOpen()
        setFormData({ name: "", description: "", amount: "", start_time: "", end_time:""})
    }
 console.log(formData)
    return(
        <> 
       
                <form onSubmit={handleSubmit} >
                <Input name="name" placeholder="Name" 
                value={formData.name}
                onChange={handleChange}/>
                <Input name="description" placeholder="Description" 
                value={formData.description}
                onChange={handleChange}/>
                <Input name="amount" placeholder="Amount" 
                value={formData.amount}
                onChange={handleChange}/>
                <DateTimePicker
                   name="start_time"
                  onChange={onChange}
                  value={date}
                />
                {/* <DateTimePicker
                   name="end_time"
                  onChange={onChange}
                  value={value}
                /> */}
          
                <input type="submit" value="Add your listing" />
                </form>
            
      </>
    )
}

export default AddListing