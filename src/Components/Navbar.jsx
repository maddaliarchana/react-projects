import React from 'react'
import { Link } from 'react-router-dom'
import '../app.css';

const Navbar = () => {
  return (
  <>
    <div className='navbar'>
        <div className="log">
            <Link to='/'>
            <img src=""alt="Achana"/>
            </Link>
        </div>
        <div className='nav-list'>
            <ul>
            <Link to='/calculator'> 
                <li>Calculator</li>
            </Link>
            <Link to='/todo'> 
                <li>TO DO list</li>
            </Link>
            <Link to='/shoping'> 
                <li>shoping</li>
            </Link>
            <Link to='/weather'> 
                <li>Weather</li>
            </Link>
            <Link to='/quiz'> 
                <li>Quiz</li>
            </Link>
            <Link to='/admin'> 
                <li>Admin Panel</li>
            </Link>
            <Link to='/contact'> 
                <li>Contact</li>
            </Link>
                
               
            </ul>
        </div>
        {/* <div className="nav-search">
            <input type="text" placeholder='search...'/>
            <Link><button className='nav-btn'>Login/signup</button></Link>
            </div> */}
    </div>
  </>
  )
}

export default Navbar
