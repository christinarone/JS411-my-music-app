import Header from "./components/Header"
import Dashboard from "./components/Dashboard";
import './App.css';
import Login from "./components/Login";
import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn]=useState(false)




  return (
    <div className="App">
      <Header/>
    {!loggedIn ? <Login setLoggedIn={setLoggedIn}/> : <Dashboard/>}


    

    </div>
  );
}

export default App;
