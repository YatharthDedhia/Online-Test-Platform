import React from 'react';
import {
	Landing,
} from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Landing />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
