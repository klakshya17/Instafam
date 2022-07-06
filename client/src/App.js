import React, { useEffect, createContext, useReducer, useContext } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom"
import Home from "./screens/Home"
import Login from "./screens/Signin"
import Profile from "./screens/Profile"
import Signup from "./screens/Signup"
import CreatePost from "./screens/createPost"
import { initialState, reducer } from "./reducers/userReducer"
import UserProfile from "./screens/UserProfile"
export const UserContext = createContext()

const Routing = () => {
  const history = useHistory()
  const { state, dispatch } = useContext(UserContext)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    if (user) {
      dispatch({ type: "USER", payload: user })
      history.push("./")
    } else {
      history.push("./signin")
    }
  }, [])
  return (
    <Switch>
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
      <Route path='/profile/:userid'>
        <UserProfile />
      </Route>
      <Route exact path='/create'>
        <CreatePost />
      </Route>
    </Switch>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <UserContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Navbar />
          <Routing />
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  )
}

export default App
