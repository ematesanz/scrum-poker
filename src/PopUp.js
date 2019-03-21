import React, { Component, Fragment} from 'react';

import './PopUp.scss';

interface PopUpProps {
	text: string,
	hasCountDown: boolean,
	closePopup: () => void
}

interface PopUpState {
	hasCountDown: boolean,
	countDown: number,
	intervalId: any
}

class PopUp extends Component <PopUpProps, PopUpState> {
	state = {
		hasCountDown: this.props.hasCountDown,
		countDown: 3,
		intervalId: 0
	}
	
	componentDidMount() {
		let intervalId = setInterval(this.counter.bind(this), 1000);
		this.setState({ intervalId });
	}

	counter() {
		let newCount = this.state.countDown - 1;
		if (newCount >= 0) { 
				this.setState({ countDown: newCount });
		} else {
				clearInterval(this.state.intervalId);
		}
	}

	render () {
		const { text, closePopup} = this.props;
		let { hasCountDown, countDown } = this.state;
		return (
			<article className='popup'>
				{ hasCountDown && countDown ?
					<p className="popup__content">{countDown}</p> : 
					<Fragment>
						<button className="popup__close" onClick={closePopup}>X</button>
						<p className="popup__content">{text}</p>
					</Fragment>
				}
			</article>
		);
	}
}

export default PopUp;