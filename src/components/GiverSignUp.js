import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { setGiver } from '../redux/giverSlice'
import { Box, Spacer, Text, Button, Input, Grid, GridItem, Link, Checkbox, FormControl, Center, FormLabel, InputGroup, Flex, InputRightElement } from "@chakra-ui/react";

function GiverSignUp() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [errors, setErrors] = useState([])
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
    category: "",
  });


  function handleChange(event) {
    // const key = event.target.name
    // const value = event.target.type === "checkbox" ? event.target.checked : event.target.value

    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => {
        return r.json().then((data) => {
          if (r.ok) {
            return data;
          } else {
            throw data;
          }
        });
      })
      .then((data) => {
        localStorage.setItem("setGiver", data);
        dispatch(setGiver(data));
        history.push(`/giver/${data.id}`);
      })
      .catch((error) => {
        setErrors(error.errors);
      });
  }

  const { name, email, password, location, category } = formData;

  return (
   <Center  h="630px" >

            <Flex alignItems="center">
            <form onSubmit={handleSubmit}>
                <Text >Sign Up To Give</Text><Spacer/>

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
                
                 <Box p={4}> <FormControl   isRequired>
                        <FormLabel>Category</FormLabel>
                <Input
                    type="text"
                    name="category"
                    className="signup-box"
                    value={category}
                    onChange={handleChange}
                /></FormControl></Box><Spacer/>

                {errors.map(error => 
                <p style={{ color: "red"}} key={error}>
                {error}
                </p>
                )}

                <input type="submit" value="SIGN UP" className="signup-btn" />
            </form>
       </Flex> 
     
    </Center>
  );
}

export default GiverSignUp;