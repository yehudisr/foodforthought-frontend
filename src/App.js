
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Giver from './components/Giver'
import Receiver from './components/Receiver'
import Home from './components/Home'
import Header from './components/Header'
import { useSelector, useDispatch } from 'react-redux'
import Footer from './components/Footer'
import SignUp from './components/SignUp'
import About from './components/About'

function App() {
  const giver = useSelector(state => state.giver)
 

  // useEffect(()=>{
  //   fetch(`http://localhost:3000/food_givers/${giver.id}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       dispatch(setListings(data.food_listings))
  //     })
  //   }, [])

  
return (
    
  <div className="App">
  <Route> 
    <Header/> 
   
  </Route>
  
  <Switch>
  <Route exact path="/"> 
      <Home/>
    </Route>
    <Route path="/about">
              <About />
          </Route>
    <Route exact path="/giver/:id"> 
      <Giver/> 
    </Route>
    <Route exact path="/listings"> 
      <Receiver /> 
    </Route>
    <Route exact path="/signup">
              <SignUp />
          </Route>
    <Route path="*">
              <h1>404 not found</h1>
   </Route>
    
  </Switch>
  <Route> 
  <Footer />
  </Route>
  </div>
)

}

export default App;
