import React, { Component } from 'react';

import Card from '../Card'
import PopUp from '../PopUp'
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
    id: 0
  }

  showCard = (id: number) => this.setState({ showPopup: true, id });

  togglePopup = () => this.setState({ showPopup: !this.state.showPopup });
  
  render () {
    const { cards } = this.props;
    const { id } = this.state;
    const hasCountDown = true;
    return (
      <section className="wrapper">
        { cards.map((card, idx) => <Card key={idx} id={idx} name={card} onClick={this.showCard} />) }

        { this.state.showPopup && <PopUp text={cards[id]} hasCountDown={hasCountDown} closePopup={this.togglePopup} /> }
      </section>
    )
  }
}

export default Cards;
