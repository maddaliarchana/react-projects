import React from 'react'
import Navbar from '../Components/Navbar'
import Shopnavbar from './Shopnavbar'
import {acData} from '../shoping/data/ac'

const AcsPage = () => {
  return (
   <>
   <Navbar/>
   <Shopnavbar/>
  <div className="acsection">
    {
        acData.map((list)=>{
            return(
                <div className="as-display">
                    <div className="proImg">
                        <img src={list.image} alt="image"/>
                    </div>
                    <div className="proname">
                        NAME:{list.name}
                    </div>
                </div>
            )
        })
    }

  </div>
   </>
  )
}

export default AcsPage
