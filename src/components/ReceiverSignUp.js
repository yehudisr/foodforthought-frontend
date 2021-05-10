import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { setReceiver } from '../redux/receiverSlice'
import { Box, Spacer, Text, Button, Input, Grid, GridItem, Link, Checkbox, FormControl, Center, FormLabel, InputGroup, Flex, InputRightElement } from "@chakra-ui/react"

function ReceiverSignUp() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [errors, setErrors] = useState([])
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  })


  function handleChange(event) {
 

    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => {
        return r.json().then((data) => {
          if (r.ok) {
            return data
          } else {
            throw data
          }
        });
      })
      .then((data) => {
        localStorage.setItem("setReceiver", data)
        dispatch(setReceiver(data))
        history.push(`/listings`)
      })
      .catch((error) => {
        setErrors(error.errors)
      });
  }

  const { name, email, password, location} = formData

  return (
   <Center  h="630px" >

            <Flex alignItems="center">
            <form onSubmit={handleSubmit}>
                <Text >Sign Up To Order</Text><Spacer/>

                 <Box p={4}> <FormControl   isRequired>
                        <FormLabel>Name</FormLabel>
                <Input
                    type="text"
                    name="name"
                    className="signup-box"
                    value={name}
                    onChange={handleChange}
                /> </FormControl></Box><Spacer/>


                 <Box p={4}> <FormControl   isRequired>
                        <FormLabel>Email</FormLabel>
                <Input
                    type="text"
                    name="email"
                    className="signup-box"
                    value={email}
                    onChange={handleChange}
                /> </FormControl></Box><Spacer/>

               <Box p={4}>
                        <FormControl isRequired>
                        <FormLabel>Password</FormLabel>
                <Input
                    type="password"
                    name="password"
                    className="signup-box"
                    value={password}
                    onChange={handleChange}
                /></FormControl>
                   
                    </Box>

                 <Box p={4}> <FormControl   isRequired>
                        <FormLabel>Location</FormLabel>
                <Input
                    type="text"
                    name="location"
                    className="signup-box"
                    value={location}
                    onChange={handleChange}
                /> </FormControl></Box><Spacer/>
                
    

                <input type="submit" value="SIGN UP" className="signup-btn" />
            </form>
       </Flex> 
     
    </Center>
  );
}

export default ReceiverSignUp