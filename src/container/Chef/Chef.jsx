import React from 'react';

import { SubHeading } from '../../components';

import { images } from '../../constants';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.mitMarc} alt="chef" />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title= "Chef's Word" />
      <h1 className='headtext__cormorant'> What We Believe In</h1>

      <div className='app__chef-content'>

        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'> The great aspect of Mitmita Restaurant is its use of locally sourced and organic ingredients.</p>
          {/* <p className='p__opensans'>- Chef Marcus Samuelsson</p> */}
        </div>
        <p className='p__opensans'>The restaurant is dedicated to promoting sustainable and healthy food choices.</p>
      </div>

      <div className='app__chef-sign'>
        <p>Chef Marcus Samuelsson - Founder </p>
        <p className='p__opensans'> </p>
      </div>
      </div>
  </div>
);

export default Chef;
