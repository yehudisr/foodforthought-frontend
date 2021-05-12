import { Box, Flex, Heading } from "@chakra-ui/react"


function About(){
   
    

    return(
        <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="70vh"
      px={8}
      mb={18}
    >
    
   <Box p={8}> <Heading as="h1"
          size="xl"
          fontWeight="bold"
          color="primary.800"
          textAlign={["center", "center", "left", "left"]
         }
        >Our Mission
          </Heading></Box>
         
     
         <Heading
          as="h2"
          size="md"
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        >
          Our mission is to inspire and empower everyone to take action against food waste. We know that to live and breathe this every day, we need to turn our words into actions. With this in mind we have set out a new ambition - to contribute in every way we can to building the global food waste movement. It's only when we all come together to fight food waste, that we'll be able to generate a positive change in society.
        </Heading>
  </Flex>
    )
}

export default About