import React, { useContext } from "react"
import { Link, useHistory } from "react-router-dom"
import { UserContext } from "../App"
const Navbar = () => {
  const history = useHistory()
  const { state, dispatch } = useContext(UserContext)
  const renderList = () => {
    if (state) {
      return [
        <li>
          <Link to='/profile'>profile</Link>
        </li>,
        <li>
          <Link to='/create'>createPost</Link>
        </li>,
        <li>
          <button
            className='btn #c62828 red darken-3'
            style={{
              marginTop: "15px",
              fontSize: "14px",
            }}
            onClick={() => {
              localStorage.clear()
              dispatch({ type: "CLEAR" })
              history.push("./signin")
            }}
          >
            Logout
          </button>
        </li>,
      ]
    } else {
      return [
        <li>
          <Link to='/signin'>signin</Link>
        </li>,
        <li>
          <Link to='/signup'>signup</Link>
        </li>,
      ]
    }
  }
  return (
    <div className='nav-wrapper white'>
      <nav>
        <Link
          to={state ? "/" : "/signin"}
          alt='instafam logo'
          className='brand-logo left'
        >
          Instafam
        </Link>
        <ul id='nav-mobile' className='right'>
          {renderList()}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
