import React, { Component } from 'react';

import PopUp from '../PopUp'
import './Card.scss';

interface CardProps {
  id: number,
  name: string,
}

interface CardState {
  isOpen: boolean,
  isCountDown: boolean,
}

class Card extends Component<CardProps, CardState> {
  state = {
    isOpen: false,
    isCountDown: false
  }

  openCard = () => {
    const { isOpen, isCountDown } = this.state
    if (isOpen === false) this.setState({ isOpen: true });
    if (isOpen === true && !isCountDown) {
    const { isOpen, isCountDown } = this.state
      this.setState({ isCountDown: true})
      console.log('show Delay')
    }
  }


  closeCard = () => {
    const { isOpen } = this.state
    this.setState({ isOpen: !isOpen })
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
        <span className="card__number"> { name } </span>
        {/* <p>Scrum poker</p> */}
        <p className="card__name"> {name} </p>
        { isOpen && <span className="card__close" onClick={this.closeCard}>X</span> }
      </article>
    )
  }
}

export default Card;