import React, { useState } from 'react';

import Card from '../Card'
//import Settings from '../Settings'
import './Cards.scss';

interface CardsProps {
  cards: Array<string>
}


const Cards: React.FC<CardsProps> = ({cards}) => {
  const [selectedCard, setSelectedCard] = useState(0)
  
  function onClick () {
    console.log('selected')
  }
    

  return (
    <section className="wrapper">
    { cards.map((card, index) => <Card key={index} id={index} name={card} onClickSelected={onClick} />) }
      {/* <Settings/> */}
    </section>
  )
}

export default Cards;