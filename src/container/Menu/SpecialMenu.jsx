import React from 'react';
import { SubHeading,MenuItem } from '../../components';
import { images,data } from '../../constants';
import './SpecialMenu.css';

//component definition
const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding'id='menu'>
    {/* title section */}
    <div className='app__specialMenu-title'>
      <SubHeading title="Menu that fits your pallate"/>
      <h1 className='headtext__cormorant'>Todays' Special</h1>
    </div>
    {/* menu content */}
    <div className='app__specialMenu-menu'>
      {/* container for wine and beer section */}
      <div className='app__specialMenu-menu_wine flex__center'>
        <p className='app__specialMenu_menu-heading'>Wine & Beer</p>
        <div className='app__specialMenu-menu_items'>
          {/* iterate over wines array to generate menuitem component for each wine */}
          {data.wines.map((wine,index)=>(
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}/>
          ))}
        </div>
      </div>
      <div className='app__specialMenu-menu_img'>
        <img src={images.menu} alt="menu" />
      </div>
      {/* container for cocktails section */}
      <div className='app__specialMenu-menu_cocktails flex__center'>
        <p className='app__specialMenu_menu-heading'>Cocktails</p>
        <div className='app__specialMenu-menu_items'>
          {/* iterate over cocktails */}
          {data.cocktails.map((cocktail,index)=>(
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
          ))}
        </div>
      </div>
    </div>
    <div style={{marginTop:'15px'}}>
      <button type='button' className='custom__button'>View More</button>
    </div>
  </div>
);

export default SpecialMenu;
