import React from 'react';
import UserInput from './UserInput';
import UserOutput from './UserOutput';
import './App.css';

function App() {
	return (
		<div className="App">
			<UserInput />
			<UserOutput userName="Yoonsoo" />
			<UserOutput />
		</div>
	);
}

export default App;
