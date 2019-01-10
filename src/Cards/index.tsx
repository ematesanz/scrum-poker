import React, { Component } from 'react';

import Card from '../Card'
import './Cards.scss';

interface CardsProps {
  cards: Array<string>
}

interface CardsState {
  showPopup: boolean,
  id: number
}

class Cards extends Component<CardsProps, CardsState> {
  state = {
    showPopup: false,
    id: null
  }

  showCard = (name: any) => {
    console.log(`card clicked ${name}`);
    this.setState({ showPopup: true });
  }

  render () {
    const { cards } = this.props;
    return (
      <div className="wrapper">
        { cards.map((card, idx) => <Card id={idx} name={card} onClick={this.showCard} />) }
      </div>
    )
  }
}


export default Cards;

// export interface Props {
//   cards: Array<string>
// }

// function Cards( { cards } : Props) {
//   return (
//     <div className="wrapper">
//       { cards.map(card => <Card name={card} />) }
//     </div>
//   )
// }

// export default Cards;