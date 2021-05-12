
import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {setGiver} from '../redux/giverSlice'
import { Box, Spacer, Button, Input, Checkbox, FormControl, Center, FormLabel, InputGroup, Flex, Link } from '@chakra-ui/react'
import { setListings } from '../redux/foodListingSlice'
import SignUp from './SignUp'



function GiverLogin() {
    const history = useHistory()
    const dispatch = useDispatch()
    const [errors, setErrors] = useState([])
    const [rememberMe, setRememberMe] = useState(false)
   
 
  
    const [formData, setFormData] = useState({
      password: "",
      email: ""
    })

    function handleSubmit(e){
        e.preventDefault()
        fetch("http://localhost:3000/login",{
          method: "POST",
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then((data) => {
          if (data.errors) {
            setErrors(data.errors)
            
          } else {
            
               dispatch(setGiver(data))
               dispatch(setListings(data.food_listings))
           
            if(rememberMe){
              localStorage.setItem('currentGiver', JSON.stringify(data))
              localStorage.setItem('giverFoodListings', JSON.stringify(data.food_listings))
            }
    
            history.push(`/giver/${data.id}`)
          }
        })
        
        
    }

    function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    }


    return (
        <Center  h="300px" >

            <Flex alignItems="center">
            
                <form onSubmit={handleSubmit}>
                    

                    <Box p={4}> 
                      <FormControl   isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input id="email" name="email" value={formData.email}
                         onChange={handleChange} placeholder="Email" />
                        </FormControl></Box>
                         <Spacer/>

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
                    <Box><Link href="/signup" variant="body2" >
                              {"Don't have an account? Sign Up"}
                         </Link> 
                  </Box>
             </form>  

      
      
        </Flex>
     
    </Center>
    )
}

export default GiverLogin
