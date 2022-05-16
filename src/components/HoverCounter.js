import React, { Component } from 'react';

class HoverCounter extends Component {
	render() {
		return (
			<h4 onMouseOver={this.props.incrementCount}>
				HoverCounter {this.props.count}
			</h4>
		);
	}
}

export default HoverCounter;
