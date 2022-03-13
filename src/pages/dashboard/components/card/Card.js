import React from 'react'
import "./card.css";
import duts from "../../../../image/duts.svg";
import alarm from "../../../../image/alarm.svg";
import share from "../../../../image/share.svg";
import three from "../../../../image/three.svg";
import comment from "../../../../image/comment.svg";
import edit from "../../../../image/edit.svg";
import deleted from "../../../../image/deleted.svg";
import formatDate from "../../../../utils/formatDate";

const Card = ({title, points,date ,tags,openModal1 }) => {
  //6 JULY 2020
  let newDate = formatDate(date);
  return (
    <div className='container__card'>
      <div className='item__card'>
        <h5>{title}</h5>
      </div>
      <div className='item__card'>
      <div className='dropdown__Card'>
        <img src={duts} alt="img"/>
        <div className='dropdown__content__Card'>
         <div className='flex__content__card'>
          <div className='item__dropdown' onClick={openModal1}> <span> <img src={edit}  className="img__dropdown" alt="img" /> </span> Edit</div>
          <div className='item__dropdown'> <span> <img src={deleted} className="img__dropdown" alt="img" /> </span> Delete</div>
         </div>
        </div>
      </div>
      </div>
      <div className='item__card'>
        <p>{points} points</p>
      </div>
      <div className='item__card'>
        <div className='container__date__card'>
          <span>
            <img src={alarm} alt="fsd"/>
          </span>
          <span className='text__date__card'>{formatDate(date)}</span>
        </div>
      </div>
      <div className='item__card'>
      
        <div className='badges_card'>{tags[0]}</div>
        {(tags.length<2) || <div className='badges_card'>{tags[1]}</div>}
      </div>
      <div className='item__card'>
        <img src="https://placeimg.com/100/100/people" alt='fsd'/>
      </div>
      <div className='item__card'>
            <img src={share} alt="fsd"/>
            <div className='group__card__detail'>
              <span>5</span>
              <img src={three} alt="fsd"/>
            </div>
            <div className='group__card__detail'>
              <span>5</span>
              <img src={comment} alt="fsd"/>
            </div>
      </div>
    </div>
  )
}

export default Card
