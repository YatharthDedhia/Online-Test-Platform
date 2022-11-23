import React from 'react';
import {
	Landing,
	Dashboard
} from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Landing />} />
					<Route exact path="/dashboard" element={<Dashboard />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
