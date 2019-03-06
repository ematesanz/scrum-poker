import React, { Component } from 'react';

import PopUp from '../PopUp'
import './Card.scss';

interface CardProps {
  id: number,
  name: string,
}

interface CardState {
  isOpen: boolean
}

class Card extends Component<CardProps, CardState> {
  state = {
    isOpen: false,
  }

  openCard = () => {
    const { isOpen } = this.state
    if (isOpen === false) this.setState({ isOpen: true });
  }


  closeCard = () => {
    const { isOpen } = this.state
    this.setState({ isOpen: !isOpen });
  }

  render () {
    const { id, name } = this.props
    const { isOpen } = this.state
    let className = 'card'
    let closeBtn
    if (isOpen) {
      className = `${className} ${className}--is-open`
      closeBtn = `${<span>X</span>}`
    }

    return (
      <article className={className} onClick={this.openCard}>
        <span className="card--left"> { name } </span>
        <p>Scrum poker</p>
        <p className="card__name"> {name} </p>
        <span className="card--right"> { name } </span>
        { isOpen && <span className="card__close" onClick={this.closeCard}>X</span> }
      </article>
    )
  }
}

export default Card;