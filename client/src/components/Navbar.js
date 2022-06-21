import React from "react"
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div className='nav-wrapper white'>
      <nav>
        <Link to='./' alt='instafam logo' className='brand-logo left'>
          Instafam
        </Link>
        <ul id='nav-mobile' className='right'>
          <li>
            <Link to='/signin'>signin</Link>
          </li>
          <li>
            <Link to='/signup'>signup</Link>
          </li>
          <li>
            <Link to='/profile'>profile</Link>
          </li>
          <li>
            <Link to='/create'>createPost</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
