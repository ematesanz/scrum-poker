import React, { Component, Fragment} from 'react';

import './PopUp.scss';

interface PopUpState {
	countDown: number,
	intervalId: any
}

interface PopUpProps {}

class PopUp extends Component <PopUpProps, PopUpState> {
	state = {
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
		let { countDown } = this.state;
		return (
			countDown ? <article className='popup'>
				<span className='popup__content'>{countDown}</span>
			</article>  : null
		)
	}
}

export default PopUp;