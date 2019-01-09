import * as React from 'react';
import './Card.scss';

interface Props {
  name: string
}

interface MyState {
    showPopup: boolean
}

// class Popup extends React.Component {
//   render() {
//     return (
//       <div className='popup'>
//         <div className='popup_inner'>
//           <h1>{this.props.text}</h1>
//         {/* <button onClick={this.props.closePopup}>close me</button> */}
//         </div>
//       </div>
//     );
//   }
// }

class Card extends React.Component<Props, MyState> {

  state = {
    showPopup: false
  }

  showCard = (name: any) => {
    console.log(`card clicked ${name}`);
    this.setState({ showPopup: true });
  }

// function Card({ name }: Props) {
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
              {/* <Popup
                text={name}
                // closePopup={this.togglePopup.bind(this)}
              /> */}
            </div>
            : null
          }        
        </React.Fragment>
      )
    }
}

export default Card;