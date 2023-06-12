import React from 'react'

export default class Forms extends React.Component{
  constructor(props){
  super(props)
  this.state ={
    name:'',
    email:''
    
  }

  }

handleChange =(e) =>{
 let {name, value}= e.target 
 this.setState({
  [name]:value
 })
}




handleSubmit =()=>{
/*alert(`Hello${this.state.name} Email:${this.state.email}`)*/
  
  let data =JSON.stringify({Name:`${this.state.name}`, Email:`${this.state.email}`})
localStorage.setItem("user",data);


}

  render(){
    return (
      <div>
        <form>
          <label>Name:</label>
          <input
            
            type="text"
            name="name"
            placeholder="Enter Name:"
            value={this.state.name}
            onChange={(e) => this.handleChange(e)}
          />
          <br/>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            placeholder="Enter Email:"
            value={this.state.email}
            onChange={(e)=>this.handleChange(e)}
          />
          <br/>
          <input type="submit" value="submit" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}
