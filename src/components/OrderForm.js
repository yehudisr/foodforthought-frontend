import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateOrder } from '../redux/foodOrderSlice'
import emailjs from 'emailjs-com'
import {  Input, Button} from "@chakra-ui/react"
import SmSForm from './SmSForm' 


function OrderForm({order, handleOpen, setAlert}){
    const dispatch = useDispatch()
    const receiver = useSelector(state => state.receiver)
    const [formData, setFormData] = useState({  note: "", amount: "1", email: ""})
    const [checked, setChecked] = useState(false)
    
    const onClose = () => setAlert(false)


    function handleCheck() {
        setChecked(checked => !checked)
    }


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
        setAlert(true)

}
    
    
    return(
        <> 
                <form onSubmit={handleSubmit} >
                <Input name="amount" placeholder="Amount" 
                value={formData.amount}
                onChange={handleChange}/>
                <br/><br/>
                <Input name="note" placeholder="Note" 
                value={formData.description}
                onChange={handleChange}/>
               <br/><br/>
                <Input name="email" type="email" placeholder="email" value={formData.email}
                onChange={handleChange} />
                {/* <Button onSubmit={handleSubmit} >Place Order</Button> */}

                 {/* <label>
                <input
                  type="checkbox"
                  name="isChecked"
                  checked={checked}
                  onChange={handleCheck}
                /> Send Me SMS</label>

                {!checked ? null : (<SmSForm/>)}  
                <br/><br/> */}
                <br/><br/>
                <input type="submit" value="Place Order"/>
                </form>
               
           
      </>
    )

}

export default OrderForm