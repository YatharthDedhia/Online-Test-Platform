
// import React from "react";
import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import './css/profile.css'
import './css/line-chart.css'
import './css/ranklist.css'
import axios from 'axios';
import line from "simple-line-chart";
import { Chart, ChartSeries, ChartSeriesItem, ChartCategoryAxis, ChartCategoryAxisItem } from '@progress/kendo-react-charts';
import 'hammerjs';
import { useEffect } from 'react';
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>

const Profile_Block = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailID, setemailID] = useState('');
    const [userName, setUsername] = useState('');
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");
    const url3 = "https://lmsapiv01.azurewebsites.net/api/user";
    axios
        .get(url3)
        .then((response) => {
            //   console.log(response.data[0][0].Answer)
            for (let i = 0; i < response.data[0].length; i++) {
                setFirstName(response.data[0][0].FirstName);
                setLastName(response.data[0][0].LastName);
                setemailID(response.data[0][0].EmailId);
                setUsername(response.data[0][0].UserName);
            }

        })
        .catch((err) => {
            console.log(err);
        });
    const submitImage = () => {
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
                console.log(data);
            }).catch((err) => {
                console.log(err);
            })
    }
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
                <p class="scnd-font-color">UserName : {userName}</p>
            </div>
            <input type="file" onChange={(e) => setImage(e.target.files[0])}></input>
            {/* <label>Select Picture</label> */}
            <button onClick={submitImage} className='file-button'>Upload image as profile Photo</button>
        </div>
    );
};

const Line_Graph = () => {
    return (
        <div class="line-chart-block block clear">
            {/* <!-- LINE CHART BLOCK (LEFT-CONTAINER) --> */}
            <div class="line-chart">
                {/* <!-- LINE-CHART by @kseso https://codepen.io/Kseso/pen/phiyL --> */}
                <div class='grafico'>
                    <ul class='eje-y'>
                        <li data-ejeY='30'></li>
                        <li data-ejeY='20'></li>
                        <li data-ejeY='10'></li>
                        <li data-ejeY='0'></li>
                    </ul>
                    <ul class='eje-x'>
                        <li>Apr</li>
                        <li>May</li>
                        <li>Jun</li>
                    </ul>
                    <span data-valor='25'>
                        <span data-valor='8'>
                            <span data-valor='13'>
                                <span data-valor='5'>
                                    <span data-valor='23'>
                                        <span data-valor='12'>
                                            <span data-valor='15'>
                                            </span></span></span></span></span></span></span>
                </div>
                <ul class="month-data clear">
                    <li>
                        <p>APR<span class="scnd-font-color"> 2013</span></p>
                        <p><span class="entypo-plus increment"> </span>21<sup>%</sup></p>
                    </li>
                    <li>
                        <p>MAY<span class="scnd-font-color"> 2013</span></p>
                        <p><span class="entypo-plus increment"> </span>48<sup>%</sup></p>
                    </li>
                    <li>
                        <p>JUN<span class="scnd-font-color"> 2013</span></p>
                        <p><span class="entypo-plus increment"> </span>35<sup>%</sup></p>
                    </li>
                </ul>
            </div>
        </div>

    );
};

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

    const [obj, setObj] = useState(testObj)
    let temparr = []
    useEffect(() => {
        axios.get("https://lmsapiv01.azurewebsites.net/api/attemptedlist/4")
            .then((response) => {
                response.data[0].map((f) => {
                    var num = f.PaperCode
                    var str = num.toString()
                    // console.log("https://lmsapiv01.azurewebsites.net/api/totalmarksallstuds/" + str)
                    axios
                        .get("https://lmsapiv01.azurewebsites.net/api/totalmarksallstuds/" + str)
                        .then((response2) => {
                            console.log(response2.data[0])
                            response2.data[0].map((res) => {
                                temparr.push(res)
                            })
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                })
                console.log(temparr)
                setObj(temparr)
            })
    }, [])
    return (
        <div class="ranklist-container">
            {console.log(obj)}
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
                    <tbody>
                        {obj.map((e) => {
                            return (
                                <tr>
                                    <td class="ranklist-rank">{e.UserID}</td>
                                    <td class="ranklist-team">{e.FirstName + ' ' + e.LastName}</td>
                                    <td class="ranklist-points">{e.TestName}</td>
                                    <td class="ranklist-up-down">{e.MarksScored}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const Profile = () => {
    return (
        <div className='main-container'>
            <div className='container3'>
                <Profile_Block />
                <Line_Graph />
                <RankList />
            </div>
        </div>
    );
};
export default Profile;
