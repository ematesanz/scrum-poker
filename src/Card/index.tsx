import React, { Component } from 'react';

import PopUp from '../PopUp'
import './Card.scss';

interface CardProps {
  id: number,
  name: string,
  onClick: Function
}

// interface State {
//     showPopup: boolean
// }


const Card = (props: CardProps) => {

  const { id, name, onClick } = props;

  return (
    <div className="card" onClick={()=>{onClick(id)}}>
      <span className="card--left"> { name } </span>
      <p>Scrum poker</p>
      <p className="card__name"> {name} </p>
      <span className="card--right"> { name } </span>
    </div>
  )

}

export default Card;