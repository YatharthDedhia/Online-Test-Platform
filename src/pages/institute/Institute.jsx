import React from "react";
import { useState, useEffect } from "react";
import './css/institute.css';
import './css/ranklist.css';
import './css/navbar.css';
import axios from "axios";
import logo from '../../Images/logo-no-background.png'

const Institute = () => {
  const [Question, setQuestion] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');
  const [option4, setOption4] = useState('');
  const [isCorrect1, setisCorrect1] = useState(false);
  const [isCorrect2, setisCorrect2] = useState(false);
  const [isCorrect3, setisCorrect3] = useState(false);
  const [isCorrect4, setisCorrect4] = useState(false);
  const [weightage1, setWeightage1] = useState(0);
  const [weightage2, setWeightage2] = useState(0);
  const [weightage3, setWeightage3] = useState(0);
  const [weightage4, setWeightage4] = useState(0);
  const [totalMarks, setTotalMarks] = useState(0);
  const [testName, setTestName] = useState('');
  const [courseName, setCourseName] = useState('');
  const [courseCode, setCourseCode] = useState(0);
  const [date, setDate] = useState(null);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [duration, setDuration] = useState(0);
  const [link, setLink] = useState("");
  const [label, setlabel] = useState(3)

  const Header_Menu = () => {
    return (
      <header class="block-institute">
        <ul class="header-menu horizontal-list">
          <li>
            <button className="header-menu-tab" onClick={() => setlabel(1)}><span className="icon fontawesome-calendar scnd-font-color"></span>Schedule Test</button>
          </li>
          <li>
            <button className="header-menu-tab" onClick={() => { setlabel(3) }} href="#2"><span className="icon fontawesome-trophy scnd-font-color"></span>Rank List</button>
          </li>
          <li>
            <button className="header-menu-tab" onClick={() => { setlabel(0) }}><span className="icon fontawesome-envelope scnd-font-color"></span>Make Question Paper</button>
          </li>
          <li>
            <button className="header-menu-tab" onClick={() => { setlabel(2) }}><span className="icon fontawesome-text scnd-font-color"></span>Assign Notes</button>
          </li>
        </ul>
        <div className="profile-menu">
          <p>Me <a href="#26"><span className="entypo-down-open scnd-font-color"></span></a></p>
          <div className="profile-picture small-profile-picture">
            <img width="40px" src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg" />
          </div>
        </div>
      </header>
    );
  };

  const NavLinks = () => (
    <React.Fragment>
      <p>
        <a >
          <button className="institute-navbar-button" onClick={() => setlabel(1)}><span></span>Schedule Test</button>
        </a>
      </p>

      <p>
        <a>
          <button className="institute-navbar-button" onClick={() => { setlabel(3) }} href="#2"><span></span>Rank List</button>
        </a>
      </p>

      <p>
        <a>
          <button className="institute-navbar-button" onClick={() => { setlabel(0) }}><span></span>Make Paper</button>
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

  const postData = (e) => {
    e.preventDefault();
    // if (password == confpassword) {
    // setConfirm(1);

    const sendData = {
      "Question": Question,
      "Marks": totalMarks,
      "Difficulty": 1,
      "CourseId": courseCode,
      // "QuestNo": Questionnumber,
      "Answer": option1,
      "isCorrect": isCorrect1,
      "Weightage": weightage1,
      "Answer2": option2,
      "isCorrect2": isCorrect2,
      "Weightage2": weightage2,
      "Answer3": option3,
      "isCorrect3": isCorrect3,
      "Weightage3": weightage3,
      "Answer4": option4,
      "isCorrect4": isCorrect4,
      "Weightage4": weightage4,
    };

    console.log(sendData);

    axios.post('https://lmsapiv01.azurewebsites.net/api/answers', sendData).then(result => { console.log(result.data) });
    // }
    // else {
    // setConfirm(1);
    // }
  };

  const postExam = (e) => {
    e.preventDefault();
    // if (password == confpassword) {
    // setConfirm(1);

    const sendData1 = {
      "CourseId": 2,
      "TeacherID": 1,
      "TestName": "trialtestname1",
      "CourseName": "courseName",
      "Date": "2023-10-14T00:00:00.000Z",
      "StartTime": "1970-01-01T08:00:00.000Z",
      "EndTime": "1970-01-01T11:00:00.000Z",
      "Link": "jshDJVHD",
      "Duration": 3,
    };

    console.log(sendData1);

    axios.post('https://lmsapiv01.azurewebsites.net/api/questionpaper', sendData1).then(result => { console.log(result.data) });
    // }
    // else {
    // setConfirm(1);
    // }
  };

  const ScheduleExam = (e) => {
    return (
      <form onSubmit={postExam} className="container4">
        <label>
          Test Name:
          <input
            className="TestName"
            name="tname"
            type="text"
            //   value={this.state.numberOfGuests}
            onChange={e => setTestName(e.target.value)}
            required />
        </label>
        <label>
          Course Name:
          <input
            className="Course_Name"
            name="course_name"
            type="text"
            //   value={this.state.numberOfGuests}
            onChange={e => setCourseName(e.target.value)}
            required />
        </label>
        <label>
          Course Code:
          <input
            className="Course_Code"
            name="course_code"
            type="text"
            //   value={this.state.numberOfGuests}
            onChange={e => setCourseCode(e.target.value)}
            required />
        </label>
        <label>
          Date:
          <input
            className="Date"
            name="date"
            type="text"
            //   value={this.state.numberOfGuests}
            onChange={e => setDate(e.target.value)}
            required />
        </label>
        <label>
          Start Time:
          <input
            className="Start"
            name="start"
            type="text"
            //   value={this.state.numberOfGuests}
            onChange={e => setStartTime(e.target.value)}
            required />
        </label>
        <label>
          End Time:
          <input
            className="End"
            name="end"
            type="text"
            //   value={this.state.numberOfGuests}
            onChange={e => setEndTime(e.target.value)}
            required />
        </label>
        <label>
          Duration in Hourss:
          <input
            className="TestName"
            name="tname"
            type="text"
            //   value={this.state.numberOfGuests}
            onChange={e => setDuration(e.target.value)}
            required />
        </label>
        <label>
          Link:
          <input
            className="Link"
            name="link"
            type="text"
            //   value={this.state.numberOfGuests}
            onChange={e => setLink(e.target.value)}
            required />
        </label>
        <button className='bubbly-button2' type="submit">Submit</button>
      </form>
    );
  };

  // const MakeExam = (e) => {
  //   return (
  //     <form onSubmit={postData} className="container4">
  //       <label>
  //         Course ID:
  //         <input
  //           className="Course_Code"
  //           name="course_code"
  //           // type="number"
  //           onChange={e => setCourseCode(e.target.value)}
  //           required />
  //       </label>
  //       <label>
  //         Question
  //         <input
  //           className="Question"
  //           name="question"
  //           // type="text"
  //           onChange={e => setQuestion(e.target.value)}
  //           required />
  //       </label>
  //       <label>
  //         Total Marks for this Question:
  //         <input
  //           className="tmarks"
  //           name="Tm"
  //           type="number"
  //           onChange={e => setTotalMarks(e.target.value)}
  //           required />
  //       </label>
  //       <label>
  //         Option 1:
  //         <input
  //           className="opt"
  //           name="opt1"
  //           type="text"
  //           onChange={e => setOption1(e.target.value)}
  //           required />
  //       </label>
  //       <label>
  //         Option 2:
  //         <input
  //           className="opt"
  //           name="opt2"
  //           type="text"
  //           onChange={e => setOption2(e.target.value)}
  //           required />
  //       </label>
  //       <label>
  //         Option 3:
  //         <input
  //           className="opt"
  //           name="opt3"
  //           type="text"
  //           onChange={e => setOption3(e.target.value)}
  //           required />
  //       </label>
  //       <label>
  //         Option 4:
  //         <input
  //           className="opt"
  //           name="opt4"
  //           type="text"
  //           onChange={e => setOption4(e.target.value)}
  //           required />
  //       </label>
  //       <label>
  //         Weightage 1:
  //         <input
  //           className="weightage"
  //           name="weightage1"
  //           type="number"

  //           onChange={e => setWeightage1(e.target.value)}
  //           required />
  //       </label>
  //       <label>
  //         Weightage 2:
  //         <input
  //           className="weightage"
  //           name="weightage2"
  //           type="number"
  //           onChange={e => setWeightage2(e.target.value)}
  //           required />
  //       </label>
  //       <label>
  //         Weightage 3:
  //         <input
  //           className="weightage"
  //           name="weightage3"
  //           type="number"
  //           onChange={e => setWeightage3(e.target.value)}
  //           required />
  //       </label>
  //       <label>
  //         Weightage 4:
  //         <input
  //           className="weightage"
  //           name="weightage4"
  //           type="number"
  //           onChange={e => setWeightage4(e.target.value)}
  //           required />
  //       </label>
  //       <label>
  //         Option 1 is:
  //         <div class="container6">
  //           <div class="radio_container">
  //             <input className="correct1" type="radio" name="radio1" id="true" value="true" onClick={e => setisCorrect1(true)} checked required />
  //             <label className="label1" for="true">True</label>
  //             <input className="correct1" type="radio" name="radio1" id="false" value="false" onClick={e => setisCorrect1(false)} required />
  //             <label className="label1" for="false">False</label>

  //           </div>
  //         </div>
  //       </label>
  //       <br />
  //       <label>
  //         Option 2 is:
  //         <div class="container6">
  //           <div class="radio_container">
  //             <input className="correct2" type="radio" name="radio2" id="true1" value="true" onClick={e => setisCorrect2(true)} checked required />
  //             <label className="label2" for="true1">True</label>
  //             <input className="correct2" type="radio" name="radio2" id="false1" value="false" onClick={e => setisCorrect2(false)} required />
  //             <label className="label2" for="false1">False</label>

  //           </div>
  //         </div>
  //       </label>
  //       <br />
  //       <label>
  //         Option 3 is:
  //         <div class="container6">
  //           <div class="radio_container">
  //             <input className="correct3" type="radio" name="radio3" id="true2" value="true" onClick={e => setisCorrect3(true)} checked required />
  //             <label className="label3" for="true2">True</label>
  //             <input className="correct3" type="radio" name="radio3" id="false2" value="false" onClick={e => setisCorrect3(false)} required />
  //             <label className="label3" for="false2">False</label>

  //           </div>
  //         </div>
  //       </label>
  //       <br />
  //       <label>
  //         Option 4 is:
  //         <div class="container6">
  //           <div class="radio_container">
  //             <input className="correct4" type="radio" name="radio4" id="true3" value="true" onClick={e => setisCorrect4(true)} checked required />
  //             <label className="label4" for="true3">True</label>
  //             <input className="correct4" type="radio" name="radio4" id="false3" value="false" onClick={e => setisCorrect4(false)} required />
  //             <label className="label4" for="false3">False</label>

  //           </div>
  //         </div>
  //       </label>
  //       <br />

  //       <button className='bubbly-button2' type="submit">Submit</button>
  //     </form>
  //   )
  // };

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
    let temparr = []
    // var userid_storage = (JSON.parse(localStorage.getItem('login'))["UserID"]).toString()
    var userid_storage = "4"

    useEffect(async () => {
      axios.get("https://lmsapiv01.azurewebsites.net/api/attemptedlist/4")
        .then((response) => {

          response.data[0].map((f) => {
            var num = f.PaperCode
            var str = num.toString()

            axios
              .get("https://lmsapiv01.azurewebsites.net/api/totalmarksallstuds/" + str)
              .then((response2) => {
                response2.data[0].map((res) => {
                  setObj(current => [...current, res])
                })
              })
              .catch((err) => {
                console.log(err);
              });
          })
        })
    }, [])

    return (
      <div class="ranklist-container-institute">
        <header>
          <br />
          <h1>Rankings</h1>
          <br />
        </header>
        <div class="ranklist-wrapper-institute">
          <table>
            <thead>
              <tr>
                <th>UserID</th>
                <th>Name</th>
                <th>Test</th>
                <th>Marks</th>
              </tr>
            </thead>
            {/* <tbody> */}
            {/* {console.log(obj)} */}
            {obj.map((e) => {
              // { console.log(e) }
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

  // return (
  //   <div>
  //     <Header_Menu />
  //     <Navbar />
  //     {label === 0 && <MakeExam />}
  //     {label === 1 && <ScheduleExam />}
  //     {label === 3 && <RankList />}
  //   </div>
  // );
  return (
    <div>
      <Header_Menu />
      {label === 0 ? (
        <div>
          <form onSubmit={postData} className="container4">
            <label>
              Course ID:
              <input
                className="Course_Code"
                name="course_code"
                // type="number"
                onChange={e => setCourseCode(e.target.value)}
                required />
            </label>
            <label>
              Question
              <input
                className="Question"
                name="question"
                // type="text"
                onChange={e => setQuestion(e.target.value)}
                required />
            </label>
            <label>
              Total Marks for this Question:
              <input
                className="tmarks"
                name="Tm"
                type="number"
                onChange={e => setTotalMarks(e.target.value)}
                required />
            </label>
            <label>
              Option 1:
              <input
                className="opt"
                name="opt1"
                type="text"
                onChange={e => setOption1(e.target.value)}
                required />
            </label>
            <label>
              Option 2:
              <input
                className="opt"
                name="opt2"
                type="text"
                onChange={e => setOption2(e.target.value)}
                required />
            </label>
            <label>
              Option 3:
              <input
                className="opt"
                name="opt3"
                type="text"
                onChange={e => setOption3(e.target.value)}
                required />
            </label>
            <label>
              Option 4:
              <input
                className="opt"
                name="opt4"
                type="text"
                onChange={e => setOption4(e.target.value)}
                required />
            </label>
            <label>
              Weightage 1:
              <input
                className="weightage"
                name="weightage1"
                type="number"

                onChange={e => setWeightage1(e.target.value)}
                required />
            </label>
            <label>
              Weightage 2:
              <input
                className="weightage"
                name="weightage2"
                type="number"
                onChange={e => setWeightage2(e.target.value)}
                required />
            </label>
            <label>
              Weightage 3:
              <input
                className="weightage"
                name="weightage3"
                type="number"
                onChange={e => setWeightage3(e.target.value)}
                required />
            </label>
            <label>
              Weightage 4:
              <input
                className="weightage"
                name="weightage4"
                type="number"
                onChange={e => setWeightage4(e.target.value)}
                required />
            </label>
            <label>
              Option 1 is:
              <div class="container6">
                <div class="radio_container">
                  <input className="correct1" type="radio" name="radio1" id="true" value="true" onClick={e => setisCorrect1(true)} checked required />
                  <label className="label1" for="true">True</label>
                  <input className="correct1" type="radio" name="radio1" id="false" value="false" onClick={e => setisCorrect1(false)} required />
                  <label className="label1" for="false">False</label>

                </div>
              </div>
            </label>
            <br />
            <label>
              Option 2 is:
              <div class="container6">
                <div class="radio_container">
                  <input className="correct2" type="radio" name="radio2" id="true1" value="true" onClick={e => setisCorrect2(true)} checked required />
                  <label className="label2" for="true1">True</label>
                  <input className="correct2" type="radio" name="radio2" id="false1" value="false" onClick={e => setisCorrect2(false)} required />
                  <label className="label2" for="false1">False</label>

                </div>
              </div>
            </label>
            <br />
            <label>
              Option 3 is:
              <div class="container6">
                <div class="radio_container">
                  <input className="correct3" type="radio" name="radio3" id="true2" value="true" onClick={e => setisCorrect3(true)} checked required />
                  <label className="label3" for="true2">True</label>
                  <input className="correct3" type="radio" name="radio3" id="false2" value="false" onClick={e => setisCorrect3(false)} required />
                  <label className="label3" for="false2">False</label>

                </div>
              </div>
            </label>
            <br />
            <label>
              Option 4 is:
              <div class="container6">
                <div class="radio_container">
                  <input className="correct4" type="radio" name="radio4" id="true3" value="true" onClick={e => setisCorrect4(true)} checked required />
                  <label className="label4" for="true3">True</label>
                  <input className="correct4" type="radio" name="radio4" id="false3" value="false" onClick={e => setisCorrect4(false)} required />
                  <label className="label4" for="false3">False</label>

                </div>
              </div>
            </label>
            <br />

            <button className='bubbly-button2' type="submit">Submit</button>
          </form>
        </div>
      ) : null}

      {label === 1 ? (
        <div>
          <form onSubmit={postExam} className="container4">
            <label>
              Test Name:
              <input
                className="TestName"
                name="tname"
                type="text"
                //   value={this.state.numberOfGuests}
                onChange={e => setTestName(e.target.value)}
                required />
            </label>
            <label>
              Course Name:
              <input
                className="Course_Name"
                name="course_name"
                type="text"
                //   value={this.state.numberOfGuests}
                onChange={e => setCourseName(e.target.value)}
                required />
            </label>
            <label>
              Course Code:
              <input
                className="Course_Code"
                name="course_code"
                type="text"
                //   value={this.state.numberOfGuests}
                onChange={e => setCourseCode(e.target.value)}
                required />
            </label>
            <label>
              Date:
              <input
                className="Date"
                name="date"
                type="text"
                //   value={this.state.numberOfGuests}
                onChange={e => setDate(e.target.value)}
                required />
            </label>
            <label>
              Start Time:
              <input
                className="Start"
                name="start"
                type="text"
                //   value={this.state.numberOfGuests}
                onChange={e => setStartTime(e.target.value)}
                required />
            </label>
            <label>
              End Time:
              <input
                className="End"
                name="end"
                type="text"
                //   value={this.state.numberOfGuests}
                onChange={e => setEndTime(e.target.value)}
                required />
            </label>
            <label>
              Duration in Hourss:
              <input
                className="TestName"
                name="tname"
                type="text"
                //   value={this.state.numberOfGuests}
                onChange={e => setDuration(e.target.value)}
                required />
            </label>
            <label>
              Link:
              <input
                className="Link"
                name="link"
                type="text"
                //   value={this.state.numberOfGuests}
                onChange={e => setLink(e.target.value)}
                required />
            </label>
            <button className='bubbly-button2' type="submit">Submit</button>
          </form>
        </div>
      ) : null}
      {label === 3 ? (
        <RankList />
      ) : null}
    </div>
  )
}
export default Institute;