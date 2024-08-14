import React from 'react';
import { images } from "../../constants";
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  //main container for the header section, applying styles for padding and layout
  <div className='app__header app__wrapper section__padding' id='home'>
    {/* Contains text content, including a subtitle, heading, paragraph, and button */}
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new Flavour"/>
      <h1 className='app__header-h1'>The Key To Fine Dining</h1>
      <p className='p__opensans' style={{margin:'2rem 0'}}>Welcome to Gotham, where comfort and luxury come together in the heart of Gotham City. 
        Our elegant rooms offer a perfect blend of modern amenities and classic charm, ensuring a memorable stay. 
        Whether you're visiting for business or pleasure, enjoy our top-notch services, including a fully-equipped fitness center, gourmet dining options,
         and a tranquil spa. At Gotham, we pride ourselves on providing personalized service and a warm, inviting atmosphere. Your perfect stay starts here.</p>
         <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    {/* header image */}
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header-img" />

    </div>
  </div>
);

export default Header;
