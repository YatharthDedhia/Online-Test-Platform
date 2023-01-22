import React from 'react';
import {
	Landing,
	Dashboard,
	Profile,
	Admin,
	Test,
	Opening,
	Institute,
	QuizInstructions
} from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => {
	return (
		<div className="App">
			{/* <React.StrictMode> */}
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Landing />} />
					<Route exact path="/dashboard" element={<Dashboard />} />
					<Route exact path="/profile" element={<Profile />} />
					<Route exact path="/test" element={<Test />} />
					<Route exact path="/admin" element={<Admin />} />
					<Route exact path="/opening" element={<Opening />} />
					<Route exact path="/institute" element={<Institute />} />
					<Route exact path="/instruction" element={<QuizInstructions />} />
					{/* <Route exact path="/home" element={<Home />} /> */}
					{/* <Route exact path="/quiz" element={<Quiz />} /> */}
				</Routes>
			</BrowserRouter>
			{/* </React.StrictMode> */}
		</div>
	);
};

export default App;