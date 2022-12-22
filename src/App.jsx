import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import React from 'react'
import './App.css';
import Particle from './components/Particle';
import { Component } from 'react'
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Dashboard from './scenes/Dashboard/Dashboard';




const initialState = {
  input: '',
  imageUrl: '',
  route: 'signin', 
  isSignedIn: false,
  user:{
   id: '',
   name: '',
   email: '',
   entries: 0,
   joined: ''
  }
}

class App extends Component {
constructor(){
  super();
  this.state = {
     input: '',
     imageUrl: '',
     route: 'signin', 
     isSignedIn: false,
     user:{
      id: '',
      name: '',
      email: '',
      entries: 0,
      joined: ''
     }
  }
  
  
} 



loadUser = (data) => {
  this.setState({user: {
    id: data.id,
    name: data.name,
    email: data.email,
    entries: data.entries,
    joined: data.joined
  }})
}

onInputChange = (event) => {
  this.setState({input: event.target.value})
}


autoReloader = () => {
  this.setState({imageUrl: this.state.input})
}


onButtonSubmit = () => {
  this.setState({imageUrl: this.state.input})

}

updateCount = (count) => {
  this.setState(Object.assign(this.state.user, {entries: count}))
}

onRouteChange = (route) => {

 
  if (route === "home"){
    this.setState({isSignedIn: true})
  }
  else if (route === "signout"){
    this.setState({isSignedIn: false})
  }
  else if (route === "signin"){
    this.setState({isSignedIn: false})
    this.setState(initialState)

  }
 
  this.setState({route: route})
}

//total orders chart
getTotalOrders = () => {

}

render(){
  const {isSignedIn, imageUrl} = this.state;
  return (
    <div className="App">

        
    {/* <Navigation isSignedIn = {isSignedIn} onRouteChange={this.onRouteChange}/>
    <Logo /> */}
  { this.state.route === 'home' ?
      
    <div>
      
      
    {/* <Rank name={this.state.user.name} entries={this.state.user.entries}/>
    <ImageLinkForm onInputChange = {this.onInputChange} 
                   onButtonSubmit = {this.onButtonSubmit}
                   onRouteChange = {this.onRouteChange}/> */}

    {/* {!this.state.imageUrl == "" ? (<FaceRecognition updateCount = {this.updateCount} id = {this.state.user.id} imageUrl = {imageUrl}/>  ) 
    : null} */}

    <Dashboard />
      
    </div>
      
      
    :
    // (this.state.route === 'signin' ? 
    // <Signin loadUser={this.loadUser} onRouteChange = {this.onRouteChange}/>
    // : <Register loadUser = {this.loadUser} onRouteChange = {this.onRouteChange}/>
    // )
    <Dashboard />
      

  }
   


      
</div>
  );
}}



export default App;
