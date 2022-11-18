import React from 'react';
import Popup from 'reactjs-popup';
import './landing.css';

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

const Landing = () => {
	return (
		<React.Fragment>
			<Navbar />

			<div className="section-type landing-page">
				<div className='container'>
					<div className='SignUpBox'>
						<div className='SignUp'>
							<h1 class="Heading">Sign-Up</h1>
							<div className='FirstLast'>
								<input className='FirstName' type="text" placeholder='First Name' />
								<input className='LastName' type="text" placeholder='Last Name' />
							</div>

							<input className='EMail' type="text" placeholder='E-Mail ID' />
							<input className='Password' type="password" placeholder='Password' />
							<input className='ConfirmPassword' type="password" placeholder='Confirm Password' />

							<div className='Checkbox'>

								<label className="RadioCheck">
									<input type="radio" name="checked" checked></input>Student
								</label>
								<label className="RadioCheck">
									<input type="radio" name="checked"></input>Institute
								</label>
							</div>

							<div className='AskLogin'>Already Registered?
								<Popup trigger={<button> Login </button>}
									position="center">
									<div className='container'>
										<div className='SignUpBox'>
											<div className='SignUp'>
												<h1 class="Heading">Login</h1>


												<input className='EMail' type="text" placeholder='E-Mail ID' />
												<input className='Password' type="password" placeholder='Password' />


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
									</div>
								</Popup>
							</div>

							<button className='bubbly-button'>Sign-Up</button>
						</div>
					</div>
				</div>
			</div>
			<footer class="Footer">Copyright © 2022 All rights reserved.</footer>
		</React.Fragment>

	);
};

export default Landing;