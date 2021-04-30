import { useState, useEffect } from 'react';
import FoodListings from './FoodListings';

function Giver(){

    const [foodListings, setFoodListings] = useState([])

    const getUser = localStorage.getItem('user')
    const currentUser = JSON.parse(getUser)

    useEffect(() => {
        fetch(`http://localhost:3000/food_givers/1`)
            .then(res => res.json())
            .then(data => setFoodListings(data.food_listings))
    }, [])

    console.log(foodListings)

    return(
        <div>
        <p>Main Container</p>
        <FoodListings foodListings={foodListings}/>
        </div>
    )
}

export default Giver