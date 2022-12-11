import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';
import './css/landing.css';
import './css/features.css';
import './css/navbar.css';
import './css/login.css';
import './css/signup.css';
import anima from '../../Images/anima.png';
import improve from '../../Images/improve.png';
import lecture from '../../Images/lecture.jpg';
import proctor1 from '../../Images/proctor1.jpg';
 
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
 
	const StudentsInfo = () => {
		const url = "http://lmsapiv01.azurewebsites.net/api/usertable";
 
		const [posts, setPosts] = useState();
 
		useEffect(() => {
			axios
				.get(url)
				.then((response) => {
					console.log(response.data[0][2].EmailId);
					setPosts(response.data);
				})
				.catch((err) => {
					console.log(err);
				});
		}, [url]);
 
		return (
			<div>
				<h1>
					{/* hello */}
				</h1>
			</div>
		);
	}
 
	const postData = (e) => {
		e.preventDefault();
		console.log(e);
 
		const sendData = {
			"UserName": username,
			"Password": password,
			"FirstName": firstname,
			"LastName": lastname,
			"EmailId": email,
			"MobileNo": 123456890,
			"LastLoginDateTime": "2022-11-27T00:00:00.000Z",
			"DateOfBirth": "1974-07-13T00:00:00.000Z",
			"Age": 26,
			"TypeId": 1,
			"ActivationStatus": null
		};
 
		console.log(sendData);
 
		axios.post('http://lmsapiv01.azurewebsites.net/api/usertable', sendData).then(result => { console.log(result.data) });
	}
 
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confpassword, setConfPassword] = useState('');
	const [firstname, setFirstName] = useState('');
	const [lastname, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [mobile, setMobile] = useState('');
	const [dob, setDOB] = useState('');
	const [age, setAge] = useState('');
	const [type, setType] = useState('');
 
	return (
		<React.Fragment>
			<Navbar />
			<StudentsInfo />
			<div className="section-type-landing-page">
 
				{/* <div className="features-content">
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
				</div> */}
				{/* m */}
 
				<div className="section-fluid-main">
					<div className="section-row">
						<div className="section-col">
							<div className='section'>
								<div className="image">
									<img src={anima} alt="" />
								</div>
							</div>
						</div>
						<div class="hover-text">
							<h2>Animation filled User Interface</h2>
						</div>
						<div className="section-col">
							<div className='section'>
								<div className="image">
									<img src={improve} alt="" />
								</div>
							</div>
						</div>
						<div class="hover-text">
							<h2>Improve by strengthening your weak topics</h2>
						</div>
						<div className="section-col">
							<div className='section'>
								<div className="image">
									<img src={lecture} alt="" />
								</div>
							</div>
						</div>
						<div class="hover-text">
							<h2>Online Lectures and frequent doubt solving with the best faculty</h2>
						</div>
						<div className="section-col">
							<div className='section'>
								<div className="image">
									<img src={proctor1} alt="" />
								</div>
							</div>
						</div>
						<div class="hover-text">
							<h2>Active invigilation by Proctoring Software</h2>
						</div>
					</div>
				</div>
				{/* m */}
				{/* <div className="final-features">
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
				</div> */}
 
				<div className='container'>
					<div className='SignUpBox'>
						<form onSubmit={postData}>
							<h1 className="Heading">Sign-Up</h1>
							<div className='FirstLast'>
								<input className='FirstName' value={firstname} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder='First Name' />
								<input className='LastName' value={lastname} onChange={(e) => setLastName(e.target.value)} type="text" placeholder='Last Name' />
							</div>
 
							<input className='EMail' value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='E-Mail ID' />
							<input className='mobile' value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder='Mobile No.' />
							<input className='Username' value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Username' />
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
							<button type='submit' className='bubbly-button'>Sign Up</button>
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
 
						<h2 className="title-heading">Key Features of our website</h2>
					</div>
				</div>
				{/* <div className="final-features">
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
			<h1 className="Heading">Sign-Up</h1>
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
			<Popup trigger={<button className="LoginButton" className="AskLogin" >Already Registered? Login </button>}
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
		<h2 className="title-heading">Key Features of our website</h2>
	</div>
</div>
</div> */}
			</div>
 
			<footer className="Footer">Copyright © 2022 All rights reserved.</footer>
		</React.Fragment>
 
	);
};
 
export default Landing;
 