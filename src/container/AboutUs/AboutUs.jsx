import React from 'react';
import { images } from "../../constants";
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="letter g" />
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="about us spoon"className='spoon__img' />
        <p className='p__opensans'>Welcome to Gotham, where comfort and luxury come together in the heart of Gotham City. 
        Our elegant rooms offer a perfect blend of modern amenities and classic charm, ensuring a memorable stay. 
        Whether you're visiting for business or pleasure, enjoy our top-notch services, including a fully-equipped fitness center, gourmet dining options,
         and a tranquil spa. At Gotham, we pride ourselves on providing personalized service and a warm, inviting atmosphere. Your perfect stay starts here.</p>
         <button type='button' className='custom__button'>Know More</button>
      </div>
      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="about_knife" />
      </div>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="about us spoon"className='spoon__img' />
        <p className='p__opensans'>Welcome to Gotham, where comfort and luxury come together in the heart of Gotham City. 
        Our elegant rooms offer a perfect blend of modern amenities and classic charm, ensuring a memorable stay. 
        Whether you're visiting for business or pleasure, enjoy our top-notch services, including a fully-equipped fitness center, gourmet dining options,
         and a tranquil spa. At Gotham, we pride ourselves on providing personalized service and a warm, inviting atmosphere. Your perfect stay starts here.</p>
         <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
