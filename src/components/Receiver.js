import { useState, useEffect } from 'react';
import FoodListings from './FoodListings';

function Receiver(){

    const [foodListings, setFoodListings] = useState([])

    const getUser = localStorage.getItem('user')
    const currentUser = JSON.parse(getUser)

    useEffect(() => {
        fetch(`http://localhost:3000/food_listings`)
            .then(res => res.json())
            .then(setFoodListings)
    }, [])

    console.log(foodListings)

    return(
        <div>
        <p>Main Container</p>
        <FoodListings foodListings={foodListings}/>
        </div>
    )
}

export default Receiver