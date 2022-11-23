import React from 'react';
import './css/dashboard.css';
import './css/copylink.css';
import './css/commoninput.css';
import './css/search.css'
import './css/table.css'

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
					<input type="text" id='search' name='search' placeholder="Search" />
					<input id="search_submit" value="Rechercher" type="submit" />
				</form>
			</div>
		</p>
		<p>
			<a href="/login">Profile</a>
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
	return (
		<React.Fragment>
			<Navbar />
			<div className="section-type admin-dashboard">
				<div className="test-dashboard">
					{tabList.map((tab) => (
						<div className="mytabs">
							<input type="radio" id="tabfree" name="mytabs" checked="checked" />
							<label for="tabfree">{tab.name}</label>
							<div className="tab">
								<div className="test-items">
									<Table />
								</div>
							</div>

						</div>
					))}
				</div>
			</div >
		</React.Fragment>
	);
};

export default Dashboard;