// import React from 'react'
import './CardsTwo.css'
import {Link} from 'react-router-dom'
const CardsTwo = () => {
  return (
    <div className='Cards' >
      <div className='firs'>
<h2></h2>
      </div>
      <div className='sec'>
        <p style={{color:"grey"}}>FAST, RELIABLE CHECKOUT</p><br />
        <h3 style={{color:"black",fontSize:"20px"}}>The best-converting <br />checkout on the planet</h3><br />
        <p style={{fontSize:"20px"}}>Back your buisness with Shop Pay - the one-click checkout thats built to convert.</p><br /><br />
        <Link to="https://www.shopify.com/checkout">
       
        <p style={{color:"black"}}>Seize every sale </p><br />
        <hr style={{color:"black"}} />

        </Link>
      </div>
    <br /><br /><br /><br />
    </div>

  )
}

export default CardsTwo
