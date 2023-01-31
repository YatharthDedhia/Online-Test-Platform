import React from "react";
import './css/opening.css'

const Opening = () => {
	return (

		<div className="untitled">
			<div className="untitled__slides">
				<div className="untitled__slide">
					<div className="untitled__slideBg"></div>
					<div className="untitled__slideContent">
						<span>Want to </span>
						<span>Improve your Score?</span>
						<a className="button" href="/landing">Sign Up</a>
					</div>
				</div>
				<div className="untitled__slide">
					<div className="untitled__slideBg"></div>
					<div className="untitled__slideContent">

						<span>We Got</span>
						<span>This Covered</span>
						<a className="button" href="/landing" >Sign Up</a>
					</div>
				</div>
				<div className="untitled__slide">
					<div className="untitled__slideBg"></div>
					<div className="untitled__slideContent">
						<span> An Online Test Platform</span>
						<span>for All your Competitive Exams</span>
						<a className="button" href="/landing">Sign Up</a>
					</div>
				</div>
				<div className="untitled__slide">
					<div className="untitled__slideBg"></div>
					<div className="untitled__slideContent">
						<span>Today you show this Test</span>
						<span>who the Boss is</span>
						<a className="button" href="/landing" target="/black">Sign Up</a>
					</div>
				</div>
			</div>
			<div className="untitled__shutters"></div>
		</div>
	);
};
export default Opening;
