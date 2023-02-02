import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import './css/dashboard.css';
import './css/table.css'
import './css/sidebar.css'
import './css/calendar.css'
import './css/navbar.css'
import { render } from 'react-dom';
import axios from 'axios';
import logo from '../../Images/logo-no-background.png'
import { useNavigate } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';

const Header_Menu = () => {
	const navigate = useNavigate();

	let profile_pic = "https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg";
	if (localStorage.getItem('login')) {
		profile_pic = (JSON.parse(localStorage.getItem('login')).user.Photo).toString();
	}
	return (
		<header className="block-institute">
			<li className='hamburger-dashboard'>
				<Sidebar />
			</li>
			<ul className="header-menu horizontal-list">
				<li>
					<button className="header-menu-tab-dashboard" onClick={() => navigate("/")}>
						<a href="/contact">
							<img src={logo} height="50px" width="100px"></img>
						</a>
					</button>
				</li>
				<li className='logout-tab-dashboard'>
					<button className="header-menu-tab-dashboard" onClick={() => {
						localStorage.removeItem("login");
						localStorage.removeItem("duration");
						localStorage.removeItem("papercode");
						localStorage.removeItem("papercode");
						localStorage.removeItem("teacher_id");
						localStorage.removeItem("authenticated");
						window.location.reload();
					}}><span className="fa-sharp fa-solid fa-right-to-bracket"></span>LogOut</button>
				</li>
			</ul>
			<div className="profile-menu-bashboard">
				<button className="profile-button-dashboard" onClick={() => { navigate("/profile") }}>
					<p>Me <a><span className="entypo-down-open scnd-font-color"></span></a></p>
					<div className="profile-picture small-profile-picture">
						<img height="40px" width="40px" src={profile_pic} />
					</div>
				</button >
			</div >
		</header >
	);
};

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
		PaperCode: 102,
		TestName: "Node",
		CourseName: "FrontEnd",
		CourseCode: 1,
		Date: "2022-02-14T00:00:00.000Z",
		StartTime: "2022-01-31T06:00:00.000Z",
		EndTime: "1970-01-01T06:30:00.000Z",
		Duration: 3,
		Link: "link"
	}
]

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
					<a href="/notes"><li>Homework</li></a>
				</ul>
			</div>
		</nav>
	);
};

const Dashboard = () => {
	const [date, setDate] = useState(new Date());
	const [calendarText, setCalendarText] = useState();
	const [upcoming, setupcoming] = useState(obj)
	const [previous, setprevious] = useState(obj)
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false)

	let stamp = Date.parse(new Date());

	useEffect(() => {
		setLoading(true)
		let userid = (JSON.parse(localStorage.getItem('login')).user.UserId).toString();
		const url4 = "https://lmsapiv01.azurewebsites.net/api/studentschedule/" + userid;

		axios
			.get(url4)
			.then((response) => {
				setLoading(false)
				setupcoming(response.data[0])
				setprevious(response.data[1]);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [])


	upcoming.map(async (test) => {
		// console.log(test.StartTime)
		let test_start = Date.parse(test.Date.slice(0, 11) + test.StartTime.slice(0, 10))
		let test_end = Date.parse(test.Date.slice(0, 11) + test.EndTime.slice(0, 10))
		console.log(stamp)
		console.log(test_start)
		console.log(test_end)

		if (test_start < stamp && test_end > stamp) {
			test["mode"] = "active";
		}
		else {
			console.log(test);
			test["mode"] = "inactive";
		}
	})

	previous.map((test) => {
		let test_start = Date.parse(test.Date.slice(0, 11) + test.StartTime.slice(11, -1))
		let test_end = Date.parse(test.Date.slice(0, 11) + test.EndTime.slice(11, -1))

		if (test_start < stamp && test_end > stamp) {
			test["mode"] = "active";
		}
		else {
			test["mode"] = "inactive";
		}
	})

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
						Upcoming
					</button>
					<button
						className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
						onClick={() => toggleTab(2)}
					>
						Previous
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

								{upcoming.map((test) => {
									return <tbody>
										<tr>
											<td>{test.TestName}</td>
											<td>{test.CourseName}</td>
											<td>{test.Date.slice(0, 10)}</td>
											<td>{test.StartTime.slice(0, 5)}</td>
											<td>
												<a>
													{(test.mode == "active" && test.Attempted === 0) ? (
														<button className='linkselect' onClick={() => {
															localStorage.setItem("papercode", test.PaperCode);
															localStorage.setItem("duration", test.Duration);
															navigate("/test");
														}}>
															{test.Link}
														</button>
													) : <div>{test.Link}</div>}
												</a>
											</td>
										</tr>
									</tbody>
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

								{previous.map((test) => {
									return <tbody>
										<tr>

											<td>{test.TestName}</td>
											<td>{test.CourseName}</td>
											<td>{test.Date.slice(0, 10)}</td>
											<td>{test.StartTime.slice(0, 5)}</td>
											<td>
												<a href="/profile">{test.Link}</a>
											</td>
										</tr>
									</tbody>
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

								{upcoming.map((test) => {
									return <tbody>
										<tr>

											<td>{test.TestName}</td>
											<td>{test.CourseName}</td>
											<td>{test.Date.slice(0, 10)}</td>
											<td>{test.StartTime.slice(0, 5)}</td>
											<td>{test.Attempted === 0 && test.mode === "active"
												? (<a>
													<button className='linkselect' onClick={() => {
														localStorage.setItem("papercode", test.PaperCode);
														navigate("/test");
													}}>
														{test.Link}
													</button>
												</a>)
												: (<a href="/profile">{test.Link}</a>)}
											</td>
										</tr>
									</tbody>
								})}

								{previous.map((test) => {
									return <tbody>
										<tr>
											<td>{test.TestName}</td>
											<td>{test.CourseName}</td>
											<td>{test.Date.slice(0, 10)}</td>
											<td>{test.StartTime.slice(0, 5)}</td>
											<td>{test.Attempted === 0 && test.mode === "active"
												? (<a>
													<button className='linkselect' onClick={() => {
														localStorage.setItem("papercode", test.PaperCode);
														navigate("/test");
													}}>
														{test.Link}
													</button>
												</a>)
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

	return (
		<React.Fragment>
			<Header_Menu />
			{loading
				? (
					<div className='Loading-Screen'>
						<Oval
							height={80}
							width={80}
							color="#4fa94d"
							wrapperStyle={{}}
							wrapperClass=""
							visible={true}
							ariaLabel='oval-loading'
							secondaryColor="#4fa94d"
							strokeWidth={2}
							strokeWidthSecondary={2} />
					</div>)
				: null}
			<div className="section-type-admin-dashboard">
				<Tabs />
				<div className="calendar">
					<Calendar onChange={setDate} value={date} onClickDay={handleDateChange} tileContent={
						({ activeStartDate, date, view }) => {
							return upcoming.map((test) => (
								(view === 'month' && date.getDate() === parseInt(test.Date.slice(8, 10))
									&& date.getMonth() === (parseInt(test.Date.slice(5, 7)) - 1)
									&& date.getYear() === (parseInt(test.Date.slice(0, 4)) - 1900))
									? <p className='DateContent' >{(test.TestName)}</p>
									: null))
						}} />
				</div>
			</div >

		</React.Fragment>

	);
};

export default Dashboard;