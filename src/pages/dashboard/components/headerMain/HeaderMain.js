import React from 'react'
import "./headerMain.css";
import lines from "../../../../image/lines.svg";
import widget from "../../../../image/widgets.svg";
import plus from "../../../../image/plus.svg";

const HeaderMain = ({openModal}) => {
  return (
    <div className='container__header__main'>
     <div className="item__header__main1">
        <div>
        <img src={lines} alt='widget'></img>
        </div>
        <div>
        <img src={widget} alt='lines'></img> 
        </div>
      </div>
      <div className="item__header__main2">
        <div>
          <img src={plus} onClick={openModal} alt='lines'></img> 
        </div>
      </div>
    </div>
  )
}

export default HeaderMain
