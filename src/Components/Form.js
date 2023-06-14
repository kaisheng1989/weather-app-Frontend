import React from "react";
//import Weather from "./Weather";
//import {useNavigate} from"react-router-dom"
//const navigate = {useNavigate};

//Creating a two way binding.
// Where input on the text bar can be capture and autenticated. 
export default class Form extends React.Component {
  // Capture the value.
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }
  // Excutes login
  onLoginClick = () => {
    
    console.log(this.state);
    if (
      this.state.email === "kaisheng1989@gmail.com" &&
      this.state.name === "kaisheng"&&
      this.props.onLoginClick()
    ) {
      // sucess
      this.setState({
        message: <span className="text-green-500">Sucessfully Login-in</span>,
        
      }
      
      )
      
    } else {
      this.setState({
        message: (
          <span className="text-red-600">
            Invalid Login, Pl99ease try again.
          </span>
        ),
      });
    }
  };
  render() {
    return (
      <div className="bg-white px-10 py-7 rounded-3xl border-2 border-purple-800">
        <h1 className="text-5xl font-semibold">Welcome Back!</h1>
        <p className="font-medium text-lg text-gray-500 mt-4">
          Welcome back! Please enter your details.
        </p>
        <div className="mt-8">
          <div>
            <label className="text-lg font-medium ">
              Name:
              <input
                className="w-full border-2 border-purple-800 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Enter your name"
                type="text"
                /*Reading the value from the change in the input.  */
                value={this.state.name}
                onChange={(event) => {
                  this.setState({ name: event.target.value });
                  //console.log("name:", this.state.name);
                }}
              />
            </label>
          </div>
          <div>
            {/*Area to input details */}
            <label className="text-lg  font-medium ">
              Email:
              <input
                className="w-full border-2 border-purple-800 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Enter your email"
                type="text"
                value={this.state.email}
                onChange={(event) => {
                  this.setState({ email: event.target.value });
                  //console.log("email:", this.state.email);
                }}
              />
            </label>
          </div>
          <div className="mt-8 flex flex-col gay-y-4">
            {this.state.message}
            <button
              className="active:scale-[.90] active:duration-75 hover:scale-[1.05] ease-in-out transition-all py-4 rounded-xl bg-purple-800 text-white text-lg font-bold"
              onClick={this.onLoginClick}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    );
  }
}
