import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
       <nav>
      <ul>
        {/* <li><Link className="active"  to="Contact">Home</Link></li> */}
        {/* <li><Link  to="#news">News</Link></li> */}
        {/* <li><Link  to="About">About</Link></li> */}
        <li > <Link  className = "active"to="Contact">Contact</Link></li>
  </ul>
  </nav>
    </div>
  )
}
