import React, { Component } from 'react';

import Card from '../Card'
import Settings from '../Settings'
import './Cards.scss';

interface CardsProps {
  cards: Array<string>
}

interface CardsState {
  id: number
}

class Cards extends Component<CardsProps, CardsState> {
  state = {
    id: 0
  }
  
  render () {
    const { cards } = this.props;
    const { id } = this.state;
    const hasCountDown = true;
    return (
      <section className="wrapper">
        { cards.map((card, idx) => <Card key={idx} id={idx} name={card} />) }
        {/* <Settings/> */}
      </section>
    )
  }
}

export default Cards;
