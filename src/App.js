import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Giver from './components/Giver';
import Receiver from './components/Receiver'
import { useSelector } from "react-redux";
import Home from './components/Home'

function App() {
  const giver = useSelector(state => state.giver)
  const receiver = useSelector(state => state.receiver)
  
  
return (
    
  <>
   
  <Switch>
  <Route exact path="/"> 
      <Home/>
    </Route>
    <Route exact path="/giver"> 
      {giver ? 
      
      <Giver/> 
      
      : null}
    </Route>
    <Route exact path="/listings"> 
      {receiver ? <Receiver /> : null}
    </Route>

  </Switch>
  </>
)

}

export default App;
