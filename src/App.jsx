import './App.css'
import React,{useEffect} from 'react'
// import video from './asset/video.mp4'
import Navbar from './components/navbar'
import Second from './components/Second'
import Cards from './components/Cards'
import Slider from './components/Slider'
import Sales from './components/Sales'
import CardsTwo from './components/CardsTwo'
import CardsThree from './components/CardsThree'
import BuiltIn from './components/BuiltIn'
import Meet from './components/Meet'
import Last from './components/Last'

const App = () => {
  const slides = [
    { imageUrl: 'https://unsplash.com/blog/content/images/2022/08/Travel-Samsung--Blog---1--1.jpg' },
    { imageUrl: 'https://unsplash.com/blog/content/images/2022/11/ezgif.com-gif-maker.gif' },
    { imageUrl: 'https://unsplash.com/blog/content/images/2022/08/Girls-vs-Stereotypes-c.gif' },
    ];
  useEffect(() => {
       
    document.title = 'Start and grow your e-commerce buisness -3-Day Free Trial - Shopif...';

    return () => {
      document.title = 'Original Taskbar Name';
    };
  }, []);
  return (
    <div className="parent">
    <div className='main' >
      {/* <video className='videoOne' src={video} autoPlay loop muted > */}
      <video className='videoOne' src="https://media.istockphoto.com/id/1495560155/video/busy-activity-in-diverse-business-office-with-business-people-working-multi-tasking-in.mp4?s=mp4-640x640-is&k=20&c=m-pQeg9fRfap8Ym_PX4it1rZX_XkQbU7nuvtLGubeoI=" autoPlay loop muted >
      </video>
    <Navbar/>
    <br /><br />
    
    <div className="content">
      <br /> <br /> <br /> <br /> 
      
      <h1 style={{color:"white",fontSize:"45px"}}>Making Commerce Better for <br /> Everyone</h1>
      <br /><br />
      <p style={{color:"white"}} >Shopify is supporting the next generation of enterprenuers, the worlds biggest brands, and <br />everyine in between</p>
    </div>
    <br /><br /><br />
    <div className="freetrial">
      <div>
       <a href="https://accounts.shopify.com/store-create?language=en&locale=en&signup_page=https%3A%2F%2Fwww.shopify.com%2F&signup_types%5B%5D=paid_trial_experience&_y=ba9f72f9-c516-419d-a58a-2f28196ae929&_s=98111032-1ac9-4329-bb30-4413a91b406a&_p=118421a4-7ae7-4bae-9a8c-b6f6e91c7745">

       <button style={{backgroundColor:"white",color:"black",borderRadius:"20px"}}>Start free trial</button>
       </a>
      </div>
      <div>
        <p style={{color:"#fff",marginLeft:"20px",fontSize:"15px"}}>start for free, then get your <br /> first 3 months for ₹20/mo.</p>
      </div>
      <div>
        <button style={{backgroundColor:"transparent",border:"1px solid white",borderRadius:"19px",marginLeft:"600px",cursor:"pointer"}}>  <span className="play-button"style={{color:"white"}}>▶</span>Watch the Shopify story</button>
      </div>
    </div>

<br /><br />
<Second/>
<br /><br /><br />
<Cards/>
<br /><br /><br /><br />
<Slider slides={slides}/>
<br /><br />
<Sales/>
<CardsTwo/>
<CardsThree/>
<BuiltIn/>
<Meet/>
<br />
<br /><br />
<Last/>
    </div>
    </div>
  )
}

export default App
