import React from 'react';
import{ images } from '../../constants';


import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
    <SubHeading title="Taste of Ethiopia" />
    <h1 className='app__header-h1'> The Best Way To Experience Ethiopian Cuisine </h1>
    <p className='p__opensans' style={{margin:'2rem 0'}}>Mitmita Ethiopian restaurant is a unique dining experience that offers a taste of Ethiopia's rich culture and delicious cuisine. The restaurant serves traditional Ethiopian dishes, including injera (a spongy, sourdough flatbread), doro wat (a spicy chicken stew), and kitfo (a dish made from raw minced beef). The food is typically served on a large platter, with the injera acting as both plate and utensil.</p>
    <button type='button' className='custom__button'> Explore Menu</button>
    </div> 
    
    <div className='app__wrapper_img'>
      <img src={images.mitSign} alt="" />

    
    </div>

  </div>
);

export default Header;
