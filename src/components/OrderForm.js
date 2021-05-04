import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function OrderForm({foodlisting, onOpen, onOrdered, ordered}){

    const receiver = useSelector(state => state.receiver)
    console.log(receiver)

    const [formData, setFormData] = useState({  note: "", amount: ""})

    function handleChange(event){
        setFormData({
          ...formData, 
          [event.target.name]: event.target.value,
            })
      }
    

    function handleSubmit(event){

    event.preventDefault()
    
    const newOrder = {
       ...formData,
       food_receiver_id: receiver.id,
       food_listing_id: foodlisting.id
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
        .then(data => {
            // if (data.id === null){
            // alert("you already ordered this!")
            // } else
            onOpen()
            onOrdered(ordered => !ordered)
        })
        setFormData({  note: "", amount: ""})
}
    
    
    return(
        <> 
        {/* <Modal
          initialFocusRef={initialRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add a food listing</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}> */}
                <form onSubmit={handleSubmit} >
                <input name="amount" placeholder="Amount" 
                value={formData.amount}
                onChange={handleChange}/>
                <input name="note" placeholder="Note" 
                value={formData.description}
                onChange={handleChange}/>
          
                <input type="submit" value="Place Order" />
                </form>
            {/* </ModalBody>
  
            <ModalFooter>
              <Button colorScheme="blue" mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal> */}
      </>
    )

}

export default OrderForm