import React from 'react'
import { Route, Switch } from 'react-router';
import { ToastContainer } from 'react-toastify';
import AddComponent from './components/AddComponent';
import EditComponent from './components/EditComponent';
import Home from './components/Home';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <div className="App">
    <ToastContainer/>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={()=> <Home/>} />
        
        <Route  path="/add" component={()=> <AddComponent/>} />
        
        <Route path="/edit/:id"component={()=> <EditComponent/>} />
     
      </Switch>
      
    </div>
  )
}

export default App
