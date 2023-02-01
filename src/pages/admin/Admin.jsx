import React from "react";
import { useState, useEffect } from "react";
// import './css/institute.css';
import './css/ranklist.css';
// import './css/navbar.css';
import axios from "axios";
import logo from '../../Images/logo-no-background.png'
import { Oval } from "react-loader-spinner";
import Select from "react-dropdown-select";
import { useNavigate } from "react-router-dom";

const Admin = () => {
    const [label, setlabel] = useState(3);
    const [courseName1,setCourseName1]=useState("");
    const [courseCode1,setCourseCode1]=useState("");
    const [link1,setLink1]=useState("");
    const [image,setImage]=useState("");
    const [syllabus,setSyllabus]=useState("");
    const [loading, setLoading] = useState(false);

    const Header_Menu = () => {
        const navigate = useNavigate();
        return (
            <header class="block-institute">
                <ul class="header-menu horizontal-list">
                    <li>
                        <button className="header-menu-tab" onClick={() => navigate("/")}>
                            <a href="/contact">
                                <img src={logo} height="50px" width="100px"></img>
                            </a>
                        </button>
                    </li>
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
                        <button className="header-menu-tab" onClick={() => { setlabel(2) }}><span className="icon fontawesome-envelope scnd-font-color"></span>Make Course</button>
                    </li>
                    <li>
                        <button className="header-menu-tab" onClick={() => {
                            localStorage.removeItem("login");
                            localStorage.removeItem("duration");
                            localStorage.removeItem("papercode");
                            localStorage.removeItem("papercode");
                            localStorage.removeItem("teacher_id");
                            localStorage.removeItem("authenticated");
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

                    // console.log(response.data[0]);
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
                                                    onClick={() => {
                                                        e.TypeId === 2
                                                            ? axios.post("https://lmsapiv01.azurewebsites.net/api/activate/student", { UserId: e.UserId }).then(result => { console.log(result.data) })
                                                            : axios.post("https://lmsapiv01.azurewebsites.net/api/activate/teacher", { UserId: e.UserId }).then(result => { console.log(result.data) })
                                                    }

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
    const postCourse1 = (e) => {
        e.preventDefault();
        setLoading(true)
    
        const sendData1 = {
          "CourseName": courseName1,
          "CourseCode": courseCode1,
          "Notes": link1,
          "Image": image,
          "Syllabus": syllabus,
        };
    
    
        axios.post('https://lmsapiv01.azurewebsites.net/api/course', sendData1).then(result => {
          setLoading(false)
        });
    
      };
    
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
        const [courseLength, setCourseLength] = useState(0)
        const [disMath, setdismath] = useState(false)
        const [disChem, setdischem] = useState(false)
        const [disPhy, setdisphy] = useState(false)
        const [disBio, setdisbio] = useState(false)
        let temparr = []

        useEffect(() => {

            axios.get("https://lmsapiv01.azurewebsites.net/api/student")
                .then((response) => {
                    // console.log(response.data[0]);
                    setObj(response.data[0])
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
                                <th>Maths</th>
                                <th>Chem</th>
                                <th>Phy</th>
                                <th>Geo</th>
                            </tr>
                        </thead>
                        {obj.map((e) => {
                            return (
                                <tbody>
                                    <tr>
                                        <td class="ranklist-rank">{e.StudentId}</td>
                                        <td class="ranklist-team">{e.FirstName + ' ' + e.LastName}</td>
                                        <td class="ranklist-up-down">
                                            <button className='linkselect' disabled={disMath} onClick={() => {
                                                // console.log(e.StudentId);
                                                // postMath
                                                // setdismath(true);
                                                axios.post("https://lmsapiv01.azurewebsites.net/api/student/courses", { StudentId: e.StudentId, CourseId: 2 }).then(result => { console.log(result.data) })
                                            }}>Assign</button>
                                        </td>

                                        <td class="ranklist-up-down">
                                            <button className='linkselect' disabled={disChem} onClick={() => {
                                                // setdischem(true)
                                                axios.post("https://lmsapiv01.azurewebsites.net/api/student/courses", { StudentId: e.StudentId, CourseId: 3 }).then(result => { console.log(result.data) })
                                            }}>Assign</button>
                                        </td>

                                        <td class="ranklist-up-down">
                                            <button className='linkselect' disabled={disPhy} onClick={() => {
                                                // setdisphy(true)
                                                axios.post("https://lmsapiv01.azurewebsites.net/api/student/courses", { StudentId: e.StudentId, CourseId: 1 }).then(result => { console.log(result.data) })
                                            }}>Assign</button>
                                        </td>

                                        <td class="ranklist-up-down">
                                            <button className='linkselect' disabled={disBio} onClick={() => {
                                                // setdisbio(true)
                                                axios.post("https://lmsapiv01.azurewebsites.net/api/student/courses", { StudentId: e.StudentId, CourseId: 4 }).then(result => { console.log(result.data) })
                                            }}>Assign</button>
                                        </td>
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
        const [disMath, setdismath] = useState(false)
        const [disChem, setdischem] = useState(false)
        const [disPhy, setdisphy] = useState(false)
        const [disBio, setdisbio] = useState(false)
        let temparr = []

        useEffect(() => {

            axios.get("https://lmsapiv01.azurewebsites.net/api/teacher")
                .then((response) => {
                    // console.log(response.data[0]);
                    setObj(response.data[0])
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
                                <th>Maths</th>
                                <th>Chem</th>
                                <th>Phy</th>
                                <th>Geo</th>
                            </tr>
                        </thead>
                        {obj.map((e) => {
                            // { console.log(e) }
                            return (
                                <tbody>
                                    <tr>
                                        <td class="ranklist-rank">{e.TeacherId}</td>
                                        <td class="ranklist-team">{e.FirstName + ' ' + e.LastName}</td>
                                        <td class="ranklist-up-down">
                                            <button className='linkselect' disabled={disMath} onClick={() => {
                                                // console.log(e.TeacherId);
                                                // postMath
                                                // setdismath(true);
                                                axios.post("https://lmsapiv01.azurewebsites.net/api/teacher/courses", { TeacherId: e.TeacherId, CourseId: 2 }).then(result => { console.log(result.data) })
                                            }}>Assign</button>
                                        </td>

                                        <td class="ranklist-up-down">
                                            <button className='linkselect' disabled={disChem} onClick={() => {
                                                // setdischem(true)
                                                axios.post("https://lmsapiv01.azurewebsites.net/api/teacher/courses", { TeacherId: e.TeacherId, CourseId: 3 }).then(result => { console.log(result.data) })
                                            }}>Assign</button>
                                        </td>

                                        <td class="ranklist-up-down">
                                            <button className='linkselect' disabled={disPhy} onClick={() => {
                                                // setdisphy(true)
                                                axios.post("https://lmsapiv01.azurewebsites.net/api/teacher/courses", { TeacherId: e.TeacherId, CourseId: 1 }).then(result => { console.log(result.data) })
                                            }}>Assign</button>
                                        </td>

                                        <td class="ranklist-up-down">
                                            <button className='linkselect' disabled={disBio} onClick={() => {
                                                // setdisbio(true)
                                                axios.post("https://lmsapiv01.azurewebsites.net/api/teacher/courses", { TeacherId: e.TeacherId, CourseId: 4 }).then(result => { console.log(result.data) })
                                            }}>Assign</button>
                                        </td>
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
            {label === 1 ? (<StudentCourse />) : null}
            {label === 3 ? (<UserList />) : null}
            {label === 0 ? (<TeacherCourse />) : null}
            {label === 2 ? (
        <div className="container7">
          <form onSubmit={postCourse1} className="container5">
            <label>
              Course Name:
              <br />
              <input
                className="Course Name"
                name="courseName"
                type="text"
                autoComplete="off"
                onChange={e => setCourseName1(e.target.value)}
              />
            </label>

            <br />
            <br />
            <label>
              Course Code:
              <br />
              <input
                className="CourseCode"
                name="courseCode"
                type="number"
                autoComplete="off"
                onChange={e => setCourseCode1(e.target.value)}
              />
            </label>
            <label>
              Notes Folder Link:
              <br />
              <input
                className="Link1"
                name="link1"
                type="text"
                autoComplete="off"
                onChange={e => setLink1(e.target.value)}
              />
            </label>

            <br />
            <br />

            <label>
              Image Link:
              <br />
              <input
                className="Link1"
                name="link1"
                type="text"
                autoComplete="off"
                onChange={e => setImage(e.target.value)}
              />
            </label>

            <br />
            <br />

            <label>
              Link For Book To Refer:
              <input
                className="Link1"
                name="link1"
                type="text"
                autoComplete="off"
                onChange={e => setSyllabus(e.target.value)}
              />
            </label>
            <br />
            <br />
            <br />
            <button className='bubbly-button2' type="submit">Submit</button>
          </form>

        </div>
      ) : null}

        </div>
    )
}
export default Admin;