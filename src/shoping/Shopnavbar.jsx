import React from 'react'
import { Link } from 'react-router-dom'

const Shopnavbar = () => {
  return (
    <>
    <div className='shopsection-nav'>
      <div className="shoplogo">
        <Link to="/shoping"><img src="#" alt="shoping logo"/></Link>
      </div>
      <div className='shopnav'>
      <ul>
        <Link to="/shopping/mobiles">
          <li>Mobiles</li>
        </Link>
        <Link to="/shopping/watches">
          <li>Watches</li>
        </Link>
        <Link to="">
           <li>Ac</li>
        </Link>
        <Link to="">
            <li>Computers</li>
        </Link>
        <Link  to="">
            <li>Fridge</li>
        </Link>
        <Link to="">
            <li>Kitchen</li>
        </Link>
      </ul>
      </div>
      <div></div>

    </div>
    </>
  )
}

export default Shopnavbar
