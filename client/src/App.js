import React from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import { BrowserRouter, Route } from "react-router-dom"
import Home from "./screens/Home"
import Login from "./screens/Signin"
import Profile from "./screens/Profile"
import Signup from "./screens/Signup"
import CreatePost from "./screens/createPost"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route exact path='/'>
          <Home />
        </Route>

        <Route exact path='/signup'>
          <Signup />
        </Route>

        <Route exact path='/signin'>
          <Login />
        </Route>

        <Route exact path='/profile'>
          <Profile />
        </Route>
        <Route exact path='/create'>
          <CreatePost />
        </Route>
      </BrowserRouter>
    </div>
  )
}

export default App
