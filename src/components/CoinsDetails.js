import React from 'react'
import { useEffect,useState } from 'react'
import { Baseurl } from './baseurl'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import coinImage from '../coin.png'
import './CoinDetails.css'

function CoinsDetails() {
    const [coin,SetCoin]=useState([])
    
    const {id}=useParams();
    useEffect(()=>{
        const getCoin= async()=>{
            try {
                const {data}= await axios.get(`${Baseurl}/coins/${id}`)
                console.log(data);
                SetCoin(data)
                
            } catch (error) {
                console.log(error)
                
            }

        }
        getCoin();

    },[id])

  return (
    <>
    <div className='coin-detail'>
    <div className='coin-info'>
        <div className='time'>
         {coin.last_updated}

        </div>
        <div className='coin-image'>
            <img  height={"120px"}src={coin.image.large}alt=''></img>
        </div>
        <div className='coin-name'>
            {coin.name}
        </div>
       <div className='coin-price'>
       83.46
       </div>
       <div className='coin-market-cap'>
        #{coin.market_cap_rank}
       </div>
       <div className='coin-decription'>
        <p>{coin.description['en'].split('.')[1]}</p>
       </div>
    </div>
    
    </div>
    
    </>
  )
}

export default CoinsDetails
