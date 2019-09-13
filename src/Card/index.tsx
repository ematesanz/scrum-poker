import React, { Component, Fragment } from 'react';

import PopUp from '../PopUp'
import './Card.scss';

interface CardProps {
  id: number,
  name: string,
  onClick: () => {},
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
    if (isOpen === true && !isCountDown) this.setState({ isCountDown: true })
  }


  closeCard = () => {
    const { isOpen } = this.state
    this.setState({ isOpen: !isOpen })
  }

  toggleCountDown = () => {
    const { isCountDown } = this.state
    this.setState({ isCountDown: false })
  }

  render () {
    const { id, name } = this.props
    const { isOpen, isCountDown } = this.state
    let className = 'card'
    let closeBtn
    if (isOpen) {
      className = `${className} ${className}--is-open`
      closeBtn = `${<span>X</span>}`
    }

    return (
      <Fragment>
        { isCountDown && <PopUp />}

        <article className={className} onClick={this.openCard}>
          <span className="card__number"> { name } </span>
          <p className="card__name"> {name} </p>
          { isOpen && <span className="card__close" onClick={this.closeCard}>X</span> }
        </article>
      </Fragment>
    )
  }
}
export default Card;
