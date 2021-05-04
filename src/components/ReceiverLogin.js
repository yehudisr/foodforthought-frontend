import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Box, Spacer, Text, Button, Input, Grid, GridItem, Link, Checkbox, FormControl, Center, FormLabel, InputGroup, Flex, InputRightElement } from "@chakra-ui/react";
import { setReceiver } from '../redux/receiverSlice'



function ReceiverLogin() {
    const history = useHistory()
    const dispatch = useDispatch()
    const [errors, setErrors] = useState([])
    const [rememberMe, setRememberMe] = useState(false)
    const [open, setOpen] = useState(false);
    const receiver = useSelector(state => state.receiver)
   
  

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }
    const [formData, setFormData] = useState({
      password: "",
      email: ""
    })

    function handleSubmit(e){
        e.preventDefault()
        fetch("http://localhost:3000/order",{
          method: "POST",
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then((data) => {
          if (data.errors) {
            setErrors(data.errors);
            
          } else {
               dispatch(setReceiver(data))
           
            if(rememberMe){
              localStorage.setItem('currentReceiver', JSON.stringify(data))
            }
    
            history.push(`/listings`);
          }
        })
        
        
    }

    function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  console.log(errors.length > 0)

    return (
        <Center  h="300px" >

            <Flex alignItems="center">
            
                <form onSubmit={handleSubmit}>
                    

                    <Box p={4}> <FormControl   isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input id="email" name="email" value={formData.email}
                         onChange={handleChange} placeholder="Email" />
                        </FormControl></Box><Spacer/>

                        <Box p={4}><InputGroup size="md"> 
                        <FormControl isRequired>
                        <FormLabel>Password</FormLabel>
                        <Input
                        id="password" 
                        type="password"
                        name="password" 
                        value={formData.password}
                        onChange={handleChange} 
                        pr="4.5rem"
                        placeholder="Enter password"
                        />
                         
                        </FormControl>
                    </InputGroup>
                    </Box>
                         <Box> 
                             <Checkbox value="remember" color="primary" onChange={()=> setRememberMe(!rememberMe)}/>Remember Me
             </Box>
                
                    <Button type="submit" value="login" >Login</Button> 
                    <Box><Link href="#" variant="body2" onClick={handleOpen}>
                  {"Don't have an account? Sign Up"}
                 
                </Link> </Box>
                </form>  

              
          
   
          {/* <Modal
                open={open}
                onClose={handleClose}
                className={classes.modal}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
               {<div className={classes.modal_body}>
                <Signup/>
                 </div>}
              </Modal> */}
      
        </Flex> 
     
    </Center>
    )
}

export default ReceiverLogin
