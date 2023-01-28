import React from 'react';
import {
	Landing,
	Dashboard,
	Profile,
	Admin,
	Test,
	Opening,
	Institute,
} from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Protected from "./Protected";

const App = () => {
	return (
		<div className="App">
			{/* <React.StrictMode> */}
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Opening />} />
					<Route exact path="/landing" element={<Landing />} />
					<Route exact path="/dashboard" element={<Dashboard />} />
					<Route exact path="/profile" element={<Profile />} />
					<Route exact path="/test" element={<Test />} />
					<Route exact path="/admin" element={<Admin />} />
					<Route exact path="/institute" element={<Institute />} />

					{/* <Route exact path="/" element={<Opening />} />
					<Route exact path="/landing" element={<Landing />} />
					<Route exact path="/dashboard" element={<Protected Component={Dashboard} />} />
					<Route exact path="/profile" element={<Protected Component={Profile} />} />
					<Route exact path="/test" element={<Protected Component={Test} />} />
					<Route exact path="/institute" element={<Institute />} /> */}
				</Routes>
			</BrowserRouter>
			{/* </React.StrictMode> */}
		</div>
	);
};

export default App;