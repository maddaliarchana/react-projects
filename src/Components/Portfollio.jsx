import React from 'react'
import Navbar from './Navbar'
import Portfolionav from '../portfolio/Portfolionav'
import { Link } from 'react-router-dom'

const Portfollio = () => {
  return (
    <>
   {/* <Portfolionav/> */}
    <div className="portfolio">
      <center>
      About me
      testyuiuu
        
        
        

        <nav>
      <a href="#section1">Go to Section 1</a>
      <a href="#section2">Go to Section 2</a>
    </nav>
    <div id="section1" style={{ height: '100vh', backgroundColor: 'lightblue' }}>
      <h2>Section 1</h2>
    </div>
    <div id="section2" style={{ height: '100vh', backgroundColor: 'lightgreen' }}>
      <h2>Section 2</h2>
    </div>
  




        </center>
    </div>
    </>
  )
}

export default Portfollio
