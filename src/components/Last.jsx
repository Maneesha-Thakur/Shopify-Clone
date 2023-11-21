import React from 'react'
import './Last.css'
import { Link } from 'react-router-dom'
const Last = () => {
  return (
    <div className='main1'>
      <img src="data:image/png;base64,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" alt="" width={"83px"} />

     <div className='All'>

     
     <div>
        <h4>Shopify</h4><br />
        <Link to="https://www.shopify.com/about"><p>About</p></Link><br />
        <Link to="https://www.shopify.com/careers"><p>Careers</p></Link><br />
        <Link to="https://investors.shopify.com/home/default.aspx"><p>Investors</p></Link><br />
        <Link to="https://news.shopify.com/"><p>Press and Media</p></Link><br />
        <Link to="https://www.shopify.com/partners"><p>Partners</p></Link><br />
        <Link to="https://www.shopify.com/affiliates"><p>Affiliates</p></Link><br />
        <Link to="https://www.shopify.com/legal"><p>Legal</p></Link><br />
        <Link to="https://www.shopifystatus.com/"><p>Service status</p></Link><br />
             </div>
     <div >
        <h4>Support</h4><br />
        <Link to="https://help.shopify.com/en">
            <p>Merchant support</p>
        </Link><br />
        <Link to="https://help.shopify.com/en/">
            <p>Help center</p>
        </Link><br />
        <Link to="https://www.shopify.com/partners/directory">
            <p>Hire a Partner</p>
        </Link><br />
        <Link to="https://community.shopify.com/c/shopify-community/ct-p/en?utm_campaign=footer&utm_content=en&utm_medium=web&utm_source=shopify">
            <p>Shopify Community</p>
        </Link><br />
        <Link to="https://community.shopify.com/c/shopify-community/ct-p/en/home?utm_campaign=homepage&utm_content=en&utm_medium=web&utm_source=shopify">
            <p>Shopify Events</p>
        </Link><br />
     </div>
     <div >
        <h4>Developers</h4><br />
        <Link  to="https://shopify.dev/">
            <p>Shopify.dev</p>
        </Link><br />
        <Link to="https://shopify.dev/docs/api">
            <p>API documentation</p>
        </Link><br />
        <Link to="https://devdegree.ca/">
            <p>Dev Degree</p>
        </Link><br />
     </div>
     <div>
        <h4>Products</h4><br />
        <Link to="https://shop.app/">
            <p>Shop</p>
        </Link><br />
        <Link to="https://www.shopify.com/shop-pay">
            <p>Shop Pay</p>
        </Link><br />
        <Link to="https://www.shopify.com/plus">
            <p>Shopify Plus</p>
        </Link><br />
        <Link to="https://www.shopify.com/fulfillment">
            <p>Shopify Fulfillment Network</p>
        </Link><br />
        <Link to="https://linkpop.com/en/">
            <p>Linkpop</p>
        </Link><br />
        <Link to="https://www.shopify.com/commerce-components">
            <p>Commerce Components</p>
        </Link><br />
     </div>
     <div className="All1">
        
     <div >
        <h4>Global impact</h4> <br />
        <Link to="https://www.shopify.com/climate">
            <p>Sustainability</p>
        </Link><br />
        <Link to="https://www.shopify.com/about/social-impact">
            <p>Social impact</p>
        </Link><br />
        <Link to="https://community.shopify.com/c/events/eb-p/events_en">
            <p>Build Black</p>
        </Link><br />
        <Link to="https://buildnative.shop/">
            <p>Build Native</p>
        </Link><br />
        <Link to="https://www.shopify.com/plus/commerce-trends">
            <p>Research</p>
        </Link><br />
<div>

        <h4>Solutions</h4><br />
        <Link to="https://www.shopify.com/online">
            <p>Online store builder</p>
        </Link><br />
        <Link to="https://www.shopify.com/website/builder">
            <p>Website builder</p>
        </Link><br />
        <Link to="https://www.shopify.com/tour/ecommerce-website">
            <p>Ecommerce website</p>
        </Link><br />
</div>
     </div>
     <br /><br /><br />
   
     <br /><br />
    </div>
    </div>
    </div>
  )
}

export default Last
