import React, { Component } from 'react';
import Counter from './components/Counter';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

import './App.css'

class App extends Component {
	render() {
		return (
			<div className='App'>
				<h1>Render Props</h1>
				<Counter
					render={(count, incrementCount) => (
						<ClickCounter count={count} incrementCount={incrementCount} />
					)}
				/>
				<Counter
					render={(count, incrementCount) => (
						<HoverCounter count={count} incrementCount={incrementCount} />
					)}
				/>
			</div>
		);
	}
}

export default App;
