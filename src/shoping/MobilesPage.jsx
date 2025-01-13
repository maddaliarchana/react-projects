import React from 'react'
import Navbar from '../Components/Navbar'
import Shopnavbar from './Shopnavbar'
import {mobileData} from './data/mobiles';

const MobilesPage = () => {
    console.log(mobileData);
    
  return (
   <>
   <Navbar/>
   <Shopnavbar/>
   <div className='mobilesection'>
    {mobileData.map((list)=>{
        return(
            <div className='display-mobiles'>
                <div className="mobileimg">
                    <img src={list.image} alt="mobile image"/>
                </div>
                <div className='mobilePrice'>
                    PRICE:{list.price}
                </div>
                <div className="company-name">
                    Name:{list.company}
                </div>
                <div className="description">
                   DESCRIPTION: <p>{list.description}</p>
                </div>
            </div>
        )
    })}

   </div>
   </>
  )
}

export default MobilesPage
