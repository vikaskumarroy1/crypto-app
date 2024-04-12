import React, { useState } from 'react'
import Header from './Header'
import { useEffect } from 'react';
import axios from "axios"
import { Baseurl } from './baseurl';
import coin from '../coin.png'
import './Exchange.css'




function Exchange() {

  const [exchanges,SetExchanges]=useState([])
  
  
  useEffect(()=>{
    const getExchangeData= async()=>{
      const {data}= await axios.get(`${Baseurl}/exchanges`)
      console.log(data);
      SetExchanges(data)
      
    }
    getExchangeData()

},[])

  return (
   <>
    <Header/>
    <div>
    {
      exchanges.map((item,i)=>{
        return(
          <div className='ex-cards' key={i}>
      <div >
        <div className='image'>
          <img height={"80px"} src={item.image} alt=''></img>
        </div>

      </div>
      <div className='name'>
        {item.name}
      </div>
      <div className='price'>
        {item.trade_volume_24h_btc.toFixed(0)}
      </div>
      <div className='rank'>
        {item.trust_score_rank
   }
      </div>
    </div>
        )
      })
    }
    </div>

  
   </>
  )
}

export default Exchange
