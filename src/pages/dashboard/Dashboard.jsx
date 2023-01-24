import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import './css/dashboard.css';
import './css/copylink.css';
import './css/commoninput.css';
import './css/search.css'
import './css/table.css'
import './css/sidebar.css'
import './css/calendar.css'
import Popup from 'reactjs-popup';
import { render } from 'react-dom';
import axios from 'axios';
// import { flag } from '../landing/Landing';
function Tabs() {
	const [toggleState, setToggleState] = useState(1);
	const toggleTab = (index) => {
		setToggleState(index);
	};

	return (
		<div className="container1">
			<div className="bloc-tabs">
				<button
					className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
					onClick={() => toggleTab(1)}
				>
					UnAttempted
				</button>
				<button
					className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
					onClick={() => toggleTab(2)}
				>
					Attempted
				</button>
				<button
					className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
					onClick={() => toggleTab(3)}
				>
					All
				</button>
			</div>

			<div className="content-tabs">
				<div className={toggleState === 1 ? "content  active-content" : "content"} >
					<p>
						<table>
							<thead>
								<tr>
									<th>Name</th>
									<th>Time</th>
									<th>Link</th>
								</tr>
							</thead>
							{mockTests.map((test) => {
								if (test.status == "unattempted") {
									return <tbody>
										<tr>

											<td>{test.name}</td>
											<td>{test.time}</td>
											<td>
												<a href={test.link}>{test.link}</a>
											</td>
										</tr>
									</tbody>
								}
							})}
						</table>
					</p>
				</div>

				<div className={toggleState === 2 ? "content  active-content" : "content"} >
					<p>
						<table>
							<thead>
								<tr>
									<th>Name</th>
									<th>Time</th>
									<th>Link</th>
								</tr>
							</thead>

							{mockTests.map((test) => {
								if (test.status == "attempted") {
									return <tbody>
										<tr>

											<td>{test.name}</td>
											<td>{test.time}</td>
											<td>
												<a href={test.link}>{test.link}</a>
											</td>
										</tr>
									</tbody>
								}
							})}
						</table>
					</p>
				</div>

				<div className={toggleState === 3 ? "content  active-content" : "content"} >
					<p>
						<table>
							<thead>
								<tr>
									<th>Name</th>
									<th>Time</th>
									<th>Link</th>
								</tr>
							</thead>

							{mockTests.map((test) => {
								return <tbody>
									<tr>

										<td>{test.name}</td>
										<td>{test.time}</td>
										<td>
											<a href={test.link}>{test.link}</a>
										</td>
									</tr>
								</tbody>
							})}
						</table>
					</p>
				</div>
			</div>
		</div>
	);
}

const mockTests = [
	{
		name: 'Periodic Test - DBMS',
		link: 'asd-qwvs-dfs',
		time: '26/11/2022 20:30',
		status: "unattempted"
	},
	{
		name: 'Periodic Test - OSLT',
		link: 'pbl-dfse-phd',
		time: '21/11/2022 17:30',
		status: "unattempted"
	},
	{
		name: 'Periodic Test - SPCC',
		link: 'fhh-dfgg-aee',
		time: '22/11/2022 17:30',
		status: 'attempted'
	}
];

const NavLinks = () => (
	<React.Fragment>
		<p>
			<a href="/profile">Profile</a>
		</p>
	</React.Fragment>
);

const Sidebar = () => {
	return (
		<nav role="navigation">
			<div id="menuToggle">
				<input type="checkbox" />

				<span></span>
				<span></span>
				<span></span>
				<ul id="menu">
					<a href="#"><li>Announcements</li></a>
					<a href="#"><li>Timetable</li></a>
					<a href="#"><li>Test Schedule</li></a>
					<a href="#"><li>Homework</li></a>
				</ul>
			</div>
		</nav>
	);
};

const Navbar = () => {
	return (
		<div className="landing-navbar">
			<Sidebar />
			<div className="landing-navbar-logo">
				<h1 className='site-name'>Test Platform</h1>
			</div>
			<div className="landing-navbar-links">
				<NavLinks />
			</div>
		</div>
	);
};

const Dashboard = () => {
	const [date, setDate] = useState(new Date());
	const [calendarText, setCalendarText] = useState();
	const [testName, setTestName] = useState('');
	const [courseName, setCourseName] = useState('');
	const [courseCode, setCourseCode] = useState(0);
	const [date1, setDate1] = useState(null);
	const [startTime, setStartTime] = useState("");
	const [endTime, setEndTime] = useState("");
	const [duration, setDuration] = useState(0);
	const [link, setLink] = useState("");
	// const [authenticated, setauthenticated] = useState(null);
	useEffect(() => {
		const loggedInUser = localStorage.getItem("authenticated");
		if (loggedInUser == true) {
			//    setauthenticated(loggedInUser);
		}
	}, []);
	function Tabs() {
		const [toggleState, setToggleState] = useState(1);
		const toggleTab = (index) => {
			setToggleState(index);
		};

		return (
			<div className="container1">
				<div className="bloc-tabs">
					<button
						className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
						onClick={() => toggleTab(1)}
					>
						UnAttempted
					</button>
					<button
						className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
						onClick={() => toggleTab(2)}
					>
						Attempted
					</button>
					<button
						className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
						onClick={() => toggleTab(3)}
					>
						All
					</button>
				</div>

				<div className="content-tabs">
					<div className={toggleState === 1 ? "content  active-content" : "content"} >
						<p>
							<table>
								<thead>
									<tr>
										<th>Name</th>
										<th>Subject</th>
										<th>Time</th>
										<th>Link</th>
									</tr>
								</thead>
								{mockTests.map((test) => {
									if (test.status == "unattempted") {
										return <tbody>
											<tr>

												<td>{testName}</td>
												<td>{courseName}</td>
												<td>{date1}</td>
												<td>
													<a href={link}>{link}</a>
												</td>
											</tr>
										</tbody>
									}
								})}
							</table>
						</p>
					</div>

					<div className={toggleState === 2 ? "content  active-content" : "content"} >
						<p>
							<table>
								<thead>
									<tr>
										<th>Name</th>
										<th>Subject</th>
										<th>Time</th>
										<th>Link</th>
									</tr>
								</thead>

								{mockTests.map((test) => {
									if (test.status == "attempted") {
										return <tbody>
											<tr>

												<td>{testName}</td>
												<td>{courseName}</td>
												<td>{date1}</td>
												<td>
													<a href={link}>{link}</a>
												</td>
											</tr>
										</tbody>
									}
								})}
							</table>
						</p>
					</div>

					<div className={toggleState === 3 ? "content  active-content" : "content"} >
						<p>
							<table>
								<thead>
									<tr>
										<th>Name</th>
										<th>Subject</th>
										<th>Time</th>
										<th>Link</th>
									</tr>
								</thead>

								{mockTests.map((test) => {
									return <tbody>
										<tr>

											<td>{testName}</td>
											<td>{courseName}</td>
											<td>{date1}</td>
											<td>
												<a href={link}>{link}</a>
											</td>
										</tr>
									</tbody>
								})}
							</table>
						</p>
					</div>
				</div>
			</div>
		);
	}
	const url4 = "https://lmsapiv01.azurewebsites.net/api/studentschedule/4";
	axios
		.get(url4)
		.then((response) => {
			//   console.log(response.data[0][0].Answer)
			for (let i = 0; i < response.data[0].length; i++) {
				setTestName(response.data[0][0].TestName);
				setCourseName(response.data[0][0].CourseName);
				setCourseCode(response.data[0][0].CourseCode);
				setDate1(response.data[0][0].Date);
				setStartTime(response.data[0][0].StartTime);
				setEndTime(response.data[0][0].EndTime);
				setDuration(response.data[0][0].Duration);
				setLink(response.data[0][0].Link);

			}

		})
		.catch((err) => {
			console.log(err);
		});
	const handleDateChange = (value) => {
		setCalendarText(`${value.toDateString()}`);
	};
	// if (!authenticated) {
	//abc
	// } else {
	return (
		<React.Fragment>
			<Navbar />
			<div className="section-type-admin-dashboard">
				<Tabs />
				<div className="calendar">
					<Calendar onChange={setDate} value={date} onClickDay={handleDateChange} tileContent={
						({ activeStartDate, date, view }) => {
							return mockTests.map((test) => (
								(view === 'month' && date.getDate() === parseInt(test.time.slice(0, 2)) && date.getMonth() === (parseInt(test.time.slice(3, 5)) - 1) && date.getYear() === (parseInt(test.time.slice(6, 10)) - 1900)) ? <p className='DateContent' >{date.getDate()} Test Day {(test.time.slice(11, 16))}</p> : null))
						}} />
				</div>
			</div >

		</React.Fragment>

	);
	// }
};

export default Dashboard;