import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <nav className='navbar container'>
        <div className="left">
            <h3 id='heading'>Chaitanya Karthik</h3></div>
        <div className="right">

        <div>
            <Link to={"/"} className='text-lg'>Home</Link>
            <Link to={"/about"} className='text-lg'>About Me</Link>
            <Link to={"/portfolio"} className='text-lg'>Portfolio</Link>
            <Link to={"/testimonials"} className='text-lg'>Testimonials</Link>



        </div>

        <button className='btn btn-primary'>Contact Me</button>
        
        </div>
        

      </nav>
    </>
  )
}

export default Navbar