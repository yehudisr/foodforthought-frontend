import { Box, Heading, Text, Button, Spacer, Flex, Container, Image} from '@chakra-ui/react'
import GiverLogin from './GiverLogin'
import { useState, useEffect } from 'react'
import ReceiverLogin from './ReceiverLogin'
import Header from "./Header"
import Footer from "./Footer"
import Hero from "./Hero";
import LandingLayout from "./LandingLayout";


export default function Home() {
//   const [givers, setGivers] = useState([])
//   const [total, setTotal] = useState(0)

//  useEffect(() => {
//         fetch(`http://localhost:3000/food_givers`)
//             .then(res => res.json())
//             .then(data => { console.log(data)
//                 setGivers(data)
//             })
//     }, [])
//                 const totallistings = givers.map(giver => giver.all_listings_count)
//          console.log(totallistings)
//         const sum = totallistings => totallistings.reduce((a, b) => a + b, 0)
//         setTotal(sum)
// console.log(total)

	return (  
    
    <LandingLayout>
        <Hero
          title="Partnering with local organizations to feed the community"
          subtitle="We have set out to create a community partnership that brings everyone together, doing their part to feed the hungry and save food at the same time. Join us!"
          // image="https://source.unsplash.com/collection/404339/800x600"
          image="https://images.unsplash.com/photo-1619371067654-315ebd0f0087?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
          ctaText="List Your Food"
          ctaLink="/login"
        />
      </LandingLayout>
       

	)
}