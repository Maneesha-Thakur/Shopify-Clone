import React, { useState, useEffect } from 'react';
import './Slider.css'; 

const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
    
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="slid">
<p style={{marginLeft:"300px"}}>BUILD AN ONLINE STORE</p>
<br />
<h1 style={{marginLeft:"300px",fontSize:"bolder",fontWeight:"18px"}}>Your store, your way</h1>
<br /><br /><br />
    <div className="auto-slider-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
        >
        
          <img src={slide.imageUrl} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
    <br /><br />
<hr />
<br />
<div className="ca">

<div className="ca1">
    <h3>Build an online storefront</h3><br />
    <p>Bring your vision to life with our drag-and-drop store <br /> creator. No codng expertise required -- just your next <br /> bid idea.</p><br />
    <a href="https://www.shopify.com/online"><p>Online store Builder</p></a><hr />
</div>
<div className="ca1">
    <h3>Creaft the brand you want</h3><br />
    <p>Select from customizable templates created by a <br />community of world-class desiners.</p><br />
    <a href="https://themes.shopify.com/?locale=en"><p>Theme Store</p></a><hr />
</div>
<div className="ca1">
    <h3>Level up with apps</h3><br />
    <p>Add more features and functionality to your online store with apps built by trusted Shopify developrs.</p><br />
    <a href="https://www.shopify.com/?utm_source=ExpiredDomainLink&utm_medium=textlink&utm_campaign=breadcrumb">Shopify App Store</a><hr />
 
</div>
    </div>
    <br /><br /><br /><br />
</div>
    
  );
};

export default Slider;
