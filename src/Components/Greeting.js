import React, { Component } from 'react'
import Weather from "./Weather";
import Login from "./Login";

 export default class Greeting extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedin:false 
    }
  }
  handleLogin = ()=>{
    this.setState({
      isLoggedin:true})
      
    
  }
  render() {
    if(this.state.isLoggedin){
      return(
        <div>
          <Weather/>
        </div>
      )
    } else {
      return (
        <div>
          <Login login={this.handleLogin} /> 
        </div>
      )

    }
    

}
 }

