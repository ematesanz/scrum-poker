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
			<button className="popup__close" onClick={this.props.closePopup}>X</button>
			<p className="popup__content">{this.props.text}</p>
		</div>
		);
	}
}

export default PopUp;