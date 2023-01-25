import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import './css/dashboard.css';
import './css/copylink.css';
import './css/commoninput.css';
import './css/search.css'
import './css/table.css'
import './css/sidebar.css'
import './css/calendar.css'
import { render } from 'react-dom';
import axios from 'axios';
import logo from '../../Images/logo-no-background.png'

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

const obj = [
	{
		TestName: "trialtestname",
		CourseName: "FrontEnd",
		CourseCode: 1,
		Date: "2023-10-14T00:00:00.000Z",
		StartTime: "2023-01-26T08:00:00.000Z",
		EndTime: "2023-01-01T11:00:00.000Z",
		Duration: 3,
		Link: "dfd-dfd-dfd",
	}
]

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
			<div className='dashboard-logo'>
				<img src={logo}></img>
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
	const [tests, setObj] = useState(obj)

	let fullstamp = new Date().toJSON();
	let fulldate = new Date().toJSON().slice(0, 10);
	let fulltime = new Date().toJSON().slice(11, 16);
	var d1 = Date.parse(fullstamp)

	useEffect(() => {
		const url4 = "https://lmsapiv01.azurewebsites.net/api/studentschedule/4";
		axios
			.get(url4)
			.then((response) => {
				for (let i = 0; i < response.data[0].length; i++) {
					setObj(response.data[0])
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}, [])

	tests.map((test) => {
		if (Date.parse(test.StartTime) > d1) {

			test["status"] = "unattempted";
			console.log("unattempted")
		}
		else {
			test["status"] = "attempted";
			console.log("attempted")
		}
	})

	// const [authenticated, setauthenticated] = useState(null);
	// useEffect(() => {
	// 	const loggedInUser = localStorage.getItem("authenticated");
	// 	if (loggedInUser == true) {
	// 		//    setauthenticated(loggedInUser);
	// 	}
	// }, []);

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
					<div className={toggleState === 1 ? "content  active-content " : "content"} >
						<p>
							<table>
								<thead>
									<tr>
										<th>Name</th>
										<th>Subject</th>
										<th>Date</th>
										<th>Time</th>
										<th>Link</th>
									</tr>
								</thead>
								{tests.map((test) => {
									if (test.status == "unattempted") {
										return <tbody>
											<tr>

												<td>{test.TestName}</td>
												<td>{test.CourseName}</td>
												<td>{test.StartTime.slice(0, 10)}</td>
												<td>{test.StartTime.slice(11, 16)}</td>
												<td>
													<a href="/test">{test.Link}</a>
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
										<th>Date</th>
										<th>Time</th>
										<th>Link</th>
									</tr>
								</thead>

								{tests.map((test) => {
									if (test.status == "attempted") {
										return <tbody>
											<tr>

												<td>{test.TestName}</td>
												<td>{test.CourseName}</td>
												<td>{test.StartTime.slice(0, 10)}</td>
												<td>{test.StartTime.slice(11, 16)}</td>
												<td>
													<a href="/profile">{test.Link}</a>
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
										<th>Date</th>
										<th>Time</th>
										<th>Link</th>
									</tr>
								</thead>

								{tests.map((test) => {
									return <tbody>
										<tr>

											<td>{test.TestName}</td>
											<td>{test.CourseName}</td>
											<td>{test.StartTime.slice(0, 10)}</td>
											<td>{test.StartTime.slice(11, 16)}</td>
											<td>{test.status === "unattempted"
												? (<a href="/test">{test.Link}</a>)
												: (<a href="/profile">{test.Link}</a>)}
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

	const handleDateChange = (value) => {
		setCalendarText(`${value.toDateString()}`);
	};
	// if (!authenticated) {
	//abc
	// } else {
	console.log((parseInt(tests[0].StartTime.slice(0, 4))))
	return (
		<React.Fragment>
			<Navbar />
			<div className="section-type-admin-dashboard">
				<Tabs />
				<div className="calendar">
					<Calendar onChange={setDate} value={date} onClickDay={handleDateChange} tileContent={
						({ activeStartDate, date, view }) => {
							// console.log(date.getYear())
							return tests.map((test) => (
								(view === 'month' && date.getDate() === parseInt(test.StartTime.slice(8, 10)) && date.getMonth() === (parseInt(test.StartTime.slice(5, 7)) - 1) && date.getYear() === (parseInt(test.StartTime.slice(0, 4)) - 1900)) ? <p className='DateContent' >{date.getDate()} <br /> Test Day <br />{(test.TestName)}</p> : null))
						}} />
				</div>
			</div >

		</React.Fragment>

	);
	// }
};

export default Dashboard;