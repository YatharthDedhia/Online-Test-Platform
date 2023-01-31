import React from "react";
import { useState, useEffect } from "react";
import './css/institute.css';
import './css/ranklist.css';
import './css/navbar.css';
import axios from "axios";
import logo from '../../Images/logo-no-background.png'

const Admin = () => {
    const [label, setlabel] = useState(3)

    const Header_Menu = () => {
        return (
            <header class="block-institute">
                <ul class="header-menu horizontal-list">
                    <li>
                        <button className="header-menu-tab" onClick={() => setlabel(3)}><span className="icon fontawesome-calendar scnd-font-color"></span>Assign Users</button>
                    </li>
                    <li>
                        <button className="header-menu-tab" onClick={() => { setlabel(1) }}><span className="icon fontawesome-trophy scnd-font-color"></span>Assign Student courses</button>
                    </li>
                    <li>
                        <button className="header-menu-tab" onClick={() => { setlabel(0) }}><span className="icon fontawesome-envelope scnd-font-color"></span>Assign Teacher Courses</button>
                    </li>
                    <li>
                        <button className="header-menu-tab" onClick={() => {
                            localStorage.removeItem("login");
                            localStorage.removeItem("duration");
                            localStorage.removeItem("papercode");
                            localStorage.removeItem("bankcode");

                            window.location.reload();
                        }}><span className="icon fontawesome-envelope scnd-font-color"></span>LogOut</button>
                    </li>
                </ul>
                {/* <div className="profile-menu">
          <p>Me <a href="#26"><span className="entypo-down-open scnd-font-color"></span></a></p>
          <div className="profile-picture small-profile-picture">
            <img width="40px" src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg" />
          </div>
        </div> */}
            </header>
        );
    };

    const NavLinks = () => (
        <React.Fragment>
            <p>
                <a >
                    <button className="institute-navbar-button" onClick={() => setlabel(3)}><span>Users</span></button>
                </a>
            </p>

            <p>
                <a>
                    <button className="institute-navbar-button" onClick={() => { setlabel(1) }} ><span>Students</span></button>
                </a>
            </p>

            <p>
                <a>
                    <button className="institute-navbar-button" onClick={() => { setlabel(0) }}><span>Teachers</span></button>
                </a>
            </p>
            <p>
                <a href="/">Pricing</a>
            </p>

            <p>
                <li class="nav-link dropdown"><a href="" class="dropdown">Contact<i
                    class="bi bi-chevron-compact-down"></i></a>
                    <ul class="dropdown-list">
                        <li class="nav-link">
                            <a href="mailto:cod.callofduty@gmail.com" target="_blank">&nbsp;&nbsp;E-Mail</a>
                            <li class="nav-link">
                                <a href="">Phone</a>
                            </li>
                        </li>
                    </ul>
                </li>
            </p>
            <p>
                <a>LogOut</a>
                <button onClick={() => {
                    localStorage.removeItem("login");
                    localStorage.removeItem("duration");
                    localStorage.removeItem("papercode");
                    localStorage.removeItem("bankcode");

                    window.location.reload();
                    // console.log("loggedout")
                }}></button>
            </p>
        </React.Fragment>
    );

    const Navbar = () => {
        return (
            <div className="landing-navbar">
                <div className="institute-navbar-logo">
                    <img src={logo}></img>
                </div>

                <div className="landing-navbar-links">
                    <NavLinks />
                </div>
            </div>
        );
    };

    const UserList = () => {

        const testObj = [
            {
                "UserId": 1,
                "UserName": "vivek123",
                "Password": "$2b$10$Zvar4UhfXRwdM27cSSC1fuvRyJHrkD.WHwiSiWRcz9mpW.D.lnBgi",
                "FirstName": "Vivek",
                "LastName": "Dalal",
                "EmailId": "vddalal_b21@ce.vjti.ac.in",
                "MobileNo": 7021532074,
                "LastLoginDateTime": "2023-01-30T08:56:53.920Z",
                "DateOfBirth": "1974-07-13T00:00:00.000Z",
                "Age": 26,
                "TypeId": 2,
                "ActivationStatus": true,
                "Photo": "http://res.cloudinary.com/dugkqpzgq/image/upload/v1675069011/vintblbmeft1xoow9sd4.jpg"
            }
        ];

        const [obj, setObj] = useState(testObj)
        const [newType, setNewType] = useState(1)
        let temparr = []

        useEffect(() => {

            axios.get("https://lmsapiv01.azurewebsites.net/api/user")
                .then((response) => {
                    console.log(response.data[0]);
                    setObj(response.data[0])
                })
        }, [])

        return (
            <div class="ranklist-container-institute">
                <header>
                    <br />
                    <h1>Users List</h1>
                    <br />
                </header>
                <div class="ranklist-wrapper-institute">
                    <table>
                        <thead>
                            <tr>
                                <th>UserID</th>
                                <th>User Type</th>
                                <th>Name</th>
                                <th>E-Mail</th>
                                <th>Activate</th>
                            </tr>
                        </thead>
                        {obj.map((e) => {
                            if (e.ActivationStatus === false) {
                                return (
                                    <tbody>
                                        <tr>
                                            <td class="ranklist-rank">{e.UserId}</td>
                                            <td class="ranklist-points">
                                                {e.TypeId === 1
                                                    ? "Teacher"
                                                    : "Student"}
                                                {/* <div class="selector">
                                                    {newType === 0
                                                        ? (<h1 className='ReEnter'>Select Type</h1>)
                                                        : null
                                                    }
                                                    <div class="selector-item">
                                                        <input type="radio" id="radio1" name="selector" value="2" class="selector-item_radio" onClick={(f) => setNewType(f.target.value)} />
                                                        <label for="radio1" class="selector-item_label">Student</label>
                                                    </div>
                                                    <div class="selector-item">
                                                        <input type="radio" id="radio2" name="selector" value="1" class="selector-item_radio" onClick={(f) => setNewType(f.target.value)} />
                                                        <label for="radio2" class="selector-item_label">Teacher</label>
                                                    </div>
                                                </div> */}
                                            </td>
                                            <td class="ranklist-team">{e.FirstName + ' ' + e.LastName}</td>
                                            <td class="ranklist-up-down">{e.EmailId}</td>
                                            <td class="ranklist-up-down">
                                                <button className='linkselect'
                                                    onClick={
                                                        e.TypeId === 2
                                                            ? axios.post("https://lmsapiv01.azurewebsites.net/api/activate/student", { UserId: e.UserId }).then(result => { console.log(result.data) })
                                                            : axios.post("https://lmsapiv01.azurewebsites.net/api/activate/teacher", { UserId: e.UserId }).then(result => { console.log(result.data) })
                                                    }>Activate</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                )
                            }

                        })}
                    </table>
                </div>
            </div>
        )
    }

    const StudentCourse = () => {

        const testObj = [
            {
                "UserId": 1,
                "UserName": "vivek123",
                "FirstName": "Vivek",
                "LastName": "Dalal",
                "TypeId": 2,
                "StudentId": 1
            }
        ];

        const [obj, setObj] = useState(testObj)
        const [courseList, setCourselist] = useState([])

        useEffect(() => {

            axios.get("https://lmsapiv01.azurewebsites.net/api/student")
                .then((response) => {
                    // console.log(response.data[0]);
                    setObj(response.data[0])
                })

            axios.get("https://lmsapiv01.azurewebsites.net/api/course")
                .then((response) => {
                    setCourselist(response.data[0]);
                })
        }, [])

        return (
            <div class="ranklist-container-institute">
                <header>
                    <br />
                    <h1>Student List</h1>
                    <br />
                </header>
                <div class="ranklist-wrapper-institute">
                    <table>
                        <thead>
                            <tr>
                                <th>Student ID</th>
                                <th>Name</th>
                                {courseList.map((course) => {
                                    return (
                                        <th>{course.CourseName}</th>
                                    )
                                })}
                            </tr>
                        </thead>
                        {obj.map((e) => {
                            return (
                                <tbody>
                                    <tr>
                                        <td class="ranklist-rank">{e.StudentId}</td>
                                        <td class="ranklist-team">{e.FirstName + ' ' + e.LastName}</td>

                                        {courseList.map((course) => {
                                            return (
                                                <td class="ranklist-up-down">
                                                    <button className='linkselect' onClick={() => {
                                                        console.log(e.StudentId);
                                                        axios.post("https://lmsapiv01.azurewebsites.net/api/student/courses", { StudentId: e.StudentId, CourseId: course.CourseId }).then(result => { console.log(result.data) })
                                                    }}>Assign</button>
                                                </td>
                                            )
                                        })}
                                    </tr>
                                </tbody>
                            )
                        })}
                    </table>
                </div>
            </div>
        )
    }

    const TeacherCourse = () => {

        const testObj = [
            {
                "UserId": 2,
                "UserName": "akumar",
                "FirstName": "Akash",
                "LastName": "Kumar",
                "TypeId": 1,
                "TeacherId": 1
            }
        ];

        const [obj, setObj] = useState(testObj)
        const [courseList, setCourselist] = useState([])

        useEffect(() => {

            axios.get("https://lmsapiv01.azurewebsites.net/api/teacher")
                .then((response) => {
                    console.log(response.data[0]);
                    setObj(response.data[0])
                })

            axios.get("https://lmsapiv01.azurewebsites.net/api/course")
                .then((response) => {
                    setCourselist(response.data[0]);
                })
        }, [])

        return (
            <div class="ranklist-container-institute">
                <header>
                    <br />
                    <h1>Teacher List</h1>
                    <br />
                </header>
                <div class="ranklist-wrapper-institute">
                    <table>
                        <thead>
                            <tr>
                                <th>Teacher ID</th>
                                <th>Name</th>
                                {courseList.map((course) => {
                                    return (
                                        <th>{course.CourseName}</th>
                                    )
                                })}
                            </tr>
                        </thead>
                        {obj.map((e) => {
                            return (
                                <tbody>
                                    <tr>
                                        <td class="ranklist-rank">{e.TeacherId}</td>
                                        <td class="ranklist-team">{e.FirstName + ' ' + e.LastName}</td>

                                        {courseList.map((course) => {
                                            return (
                                                <td class="ranklist-up-down">
                                                    <button className='linkselect' onClick={() => {
                                                        axios.post("https://lmsapiv01.azurewebsites.net/api/teacher/courses", { TeacherId: e.TeacherId, CourseId: course.CourseId }).then(result => { console.log(result.data) })
                                                    }}>Assign</button>
                                                </td>
                                            )
                                        })}
                                    </tr>
                                </tbody>
                            )
                        })}
                    </table>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Header_Menu />
            {/* <Navbar /> */}
            {label === 1 ? (<StudentCourse />) : null}
            {label === 3 ? (<UserList />) : null}
            {label === 0 ? (<TeacherCourse />) : null}
        </div>
    )
}
export default Admin;