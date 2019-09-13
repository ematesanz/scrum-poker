import React, { useState } from 'react';

import Card from '../Card'
//import Settings from '../Settings'
import './Cards.scss';

interface CardsProps {
  cards: Array<string>
}

// const onClick = () => console.log('selected')

const Cards: React.FC<CardsProps> = ({cards}) => {
  const [selectedCard, setSelectedCard] = useState(0)


  return (
    <section className="wrapper">
    { cards.map((card, index) => <Card key={index} id={index} name={card}  />) }
      {/* <Settings/> */}
    </section>
  )
}

export default Cards;

//onClickSelected={onClick}