import React from 'react'
import { useState,useEffect } from 'react'
import { Baseurl } from './baseurl'
import axios from 'axios'
import Header from './Header'
import { Link } from 'react-router-dom'

 const Coins=()=>{
    
  const [coins,setCoins]=useState([])
  const [currency,SetCurrency]=useState("inr")
  const[search,SetSearch]=useState("")
  
  const currencySymbol= currency==="inr" ? '₹':'$'
  useEffect(()=>{
    const getCoinsData= async()=>{
      const {data}= await axios.get(`${Baseurl}/coins/markets?vs_currency=${currency}`)
      console.log(data);
      setCoins(data)
      
    }
    getCoinsData()

},[currency])
    return(
        <div>
            <Header/>
            <div className='search-bar'>
              <input type='text' placeholder='Seacrh Your Coins' style={{height:"2rem",width:"20rem" ,position:"absolute"
              ,top:"1%",left:"35%",marginLeft:"35px"}} onChange={(e)=>{
                SetSearch(e.target.value)

              }}></input>
            </div>
            <div className='btns'>
                <button onClick={()=>{
                    SetCurrency("inr")
                }}>Inr</button>
                <button onClick={()=>{
                    SetCurrency("usd")
                }}>Usd</button>
            </div>
            {
                coins.filter((data)=>{
                  if(data== ""){
                    return data
                  }else if(data.name.toLowerCase().includes(search.toLowerCase())){
                    return data
                  }

                }).map((coindata,i)=>{
                    return(
                       <CoinCard  coindata={coindata} i={i} currencySymbol={currencySymbol} id={coindata.id}/> 

                    )
                })
            }

        </div>
    )
 }
const CoinCard=({coindata,i,currencySymbol,id})=>{
    const profit=coindata.market_cap_change_percentage_24h>0
    return(
        <Link to={`/coins/${id}`} style={{color:"white",textDecoration:"none"}}>
        <div className='ex-cards' key={i}>
                        <div >
                          <div className='image'>
                            <img height={"80px"} src={coindata.image} alt=''></img>
                          </div>
                  
                        </div>
                        <div className='name'>
                          {coindata.name}
                        </div>
                        <div className='price'>
                          {currencySymbol}{coindata.current_price}
                        </div>
                        <div style={profit? {color:"green"}:{color:"red"}} className='rank'>
                          { profit ? "+" + coindata.market_cap_change_percentage_24h.toFixed(2) : coindata.market_cap_change_percentage_24h.toFixed(2)}
                     
                        </div>
                      </div>
                      </Link>
    )
}
export default Coins
