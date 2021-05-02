import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Giver from './components/Giver';
import Receiver from './components/Receiver'
import { useSelector } from "react-redux";
import Home from './components/Home'
import Header from './components/Header'

function App() {
  const giver = useSelector(state => state.giver)
  const receiver = useSelector(state => state.receiver)
  
  
return (
    
  <div className="App">
  <Route> 
    <Header/> 
  </Route>
  
  <Switch>
  <Route exact path="/"> 
      <Home/>
    </Route>
    <Route exact path="/giver"> 
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
