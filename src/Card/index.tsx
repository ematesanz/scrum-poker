import React, { Component } from 'react';

import PopUp from '../PopUp'
import './Card.scss';

interface Props {
  name: string
}

interface State {
    showPopup: boolean
}

class Card extends React.Component<Props, State> {

  state = {
    showPopup: false
  }

  showCard = (name: any) => {
    console.log(`card clicked ${name}`);
    this.setState({ showPopup: true });
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render () {
    const { name } = this.props;
      return (
        <React.Fragment>
          <div className="card" onClick={()=>{this.showCard(name)}}>
            <span className="card--left"> { name } </span>
            <p>Scrum poker</p>
            <p className="card__name"> {name} </p>
            <span className="card--right"> { name } </span>
          </div>
          {this.state.showPopup ? 
            <div className="card--full-screen">
              <PopUp
                text={name}
                closePopup={this.togglePopup.bind(this)}
              />
            </div>
            : null
          }        
        </React.Fragment>
      )
    }
}

export default Card;