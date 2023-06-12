import "./App.css";
import React from "react";
import Forms from "./Components/Forms";

class App extends React.Component {
  render() {
    return (
      <div className="bg-gradient-to-br from-cyan-700 to-blue-700 flex flex-wrap max-w-screen-2xl mx-auto justify-center mt-4 py-5 px-32">
        <div className="App">
          <Forms />
        </div>
      </div>
    );
  }
}

export default App;
