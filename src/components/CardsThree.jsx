// import React from 'react'
import {Link} from 'react-router-dom'
import './CardsThree.css'
const CardsThree = () => {
  return (
    <div className='Cards'>
      <div className="firs">
        <p>POINT OF SALE</p><br />
        <h1 style={{fontSize:"22px",color:"black"}}>Flexible point of sale to <br />power your retail store</h1><br />
        <p style={{fontSize:"12px"}}>A POS system that allows customers to shop their way, from online to checkout line.</p><br /><br />
      <Link to="https://www.shopify.com/pos">
        <p style={{color:"black"}}>Meet Shopify POS</p><br />
        <hr style={{color:"black"}}/>
      </Link>
      </div>
      <div className="sec">
<img src="https://cdn.shopify.com/shopifycloud/brochure/assets/home/redesign2022/pos-2-small-2bceb2e9fd90de0e825252632b00f723978536c6c4535e44468dfc31a7cef8f0.webp" alt="12" width={'600px'}/>
      </div>
    </div>
  )
}

export default CardsThree
