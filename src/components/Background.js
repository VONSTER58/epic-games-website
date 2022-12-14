import React from 'react'

//CSS

import "../styles/components/Background.css";

//IMAGE

import first_panel from "../assets/images/Epic+Games+Node_ue-alt-1920x1080-e653a4a4dae65307fd2420076abe44bb71b22f06.jpg";
import second_panel from "../assets/images/Epic+Games+Node_fn-1920x1080-05e434e24b3170bc6cc6003c102270ee4cde3a75.jpg";
import third_panel from "../assets/images/rl-f2p-hero-epic-adjust-gradient-1920x1080-982990639.jpg";

import "../styles/components/Background.css";

const Background = () => {
  return ( <>
<div className='banner_container'>
  <div className='image_container'>
    <div className='banner_title'>Fortnite</div>
    <img src={first_panel} className='banner_image' />
  </div>
<div className='image_container'>
    <div className='banner_title'>UNREAL ENGINE</div>
    <img src={second_panel} className='banner_image' />
  </div>
  <div className='image_container'>
    <div className='banner_title'>ROCKET LEAGUE</div>
    <img src={third_panel} className='banner_image' />
  </div>
</div>
    
  </>)
}

export default Background