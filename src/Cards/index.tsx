import * as React from 'react';
import Card from '../Card'
import './Cards.scss';

export interface Props {
  cards: Array<string>;
}

// card-list

function Cards( { cards } : Props) {
  return (
    <div className="wrapper">
      { cards.map(card => <Card name={card} />) }
    </div>
  )
}

export default Cards;