import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Giver from './components/Giver'
import Receiver from './components/Receiver'
import Home from './components/Home'
import Header from './components/Header'
import { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setListings, fetchFoodListings} from './redux/foodListingSlice'

function App() {
  const giver = useSelector(state => state.giver)
  const receiver = useSelector(state => state.receiver)
  const dispatch = useDispatch()


  useEffect(()=>{
    fetch(`http://localhost:3000/food_givers/${giver.id}`)
      .then(res => res.json())
      .then(data => {
        dispatch(setListings(data.food_listings))
      })
    }, [])

  
return (
    
  <div className="App">
  <Route> 
    <Header/> 
  </Route>
  
  <Switch>
  <Route exact path="/"> 
      <Home/>
    </Route>
    <Route exact path="/giver/:id"> 
      <Giver/> 
    </Route>
    <Route exact path="/listings"> 
      <Receiver /> 
    </Route>

  </Switch>
  </div>
)

}

export default App;
