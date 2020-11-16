import React, { Component }  from 'react';
import ShortAbt from './ShortAbt';
import '../../style/landingPAge/homeContent.scss';

export default class Purpose extends Component {
    render(){
    return(
      <div className="purposeApp" >
          <h1 className="purposeApp__title">Welcome to Phantom App</h1>
          <button className="travelBtn">Travel with us</button>
          <div className="purposeApp__card">
              <ShortAbt
                  description="Track your bus with us wherever you’re in Kigali and explore the city without  going on the bus-stop lines"
              />
             <ShortAbt
                  description="Give us both your destination and location; we’ll help you know when the bus will pick you."
              />
          </div>
    </div>
  )
    }
  }