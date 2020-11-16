import React,{ Component } from 'react';
import '../../style/landingPAge/homeContent.scss';

const Pattern=({description})=>{
    return(
      <div className="patterns">
      <p>{description}</p>
      </div>
    )
  }

  export default Pattern;