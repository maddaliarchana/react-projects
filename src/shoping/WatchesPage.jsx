import React from 'react'
import Navbar from '../Components/Navbar'
import Shopnavbar from './Shopnavbar'
import {watchData} from '../shoping/data/watch'

const WatchesPage = () => {
  return (
   <>
   <Navbar/>
   <Shopnavbar/>
   <div className="watchsection">
       
            {watchData.map((list)=>{
                return(
                <div className="display-watches">
                    <div className="watchimg">
                        <img src={list.image} alt="watch image"/>
                    </div>
                    <div className="watchprice">
                        PRICE:{list.price}
                    </div>
                    <div className="watchname">
                        NAME:{list.name}
                    </div>
                    <div className="wacthdesc">
                        <p>{list.description}</p>
                    </div>
                </div>
                )
            })}
        </div>
   
   </>
  )
}

export default WatchesPage
