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
    
   <Box p={2}> <Heading as="h1"
          size="xl"
          fontWeight="bold"
          color="primary.800"
          textAlign={["center", "center", "left", "left"]
         }
         verticalAlign="top"
        >Our Mission
          </Heading></Box>
         
     <Box p={8}> 
         <Heading
          as="h2"
          size="md"
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        > Each day in the United States approximately one pound of food per person is wasted. This equates to 103 million tons (81.4 billion pounds) of food waste generated in America in 2017, or between 30-40 percent of the food supply, according to the United States Department of Agriculture (USDA).

          Our vision is to allow everyone to contribute to the battle against food waste and hunger. We have set out to create a community partnership that brings everyone together, doing their part to feed the hungry and save food at the same time. Join us in our mission!
        </Heading></Box>
  </Flex>
    )
}

export default About