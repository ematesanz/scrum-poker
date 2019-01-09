import React, { Component } from 'react';

import './PopUp.scss';

interface Props {
    text: string,
    closePopup: () => void
}
  
interface State {
    showPopup: boolean
}

class PopUp extends React.Component<Props, State> {
    render() {
        return (
        <div className='popup'>
            <div className='popup_inner'>
            <h1>{this.props.text}</h1>
            <button onClick={this.props.closePopup}>close me</button>
            </div>
        </div>
        );
    }
}

export default PopUp;