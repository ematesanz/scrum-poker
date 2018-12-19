import * as React from 'react';
import Card from '../Card'

export interface Props {
  cards: array;
}

function Cards( { cards } : Props) {
  return (
    <div className="card-list">
      { cards.map(card => <Card name={card} />) }
    </div>
  )
}

export default Cards;