import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { Box, Button, Flex, Image, Heading, Stack, Text, Spacer } from "@chakra-ui/react"
import GiverLogin from './GiverLogin'
import { useState, useEffect  } from 'react'
import ReceiverLogin from './ReceiverLogin'

export default function Hero({
  title,
  subtitle,
  image,
  ctaLink,
  ctaText,
  ...rest
}) {


  const [displayGiver, setDisplayGiver] = useState(false)
  const [displayOrder, setDisplayOrder] = useState(false)
  const [givers, setGivers] = useState([])
  const [total, setTotal] = useState(0)
 
  function toggleGiver(){
     setDisplayGiver(displayGiver => !displayGiver)
 }
 
 function toggleOrder(){
     setDisplayOrder(displayOrder => !displayOrder)
 }

//  useEffect(() => {
//         fetch(`http://localhost:3000/food_givers`)
//             .then(res => res.json())
//             .then(data => { console.log(data)
//                 setGivers(data)
//             })
//     }, [total])
//                 const totallistings = givers.map(giver => giver.all_listings_count)
//          console.log(totallistings)
//         const sum = totallistings.reduce(function (accumulator, currentValue) {
//         return accumulator + currentValue;
// })
//         // setTotal(sum)
// console.log(sum)

  

  return (
    <>
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="70vh"
      px={8}
      mb={16}
      {...rest}
    >
      <Stack
        spacing={4}
        w={{ base: "80%", md: "40%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="primary.800"
          textAlign={["center", "center", "left", "left"]}
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          size="md"
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        >
          {subtitle}
        </Heading>
       
          <Button
            bgColor="#DE9A2D"
            color="#EEF0EB"           
            variantColor="#DE9A2D"
            borderRadius="8px"
            py="4"
            px="4"
            lineHeight="1"
            size="md"
            onClick={toggleGiver}
          >
            {ctaText}
          </Button> {displayGiver && <GiverLogin/>}
       
          <Button
          
            bgColor="#DE9A2D"  
            color="#EEF0EB"
            variantColor="primary"
            borderRadius="8px"
            py="4"
            px="4"
            lineHeight="1"
            size="md"
            onClick={toggleOrder}
           
          >
           Order Food
          </Button> 
          {displayOrder && <ReceiverLogin/>}
         
        <Text
          fontSize="xs"
          mt={2}
          textAlign="center"
          color="primary.800"
          opacity="0.6"
        >
          No credit card required.
        </Text>
      </Stack>
      <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
        <Image src={image} size="100%" rounded="1rem" shadow="2xl" />
      </Box>
    </Flex>
    <Flex align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="10vh"
      px={6}
      mb={16}> 
     
      <Box p="4" w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}> <Heading 
          as="h2"
          mt={2}
          textAlign="center"
          color="#5D8074"
          fontWeight="bold"
          >{givers.length}</Heading>
          <Heading
          as="h4"
          size="md"
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          // textAlign={["center", "center", "left", "left"]}
        >
          cafes, restaurants, bakeries & event caterers on board
        </Heading></Box>
      <Box p="4" w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
      <Heading 
          as="h2"
          mt={2}
          textAlign="center"
          color="#5D8074"
          fontWeight="bold"
          >{total}
          </Heading>
          <Heading
          as="h4"
          size="md"
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          // textAlign={["center", "center", "left", "left"]}
        >meals saved, and counting! 
        </Heading></Box>
      </Flex>
    </>
  )
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
}
