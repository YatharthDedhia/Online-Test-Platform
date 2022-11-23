import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import './css/landing.css';
import './css/features.css';
import './css/navbar.css';
import './css/login.css';
import './css/signup.css';

const featureList = [
	'Face Verification',
	'Multiple People Detection',
	'Voice Detection',
	'Devtools Check',
	'Full Screen Check',
	'Multiple Tabs Check'
];

const NavLinks = () => (
	<React.Fragment>
		<p>
			<a href="/">Pricing</a>
		</p>
		<p>
			<a href="/login">Login</a>
		</p>
	</React.Fragment>
);

const Navbar = () => {
	return (
		<div className="landing-navbar">
			<div className="landing-navbar-logo">
				<h1>Test Platform</h1>
			</div>
			<div className="landing-navbar-links">
				<NavLinks />
			</div>
		</div>
	);
};


const CtaButton = ({ text = 'Get Started' }) => {
	return <button className="ctabutton">{text}</button>;
};

const CommonInput = ({ placeholderText = 'Input', value, onChange }) => {
	return (
		<input
			type="text"
			placeholder={placeholderText}
			value={value}
			onChange={onChange}
		/>
	);
};

const Landing = () => {

	const [firstname, setFirstName] = useState('');
	const [lastname, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confpassword, setConfPassword] = useState('');
	const [admin, setAdmin] = useState('');

	return (
		<React.Fragment>
			<Navbar />

			<div className="section-type-landing-page">

				<div className="features-content">
					<div className="curr-heading">
						<p className="gradient-text">
							<b>Powerful</b> & Lightweight
						</p>
						<h2 className="title-heading">Features</h2>
						<br />
					</div>

					<div className="all-features">
						{featureList.map((it) => (
							<p className="single-feature">{it}</p>
						))}
					</div>
				</div>

				<div className="final-features">
					<div className="top-sec">
						<div className="left-text">
							<h3 className="gradient-text">
								Effortlessly integrates with
							</h3>
							<h1 className="title-heading">
								Google Forms or Microsoft Surveys
							</h1>
						</div>

						<div className="right-text">
							<h3 className="gradient-text">The best part?</h3>
							<h1 className="title-heading">
								Live Status on Admin Dashboard
							</h1>
						</div>
					</div>
				</div>

				<div className='container'>
					<div className='SignUpBox'>
						<form>
							<h1 class="Heading">Sign-Up</h1>
							<div className='FirstLast'>
								<input className='FirstName' value={firstname} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder='First Name' />
								<input className='LastName' value={lastname} onChange={(e) => setLastName(e.target.value)} type="text" placeholder='Last Name' />
							</div>

							<input className='EMail' value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='E-Mail ID' />
							<input className='Password' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' />
							<input className='ConfirmPassword' value={confpassword} onChange={(e) => setConfPassword(e.target.value)} type="password" placeholder='Confirm Password' />

							<div className='Checkbox'>

								<label className="RadioCheck">
									<input type="radio" value={firstname} onChange={(e) => setFirstName(e.target.value)} name="checked" checked></input>Student
								</label>
								<label className="RadioCheck">
									<input type="radio" value={firstname} onChange={(e) => setFirstName(e.target.value)} name="checked"></input>Institute
								</label>
							</div>
						</form>
						<div className='AskLogin'>
							<Popup trigger={<button className='LoginButton' className='AskLogin' >Already Registered? Login </button>}
								position="center">
								<div className='Logincontainer'>
									<div className='Login'>
										<h1>Login</h1>
										<input className='EMailLogin' value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='E-Mail ID' />
										<input className='PasswordLogin' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' />
										<div className='Checkbox'>
											<label className="RadioCheck">
												<input type="radio" name="checked" checked></input>Student
											</label>
											<label className="RadioCheck">
												<input type="radio" name="checked"></input>Institute
											</label>
										</div>
										<button className='bubbly-button'>Confirm</button>
									</div>
								</div>
							</Popup>
						</div>

						<button className='bubbly-button'>Sign Up</button>

					</div>
				</div>
			</div>

			<footer className="Footer">Copyright © 2022 All rights reserved.</footer>
		</React.Fragment>

	);
};

export default Landing;