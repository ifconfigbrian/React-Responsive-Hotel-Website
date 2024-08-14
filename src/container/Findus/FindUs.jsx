import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  //Contains the contact details, opening hours, and a button to visit
  <div className='app__bg app__wrapper section__padding'id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title="Contact"/>
      <h1 className='headtext__cormorant' style={{marginBottom:'3rem'}}>Find Us</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>Lane Penguin Bungalow,Gotham Hills,Atlantic,CW8 54B</p>
        <p className='p__cormorant' style={{color:'#DCCA87',margin:'2rem 0'}}>Opening Hours</p>
        <p className='p__opensans'>Mon - Fri: 10:00 am - 02:00Am</p>
        <p className='p__opensans'>Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button className='custom__button' style={{marginTop:'2rem'}} onClick={() => window.open('https://www.google.com/maps', '_blank')}>
  Visit Us
</button>


    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus} alt="find us" />
    </div>
  </div>
);

export default FindUs;
