import React from 'react'
import Navbar from './Navbar'
import Shopnavbar from '../shoping/Shopnavbar'
import {mobileData} from '../shoping/data/mobiles';
import {computerData} from '../shoping/data/computers';
import {kitchenData} from '../shoping/data/kitchen';
import {fridgeData} from '../shoping/data/fridge'
import {watchData} from '../shoping/data/watch'
import {acData} from '../shoping/data/ac'



const Shoping = () => {
   console.log(mobileData);
  const mobile=mobileData.slice(0,5);
  const computer=computerData.slice(0,5);
  const kitchen=kitchenData.slice(0,5);
  const fridge=fridgeData.slice(0,5);
  const watch=watchData.slice(0,5);
  const ac=acData.slice(0,5);
  console.log(kitchen);
  console.log(fridge);
  
  
  return (
    <>
    <Navbar/>
    <Shopnavbar/>
    <div className="proTitle">
    <h2>Mobiles</h2></div>
    <div className='proSection'>
      {
        mobile.map((item)=>{
        return(
            <div className='imageBox'>
            
            <div className="proImage">

            <img className='proImage1' src={item.image}  alt="image"/>
            Name:{item.company}<br/>
            Price:{item.price}<br/>
            Model:{item.model}<br/>
            Description:{item.description}
            </div>

            </div>
        )
      })
      }
    </div>

    {/* computer */}
    <div className="proTitle">
    <h2>Computer</h2></div>
    <div className='proSection'>
      {
        computer.map((item)=>{
        return(
            <div className='imageBox'>
                <img className='proImage' src={item.image}  alt="image"/>
            {item.price}
            </div>
        )
      })
      }
    </div>

  {/* kitchen */}
  <div className="proTitle">
    <h2>Kitchen</h2></div>
    <div className='proSection'>
      {
        kitchen.map((item)=>{
        return(
            <div className='imageBox'>
                <img className='proImage' src={item.image}  alt="image"/>
            {item.price}
            </div>
        )
      })
      }
    </div>
    {/* Watches */}
    <div className="proTitle">
    <h2>Watch</h2></div>
    <div className='proSection'>
      {
        watch.map((item)=>{
        return(
            <div className='imageBox'>
                <img className='proImage' src={item.image}  alt="image"/>
            {item.price}
            </div>
        )
      })
      }
    </div>
    {/* Fridge */}
    <div className="proTitle">
    <h2>Fridge</h2></div>
    <div className='proSection'>
      {
        fridge.map((item)=>{
        return(
            <div className='imageBox'>
                <img className='proImage' src={item.image}  alt="image"/>
            {item.price}
            </div>
        )
      })
      }
    </div>
     {/* AC */}
     <div className="proTitle">
    <h2>Ac</h2></div>
    <div className='proSection'>
      {
        ac.map((item)=>{
        return(
            <div className='imageBox'>
                <img className='proImage' src={item.image}  alt="image"/>
            {item.price}
            </div>
        )
      })
      }
    </div>
    
    </>
  )
}

export default Shoping
