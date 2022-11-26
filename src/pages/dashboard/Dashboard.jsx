// import React from 'react';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './css/dashboard.css';
import './css/copylink.css';
import './css/commoninput.css';
import './css/search.css'
import './css/table.css'
import './css/sidebar.css'
import './css/calendar.css'

function Tabs() {
	const [toggleState, setToggleState] = useState(1);
  
	const toggleTab = (index) => {
	  setToggleState(index);
	};
	return (
		<div className="container">
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
			<div
			  className={toggleState === 1 ? "content  active-content" : "content"}
			>
			  <hr />
			  <p>
			  <table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Time</th>
					<th>Link</th>
				</tr>
			</thead>
			{mockTests.map((test) =>  (
				<tbody>
					<tr>
						
						<td>{test.name}</td>
						<td>{test.time}</td>
						<td>{test.link}</td>
					</tr>
				</tbody>
			))}
		</table>
			  </p>
			</div>
	
			<div
			  className={toggleState === 2 ? "content  active-content" : "content"}
			>
			  <hr />
			  <p>
			  <table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Time</th>
					<th>Link</th>
				</tr>
			</thead>

			{mockTests.map((test) => (
				<tbody>
					<tr>
						<td>{test.name}</td>
						<td>{test.time}</td>
						<td>{test.link}</td>
					</tr>
				</tbody>
			))}
		</table>
			  </p>
			</div>
	
			<div
			  className={toggleState === 3 ? "content  active-content" : "content"}
			>
			  <hr />
			  <p>
			  <table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Time</th>
					<th>Link</th>
				</tr>
			</thead>

			{mockTests.map((test) => (
				<tbody>
					<tr>
						<td>{test.name}</td>
						<td>{test.time}</td>
						<td>{test.link}</td>
					</tr>
				</tbody>
			))}
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
		time: '20/01/2022 17:30',
		status: "unattempted"
	},
	{
		name: 'Periodic Test - OSLT',
		link: 'pbl-dfse-phd',
		time: '21/01/2022 17:30',
		status: "unattempted"
	},
	{
		name: 'Periodic Test - SPCC',
		link: 'fhh-dfgg-aee',
		time: '22/01/2022 17:30',
		status: 'attempted'
	}
];

const tabList = [
	{
		name: "Un-Attempted"
	},
	{
		name: "Attempted"
	},
	{
		name: "All"
	}
]

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

const CopyLink = ({ link = 'http://github.com' }) => {
	return (
		<div className="copy-link">
			<div className="copy-link-input">
				<CommonInput value={link} />
			</div>
			<button
				className="copy-btn"
				onClick={(e) => {
					navigator.clipboard.writeText(link);
					e.target.innerHTML = 'Copied!';
					setTimeout(function () {
						e.target.innerHTML = 'Copy';
					}, 2000);
				}}
			>
				Copy
			</button>
		</div>
	);
};

const NavLinks = () => (
	<React.Fragment>
		<p>
			<div>
				<form action="" autocomplete="on">
					<input className="Search1" type="text" id='search' name='search' placeholder="Search" />
					<input id="search_submit" value="Rechercher" type="submit" />
				</form>
			</div>
		</p>
		<p>
			<a href="/login">Profile</a>
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
			{/* m */}
			<Sidebar />
			{/* m */}
			<div className="landing-navbar-logo">
				<h1>Test Platform</h1>
			</div>
			<div className="landing-navbar-links">
				<NavLinks />
			</div>
		</div>
	);
};

const Table = () => {
	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Time</th>
					<th>Link</th>
				</tr>
			</thead>

			{mockTests.map((test) => (
				<tbody>
					<tr>
						<td>{test.name}</td>
						<td>{test.time}</td>
						<td>{test.link}</td>
					</tr>
				</tbody>
			))}
		</table>
	);
}

const Dashboard = () => {
	const [value, onChange] = useState(new Date());
	return (
		<React.Fragment>
			<Navbar />
			<div className="section-type-admin-dashboard">
				{/* <div className="test-dashboard">
					{tabList.map((tab) => (
						<div className="mytabs">
							<input type="radio" id={tab.name} name="mytabs" checked="checked" />
							<label for={tab.name}>{tab.name}</label>
							<div className="tab">
								<div className="test-items">
									<Table />
								</div>
							</div>
						</div>
					))}
				</div> */}
				<Tabs/>
				<div className="calendar">
					<Calendar onChange={onChange} value={value} />
				</div>
			</div >
		</React.Fragment>
	);
};
export default Dashboard;