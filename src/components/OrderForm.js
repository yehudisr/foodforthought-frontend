import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useDisclosure } from "@chakra-ui/react"
import { updateOrder } from '../redux/foodOrderSlice'
import emailjs from 'emailjs-com'
import { FormControl, FormLabel, Input, Button, AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,} from "@chakra-ui/react"


function OrderForm({order, handleOpen}){
    const dispatch = useDispatch()
    const receiver = useSelector(state => state.receiver)
    const [formData, setFormData] = useState({  note: "", amount: "1", email: ""})
    const [isOpen, setIsOpen] = useState(false)
  const onClose = () => setIsOpen(false)
  // const cancelRef = .useRef()


    function handleChange(event){
        setFormData({
          ...formData, 
          [event.target.name]: event.target.value
            })
      }
 
      function sendEmail(event) {
        event.preventDefault()
    
        emailjs.sendForm('service_5hzqjk1', 'template_y9gktxi', event.target, 'user_FdO4oCpnWDd6vSUUtx0vx')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          })
      }

function handleSubmit(event){

    event.preventDefault()
    
    const newOrder = {
       ...formData,
       food_receiver_id: receiver.id,
       food_listing_id: order.id
     }
 
    fetch(`http://localhost:3000/food_orders`, { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(newOrder)
        })
        .then (res => res.json())
        .then(data => {  console.log(data, "order")
            if (data.id === null){
            alert("you already ordered this!")
            } 
            else {
            handleOpen()
            dispatch(updateOrder(data))
      
             }
        
        })
        setFormData({  note: "", amount: "1", email:""})
        sendEmail(event)
        setIsOpen(true)

}
    
    
    return(
        <> 
                <form onSubmit={handleSubmit} >
                <Input name="amount" placeholder="Amount" 
                value={formData.amount}
                onChange={handleChange}/>
                <Input name="note" placeholder="Note" 
                value={formData.description}
                onChange={handleChange}/>
                <Input name="email" type="email" placeholder="email" value={formData.email}
                onChange={handleChange} />
                {/* <Button onSubmit={handleSubmit} >Place Order</Button> */}
                <input type="submit" value="Place Order"/>
                </form>
                <AlertDialog
                  isOpen={isOpen}
                  // leastDestructiveRef={cancelRef}
                  onClose={onClose}
                >
                  <AlertDialogOverlay>
                    <AlertDialogContent>
                      <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        Delete Customer
                      </AlertDialogHeader>

                      <AlertDialogBody>
                        Are you sure? You can't undo this action afterwards.
                      </AlertDialogBody>

                      <AlertDialogFooter>
                        {/* <Button ref={cancelRef} onClick={onClose}>
                          Cancel
                        </Button>
                        <Button colorScheme="red" onClick={onClose} ml={3}>
                          Delete
                        </Button> */}
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialogOverlay>
                </AlertDialog>
           
      </>
    )

}

export default OrderForm