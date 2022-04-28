import React from "react";
import Form from "./Form";
import Login from "./Login.jsx";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
      {/* {userIsRegistered ? <Form /> : <Login /> } */}
    </div>
  );
}

export default App;
