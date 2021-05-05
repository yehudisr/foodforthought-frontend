import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useDisclosure } from "@chakra-ui/react"
import { updateOrder } from '../redux/foodOrderSlice'
import emailjs from 'emailjs-com'


function OrderForm({order, handleOpen, onOrdered, ordered}){
    const dispatch = useDispatch()
    const receiver = useSelector(state => state.receiver)
    const [formData, setFormData] = useState({  note: "", amount: "", email: ""})

    function handleChange(event){
        setFormData({
          ...formData, 
          [event.target.name]: event.target.value
            })
      }
 
      function sendEmail(event) {
        event.preventDefault();
    
        emailjs.sendForm('service_5hzqjk1', 'template_y9gktxi', event.target, 'user_FdO4oCpnWDd6vSUUtx0vx')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
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
        .then(data => {  console.log(data)
            if (data.id === null){
            alert("you already ordered this!")
            } 
            else {
            handleOpen()
            onOrdered(ordered => !ordered)
           
        
            // fetch(`http://localhost:3000/decrease/${data.food_listing.id}`) 
            // .then (res => res.json())
            // .then (listing => {
            //     dispatch(updateOrder(listing.amount))
            // })
             }
        
        })
        setFormData({  note: "", amount: "", email:""})
        sendEmail(event)

}
    
    
    return(
        <> 
                <form onSubmit={handleSubmit} >
                <input name="amount" placeholder="Amount" 
                value={formData.amount}
                onChange={handleChange}/>
                <input name="note" placeholder="Note" 
                value={formData.description}
                onChange={handleChange}/>
                <input name="email" type="email" placeholder="email" value={formData.email}
                onChange={handleChange} />
          
                <input type="submit" value="Place Order" />
                </form>
           
      </>
    )

}

export default OrderForm