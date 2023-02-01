import React from 'react';
import {
	Landing,
	Dashboard,
	Profile,
	Admin,
	Test,
	Opening,
	Institute,
	Notes,
	Contact,
	Opening2
} from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ProtectedStudent from './Protected Routes/ProtectedStudent';
import ProtectedInstitute from './Protected Routes/ProtectedInstitute';
import ProtectedAdmin from './Protected Routes/ProtectedAdmin';
import ProtectedLanding from './Protected Routes/ProtectedLanding';
import ProtectedTest from './Protected Routes/ProtectedTest';

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					{/* <Route exact path="/" element={<Opening />} />
					<Route exact path="/landing" element={<Landing />} />
					<Route exact path="/dashboard" element={<Dashboard />} />
					<Route exact path="/test" element={<Test />} />
					<Route exact path="/admin" element={<Admin />} />
					<Route exact path="/profile" element={<Profile />} />
					<Route exact path="/institute" element={<Institute />} />
					<Route exact path="/notes" element={<Notes />} /> */}
					{/* <Route exact path="/logo" element={<Opening2 />} />  */}

					<Route exact path="/" element={< ProtectedLanding Component={Opening} />} />
					<Route exact path="/landing" element={<ProtectedLanding Component={Landing} />} />
					<Route exact path="/logo" element={<ProtectedLanding Component={Opening2} />} />
					<Route exact path="/dashboard" element={<ProtectedStudent Component={Dashboard} />} />
					<Route exact path="/profile" element={<ProtectedStudent Component={Profile} />} />
					<Route exact path="/test" element={<ProtectedTest Component={Test} />} />
					<Route exact path="/institute" element={<ProtectedInstitute Component={Institute} />} />
					<Route exact path="/notes" element={<ProtectedStudent Component={Notes} />} />
					<Route exact path="/admin" element={<ProtectedAdmin Component={Admin} />} />
					<Route exact path="/contact" element={<Contact />} />

				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;