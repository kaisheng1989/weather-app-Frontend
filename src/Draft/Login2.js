import React from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import logo from "../assets/logo.png";

// This will be in charge of the Login Page.
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = () => {
    /*alert(`Hello${this.state.name} Email:${this.state.email}`)*/

    let data = JSON.stringify({
      Name: `${this.state.name}`,
      Email: `${this.state.email}`,
    });
    localStorage.setItem("user", data);
  };

  render() {
    return (
      // The background is on the full screen. Background color is bg zinc 900. Opacity @ 50.
      //Use relative to position an element according to the normal flow of the document.
      <div className="relative w-full h-screen bg-zinc-800/50">
        <img
          className="absolute w-full h-full object-cover mix-blend-overlay"
          src={logo}
          alt=""
        />

        <div className="flex justify-center items-center h-full ">
          {/*round 3xl -> border-radius: 1.5rem;  24px   */}
          <form className="max-w-[500px] w-full mx-auto bg-white p-8 rounded-3xl ">
            {/*py -8 (Padding top and bottom by 8)  */}
            <h2 className="text-5xl font-bold text-center py-6"> Login</h2>
            <div className="flex justify-between py-8">
              <p className="border shadow-lg hover:shadow-xl px-12 py-2 relative flex items-center">
                <AiFillFacebook className="mr-2" /> Facebook
              </p>
              <p className="border shadow-lg hover:shadow-xl px-12 py-2 relative flex items-center">
                <FcGoogle className="mr-2" /> Google
              </p>
            </div>
            {/*Div to take care of the name  */}
            <div className="flex flex-col mb-4">
              <label className="ml-5 font-bold text-2xl ">Name: </label>
              <input
                className="border relative bg-gray-200 p-5"
                type="text"
                name="name"
                placeholder="Enter Name:"
                value={this.state.name}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            {/*Div to take care of the email */}
            <div className="flex flex-col mb-4">
              <label className="ml-5 font-bold text-2xl ">Email: </label>
              <input
                className="border relative bg-gray-200 p-5"
                type="text"
                name="email"
                placeholder="Enter Email:"
                value={this.state.email}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <input
              className="w-full py-3 mt-8 bg-yellow-600 hover:bg-yellow-500 rounded-3xl relative text-white"
              type="submit"
              value="Sign In"
              onClick={this.handleSubmit}
            />
          </form>
        </div>
      </div>

      //
    );
  }
}
