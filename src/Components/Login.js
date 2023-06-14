import React from 'react'
import Form from "./Form";

function Login(props) {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <Form onLoginClick={props.login} />
      </div>
      {/*Taking full width in desktop and hidden when in mobile */}
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200 ">
         {/* Animation for the Icon to bounce resembling a sun rise. */}
        <div
          className="w-60 h-60 bg-gradient-to-tr
      from-blue-400 to-purple-800 rounded-full animate-bounce"
        />
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg " />
      </div>
    </div>
  );
}

export default Login