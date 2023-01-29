import React, { useState } from 'react';
import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';
import Popup from 'reactjs-popup';
import './css/profile.css'
import './css/navbar.css'
import './css/line-chart.css'
import './css/ranklist.css'
import './css/graph.css'
import axios from 'axios';
import line from "simple-line-chart";
import { Chart, ChartSeries, ChartSeriesItem, ChartCategoryAxis, ChartCategoryAxisItem } from '@progress/kendo-react-charts';
import 'hammerjs';
import { useEffect } from 'react';
import logo from '../../Images/logo-no-background.png'


const NavLinks = () => (
    <React.Fragment>
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
                
                window.location.reload();
                // console.log("loggedout")
            }}></button>
        </p>
    </React.Fragment>
);

const Navbar = () => {
    return (
        <div className="landing-navbar">
            <div className="landing-navbar-logo">
                <img src={logo}></img>
            </div>
            <div className="landing-navbar-links">
                <NavLinks />
            </div>
        </div>
    );
};

const Profile_Block = () => {
    const [firstName, setFirstName] = useState('');
    const [password, setPassword] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailID, setemailID] = useState('');
    const [userName, setUsername] = useState('');
    const [image, setImage] = useState("");
    const [mobileNo, setmobileNo] = useState("");
    const [url, setUrl] = useState("");

    const submitImage = () => {
        let userid = (JSON.parse(localStorage.getItem('login')).user.UserId).toString();
        console.log(userid);
        let typeid = (JSON.parse(localStorage.getItem('login')).user.TypeId)
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "Inheritance")
        data.append("cloud_name", "dugkqpzgq")

        fetch("https://api.cloudinary.com/v1_1/dugkqpzgq/image/upload", {
            method: "post",
            body: data
        }
        )
            .then((res) => res.json())
            .then((data) => {
                setUrl(data.url)
                // console.log(data.url);
                const sendData = {
                    "UserId": userid,
                    "UserName": userName,
                    "Password": password,
                    "FirstName": firstName,
                    "LastName": lastName,
                    "EmailId": emailID,
                    "MobileNo": parseInt(mobileNo),
                    "LastLoginDateTime": "2022-11-27T00:00:00.000Z",
                    "DateOfBirth": "1974-07-13T00:00:00.000Z",
                    "Age": 26,
                    "TypeId": typeid,
                    "ActivationStatus": '0',
                    "Photo": data.url,
                };

                // console.log(sendData.Photo);

                axios.post('https://lmsapiv01.azurewebsites.net/api/update/user', sendData).then(result => { console.log(result.data) });


            }).catch((err) => {
                console.log(err);
            })
    }

    useEffect(async () => {
        let userid = (JSON.parse(localStorage.getItem('login')).user.UserId).toString();
        console.log(userid);
        // userid = "4";
        const url3 = "https://lmsapiv01.azurewebsites.net/api/user/" + userid;
        axios
            .get(url3)
            .then((response) => {
                console.log(response.data[0][0])
                // for (let i = 0; i < response.data[0].length; i++) {
                setFirstName(response.data[0][0].FirstName);
                setLastName(response.data[0][0].LastName);
                setemailID(response.data[0][0].EmailId);
                setUsername(response.data[0][0].UserName);
                setPassword(response.data[0][0].Password);
                setmobileNo(response.data[0][0].MobileNo);
                setUrl(response.data[0][0].Photo)
                // }

            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

    return (
        <div class="profile block">
            <a class="add-button">
                <label >
                    {/* <input type="file" class="icon entypo-plus scnd-font-color" onChange={(e) => setImage(e.target.files[0])} /> */}
                    {/* <i>i</i> */}
                </label>
            </a>
            <div class="profile-picture big-profile-picture clear">
                <img className='profile-pic-upload' src={url} />
            </div>
            <h1 class="user-name">{firstName} {lastName}</h1>
            <div class="profile-description">
                <p class="scnd-font-color">Email ID : {emailID}</p>
                <p class="scnd-font-color">Username : {userName}</p>
            </div>

            <div class="upload-btn-wrapper">
                <button class="btn">Upload a file</button>
                <input type="file" onChange={(e) => setImage(e.target.files[0])} name="myfile" />
            </div>
            {/* <button className="btn">Upload a file</button>
            <input type="file" ></input> */}
            <button onClick={submitImage} className='file-button'>Upload image as profile Photo</button>
        </div>
    );
};

const Graph = () => {
    // const pdata = [
    //     {
    //         name: 'MongoDb',
    //         student: 11,
    //         fees: 120
    //     },
    //     {
    //         name: 'Javascript',
    //         student: 15,
    //         fees: 12
    //     },
    //     {
    //         name: 'PHP',
    //         student: 5,
    //         fees: 10
    //     },
    //     {
    //         name: 'Java',
    //         student: 10,
    //         fees: 5
    //     },
    //     {
    //         name: 'C#',
    //         student: 9,
    //         fees: 4
    //     },
    //     {
    //         name: 'C++',
    //         student: 10,
    //         fees: 8
    //     },
    // ];

    const pdata = [
        {
            "PaperCode": 101,
            "TestName": "React",
            "Date": "2023-01-20T00:00:00.000Z",
            "StartTime": "1970-01-01",
            "EndTime": "1970-01-01T08:00:00.000Z",
            "marks": 3
        },
        {
            "PaperCode": 102,
            "TestName": "Node",
            "Date": "2023-02-14T00:00:00.000Z",
            "StartTime": "1970-01-01",
            "EndTime": "1970-01-01T06:30:00.000Z",
            "marks": 15
        },
        {
            "PaperCode": 103,
            "TestName": "Express",
            "Date": "2023-10-14T00:00:00.000Z",
            "StartTime": "1970-01-01",
            "EndTime": "1970-01-01T13:30:00.000Z",
            "marks": 10
        },
        {
            "PaperCode": 103,
            "TestName": "Express",
            "Date": "2023-10-14T00:00:00.000Z",
            "StartTime": "1970-01-01",
            "EndTime": "1970-01-01T13:30:00.000Z",
            "marks": 9
        },
        {
            "PaperCode": 103,
            "TestName": "Express",
            "Date": "2023-10-14T00:00:00.000Z",
            "StartTime": "1970-01-01",
            "EndTime": "1970-01-01T13:30:00.000Z",
            "marks": 20
        },
        {
            "PaperCode": 103,
            "TestName": "Express",
            "Date": "2023-10-14T00:00:00.000Z",
            "StartTime": "1970-01-01",
            "EndTime": "1970-01-01T13:30:00.000Z",
            "marks": 25
        },
        {
            "PaperCode": 103,
            "TestName": "Express",
            "Date": "2023-10-14T00:00:00.000Z",
            "StartTime": "1970-01-01",
            "EndTime": "1970-01-01T13:30:00.000Z",
            "marks": 13
        }
    ]

    const [graph_data, setGraphData] = useState([])

    pdata.map((f) => {
        f["StartTime"] = (parseInt(f.StartTime.slice(8, 10))).toString() + "/" + (parseInt(f.StartTime.slice(5, 7))).toString();
    })

    useEffect(async () => {
        let userid = (JSON.parse(localStorage.getItem('login')).user.UserId).toString();
        // console.log(userid);

        setGraphData([])
        await axios.get("https://lmsapiv01.azurewebsites.net/api/attemptedlist/" + userid)
            .then((response) => {

                response.data[0].map(async (f) => {
                    var num = f.PaperCode
                    var str = num.toString()

                    await axios
                        .get("https://lmsapiv01.azurewebsites.net/api/totalmarksallstuds/" + str)
                        .then((response2) => {
                            response2.data[0].map((res) => {
                                if (res.UserID.toString() === userid) {
                                    f["marks"] = res.MarksScored;
                                    // f["StartTime"] = f.StartTime.slice(0, 10);
                                    // f["StartTime"] = f.StartTime.slice(8, 10) + "/" + f.StartTime.slice(5, 7);
                                }
                            })
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                    setGraphData(current => [...current, f])
                    // console.log(graph_data)
                    // setGraphData(current => [...current, {}])
                })
            })
    }, [])

    return (
        <div className='graph-head'>
            <h1 className="text-heading">
                Performance Graph
            </h1>
            <div>
                {/* {console.log(graph_data)} */}
                <ResponsiveContainer width="100%" aspect={3}>
                    <LineChart data={graph_data} margin={{ right: 300 }}>
                        <Line type="monotone" dataKey="marks" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="StartTime" stroke="white" />
                        <YAxis stroke="white" />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>

            </div>

        </div>
    );
}

const RankList = () => {

    const testObj = [
        {
            "UserID": 4,
            "paperCode": 103,
            "TestName": "Express",
            "FirstName": "Manav",
            "LastName": "Shah",
            "MarksScored": 5
        }
    ];

    const [obj, setObj] = useState([])
    useEffect(async () => {
        let userid = (JSON.parse(localStorage.getItem('login')).user.UserId).toString();
        // console.log(userid);
        setObj([])
        axios.get("https://lmsapiv01.azurewebsites.net/api/attemptedlist/" + userid)
            .then((response) => {

                response.data[0].map((f) => {
                    var num = f.PaperCode
                    var str = num.toString()

                    axios
                        .get("https://lmsapiv01.azurewebsites.net/api/totalmarksallstuds/" + str)
                        .then((response2) => {
                            // console.log(response2.data[0])
                            response2.data[0].map((res) => {
                                // temparr.push(res)
                                setObj(current => [...current, res])
                            })
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                })
                // console.log(temparr);
            })
        // setObj(temparr);
    }, [])

    return (
        <div class="ranklist-container">
            <header>
                <br />
                <h1>Rankings</h1>
                <br />
            </header>
            <div class="ranklist-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>UserID</th>
                            <th>Name</th>
                            <th>Test</th>
                            <th>Marks</th>
                        </tr>
                    </thead>
                    {obj.map((e) => {
                        return (
                            <tbody>
                                <tr>
                                    <td class="ranklist-rank">{e.UserID}</td>
                                    <td class="ranklist-team">{e.FirstName + ' ' + e.LastName}</td>
                                    <td class="ranklist-points">{e.TestName}</td>
                                    <td class="ranklist-up-down">{e.MarksScored}</td>
                                </tr>
                            </tbody>
                        )

                    })}
                </table>
            </div>
        </div>
    )
}

const Profile = () => {
    // let login = JSON.parse(localStorage.getItem('login'));
    // console.log(login)
    return (
        <div className='main-container'>
            <div className='container3'>
                <Navbar />
                <Profile_Block />
                <Graph />
                <RankList />
            </div>
        </div>
    );
};
export default Profile;
