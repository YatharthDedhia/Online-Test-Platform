import React from "react";
import { useState, useEffect } from "react";
import './css/institute.css';
// import './css/navbar.css';
import './css/ranklist.css';
import axios from "axios";
import logo from '../../Images/logo-no-background.png'
import { DatePickerProps } from "antd";
import { Oval } from "react-loader-spinner";
import { DatePicker, TimePicker } from "antd";
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
// import { ClockPicker } from "@mui/x-date-pickers";
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import dayjs, { Dayjs } from 'dayjs';

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
  const [courseName1, setCourseName1] = useState("");
  const [courseCode, setCourseCode] = useState(0);
  const [courseCode1, setCourseCode1] = useState(0);
  const [date, setDate] = useState(null);
  // const [clock, setClock] = React.useState < Dayjs | null > (dayjs('2022-04-07T10:15'));
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState("");
  const [duration, setDuration] = useState(0);
  const [link, setLink] = useState("");
  const [link1, setLink1] = useState("a");
  const [image, setImage] = useState("a");
  const [syllabus, setSyllabus] = useState("a");
  const [label, setlabel] = useState(3);
  const [loading, setLoading] = useState(false);

  const Header_Menu = () => {
    // let porfile_pic_img = localStorage.getItem('login')
    let profile_pic = "https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg";
    if (localStorage.getItem('login')) {
      profile_pic = (JSON.parse(localStorage.getItem('login')).user.Photo).toString();
    }
    return (
      <header class="block-institute">
        <ul class="header-menu horizontal-list">
          <li>
            <button className="header-menu-tab" onClick={() => { setlabel(3) }} href="#2"><span className="icon fontawesome-trophy scnd-font-color"></span>Rank List</button>
          </li>
          <li>
            <button className="header-menu-tab" onClick={() => { setlabel(2) }}><span className="icon fontawesome-pencil scnd-font-color"></span>Assign Notes</button>
          </li>
          <li>
            <button className="header-menu-tab" onClick={() => setlabel(1)}><span className="icon fontawesome-calendar scnd-font-color"></span>Schedule Test</button>
          </li>
          <li>
            <button className="header-menu-tab" onClick={() => { setlabel(0) }}><span className="icon fontawesome-envelope scnd-font-color"></span>Make Question Bank</button>
          </li>
          <li>
            <button className="header-menu-tab" onClick={() => { setlabel(4) }}><span className="icon fontawesome-pencil scnd-font-color"></span>Make Paper</button>
          </li>
          <li className="logout-tab">
            <button className="header-menu-tab" onClick={() => {
              localStorage.removeItem("login");
              localStorage.removeItem("duration");
              localStorage.removeItem("papercode");
              localStorage.removeItem("bankcode");
              window.location.reload();

            }}><span className="fa-sharp fa-solid fa-right-to-bracket"></span>LogOut</button>
          </li>
        </ul>
        <div className="profile-menu">
          <button className="profile-button">
            <p>Me</p>
            <div className="profile-picture small-profile-picture">
              <img height="40px" width="40px" src={profile_pic} />
            </div>
          </button>
        </div>
      </header>
    );
  };

  const postData = (e) => {
    e.preventDefault();
    // if (password == confpassword) {
    // setConfirm(1);
    setLoading(true)
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

    // console.log(sendData);

    axios.post('https://lmsapiv01.azurewebsites.net/api/answers', sendData).then(result => {
      setLoading(false)
      // console.log(result.data)
    });
    // }
    // else {
    // setConfirm(1);
    // }
  };

  const postExam = (e) => {
    e.preventDefault();
    setLoading(true)
    let temp;
    temp = new Date(String(date) + "T" + startTime)
    console.log(temp);
    temp.setTime(temp.getTime() + duration * 60 * 60 * 1000)
    console.log(temp.toTimeString().slice(0, 8))
    setEndTime(String(temp.toTimeString().slice(0, 8)))
    
    const sendData1 = {
      "CourseId": parseInt(courseCode),
      "TeacherID": 7,
      "TestName": testName,
      "CourseName": courseName,
      "Date": date,
      "StartTime": startTime,
      "EndTime": endTime,
      "Link": link,
      "Duration": parseInt(duration),
    };

    console.log(sendData1);

    axios.post('https://lmsapiv01.azurewebsites.net/api/questionpaper', sendData1).then(result => {
      setLoading(false)
    });

  };

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

    // console.log(sendData1);

    axios.post('https://lmsapiv01.azurewebsites.net/api/altercourse', sendData1).then(result => {
      setLoading(false)
      // console.log(result.data)
    });

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

    const [obj, setObj] = useState([])
    let temparr = []
    // var userid_storage = (JSON.parse(localStorage.getItem('login'))["UserID"]).toString()
    // var userid_storage = "4"

    useEffect(async () => {
      setLoading(true)

      let userid = (JSON.parse(localStorage.getItem('login')).user.UserId).toString();
      // console.log(userid);

      axios.get("https://lmsapiv01.azurewebsites.net/api/teacher/courses/" + userid)
        .then((response) => {
          response.data[0].map((f) => {
            var num = f.CourseId
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
      setLoading(false)

    }, [])
    // console.log(obj)
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

  const SeeSchedule = () => {
    const [obj, setObj] = useState([
      {
        "PaperCode": 4,
        "TestName": "Angles Test 2"
      }
    ])
    const [schedule, setSchedule] = useState([])

    useEffect(async () => {
      setLoading(true)

      let userid = (JSON.parse(localStorage.getItem('login')).user.UserId).toString();

      axios.get("https://lmsapiv01.azurewebsites.net/api/teacher/courses/" + userid)
        .then((response) => {
          response.data[0].map((course) => {
            axios.get("https://lmsapiv01.azurewebsites.net/api/qplist/" + String(course.CourseId))
              .then((res) => {
                res.data[0].map((r) => {
                  setSchedule(current => [...current, r])
                  schedule.push(r)
                  // console.log(schedule)
                  setObj(schedule)
                })
              })
          })
            .catch((err) => {
              console.log(err);
            });
        })
      setLoading(false)

    }, [])

    // console.log(obj)
    return (
      <div class="ranklist-container-institute">
        <header>
          <br />
          <h1>Schedule</h1>
          <br />
        </header>
        <div class="ranklist-wrapper-institute">
          <table>
            <thead>
              <tr>
                <th>PaperCode</th>
                <th>Test Name</th>
                <th>Date</th>
                <th>StartTime</th>
                <th>Select Paper to set</th>
              </tr>
            </thead>
            {obj.map((e) => {
              return (
                <tbody>
                  {/* <button className="select-question"> */}


                  <tr>
                    <td class="ranklist-rank">{e.PaperCode}</td>
                    <td class="ranklist-points">{e.TestName}</td>
                    <td class="ranklist-team">{String(e.Date).slice(0, 10)}</td>
                    <td class="ranklist-up-down">{e.StartTime}</td>
                    <td class="ranklist-up-down">
                      <button className='linkselect'
                        onClick={() => {
                          setlabel(5);
                          localStorage.setItem("bankcode", e.CourseID);
                          localStorage.setItem("Qcode", e.PaperCode);
                        }}
                      >{e.Link}</button>
                    </td>
                  </tr>
                  {/* </button> */}
                </tbody>
              )
              // }

            })}
          </table>
        </div>
      </div>
    )
  }

  const SelectQuestions = () => {
    const test = [
      {
        questionText: 'Dummy Question',
        Difficulty: 0,
        Marks: 0,
        QuestNo: 0,
        answerOptions: [
          { answerText: 'Option 1', isCorrect: false },
          { answerText: 'Option 2', isCorrect: false },
          { answerText: 'Option 3', isCorrect: true },
          { answerText: 'Option 4', isCorrect: false },
        ],
      }
    ];
    const [paper, setPaper] = useState(test)
    const [temp, setTemp] = useState(0)

    useEffect(async () => {
      setLoading(true)

      const getPaper = async () => {
        // setPaper(test)
        let papercode = localStorage.getItem('bankcode').toString();
        const url2 = "https://lmsapiv01.azurewebsites.net/api/qbaf/" + papercode;
        await axios
          .get(url2)
          .then((response) => {

            for (let i = 0; i < response.data[0].length; i += 4) {
              let tempobj1 = {}

              let tempobj21 = {}
              let tempobj22 = {}
              let tempobj23 = {}
              let tempobj24 = {}

              let temparr = []

              tempobj1["CourseId"] = response.data[0][i].CourseId;
              tempobj1["QuestNo"] = response.data[0][i].QuestNo;
              tempobj1["Marks"] = response.data[0][i].Marks;
              tempobj1["Difficulty"] = response.data[0][i].Difficulty;
              tempobj1["AnswerId"] = response.data[0][i].AnswerId;
              tempobj1["Weightage"] = response.data[0][i].Weightage;
              tempobj1["questionText"] = response.data[0][i].Question;

              tempobj21["answerText"] = response.data[0][i].Answer;
              tempobj22["answerText"] = response.data[0][i + 1].Answer;
              tempobj23["answerText"] = response.data[0][i + 2].Answer;
              tempobj24["answerText"] = response.data[0][i + 3].Answer;

              tempobj21["isCorrect"] = response.data[0][i].isCorrect;
              tempobj22["isCorrect"] = response.data[0][i + 1].isCorrect;
              tempobj23["isCorrect"] = response.data[0][i + 2].isCorrect;
              tempobj24["isCorrect"] = response.data[0][i + 3].isCorrect;

              tempobj21["selected"] = false
              tempobj22["selected"] = false
              tempobj23["selected"] = false
              tempobj24["selected"] = false

              temparr.push(tempobj21)
              temparr.push(tempobj22)
              temparr.push(tempobj23)
              temparr.push(tempobj24);

              tempobj1["answerOptions"] = temparr;
              paper.push(tempobj1);
            }

          })
          .catch((err) => {
            console.log(err);
          });
      }
      await getPaper();
      setTemp(1)
      setLoading(false)

    }, [])

    // console.log(paper)
    return (
      <div class="ranklist-container-institute">
        <header>
          <br />
          <h1>Question Bank</h1>
          <br />
        </header>
        <div class="ranklist-wrapper-institute">
          <table>
            <thead>
              <tr>
                <th>Question No</th>
                <th>Question Text</th>
                <th>Marks</th>
                <th>Option1</th>
                <th>Option2</th>
                <th>Option3</th>
                <th>Option4</th>
                <th>Add to Paper</th>
              </tr>
            </thead>
            {paper.map((e) => {
              return (
                <tbody>
                  {e.QuestNo != 0 ? (
                    <tr>
                      <td class="ranklist-rank">{e.QuestNo}</td>
                      <td class="ranklist-rank">{e.questionText}</td>
                      <td class="ranklist-team">{e.Difficulty}</td>
                      {e.answerOptions.map((opt) => {
                        return (
                          <td class="ranklist-team">{opt.answerText}</td>
                        )
                      })}
                      <td class="ranklist-up-down">
                        <button className='linkselect' onClick={() => {
                          // console.log(e.StudentId);
                          setLoading(true)

                          let papercode = localStorage.getItem("Qcode")
                          axios.post("https://lmsapiv01.azurewebsites.net/api/questionpaper/question", { PaperCode: papercode, QuestNo: e.QuestNo }).then(result => {
                            setLoading(false)
                            // console.log(result.data)
                          })
                        }}>Add</button>
                      </td>

                    </tr>
                  ) : null}
                </tbody>
              )
            })}
          </table>
        </div>
      </div>

    )
  }

  const changedate: DatePickerProps['onChange'] = (date, dateString) => {
    // console.log(date, dateString);
    setDate(String(dateString));
  };

  // console.log(date);
  return (
    <div>
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

      {label === 0 ? (
        <div>
          <form onSubmit={postData} className="container8">
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

            <div className="opt1">
              <label>
                Option 1 is:
                <br />
                <div class="container6">
                  <div class="radio_container">
                    <input className="correct1" type="radio" name="radio1" id="true" value="true" onClick={e => setisCorrect1(true)} checked required />
                    <label className="label1" for="true">True</label>
                    <input className="correct1" type="radio" name="radio1" id="false" value="false" onClick={e => setisCorrect1(false)} required />
                    <label className="label1" for="false">False</label>

                  </div>
                </div>
              </label>
            </div>

            <br />

            <div className="opt2">
              <label>
                Option 2 is:
                <br />
                <div class="container6">
                  <div class="radio_container">
                    <input className="correct2" type="radio" name="radio2" id="true1" value="true" onClick={e => setisCorrect2(true)} checked required />
                    <label className="label2" for="true1">True</label>
                    <input className="correct2" type="radio" name="radio2" id="false1" value="false" onClick={e => setisCorrect2(false)} required />
                    <label className="label2" for="false1">False</label>

                  </div>
                </div>
              </label>
            </div>

            <br />

            <div className="opt3">
              <label>
                Option 3 is:
                <br />
                <div class="container6">
                  <div class="radio_container">
                    <input className="correct3" type="radio" name="radio3" id="true2" value="true" onClick={e => setisCorrect3(true)} checked required />
                    <label className="label3" for="true2">True</label>
                    <input className="correct3" type="radio" name="radio3" id="false2" value="false" onClick={e => setisCorrect3(false)} required />
                    <label className="label3" for="false2">False</label>

                  </div>
                </div>
              </label>
            </div>

            <br />

            <div className="opt4">
              <label>
                Option 4 is:
                <br />
                <div class="container6">
                  <div class="radio_container">
                    <input className="correct4" type="radio" name="radio4" id="true3" value="true" onClick={e => setisCorrect4(true)} checked required />
                    <label className="label4" for="true3">True</label>
                    <input className="correct4" type="radio" name="radio4" id="false3" value="false" onClick={e => setisCorrect4(false)} required />
                    <label className="label4" for="false3">False</label>

                  </div>
                </div>
              </label>
            </div>

            <br />

            <button className='bubbly-button3' type="submit">Submit</button>
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
                autoComplete="off"
                onChange={e => setTestName(e.target.value)}
                 />
            </label>
            <label>
              Course Name:
              <input
                className="Course_Name"
                name="course_name"
                type="text"
                autoComplete="off"
                onChange={e => setCourseName(e.target.value)}
                required />
            </label>
            <label>
              Course Code:
              <input
                className="Course_Code"
                name="course_code"
                type="text"
                autoComplete="off"
                onChange={e => setCourseCode(e.target.value)}
                required />
            </label>
            <label>
              Date:
              <br />
              <div className="date-picker-institute">
                <DatePicker onChange={changedate} required />
              </div>
            </label>
            <br />
            <label>
              Start Time:
              <br />
              <TimePicker onChange={(time: Dayjs, timeString: string) => {
                setStartTime(String(timeString));
                // console.log(startTime);
              }} defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} />
              <br />
            </label>
            {/* <label>
              End Time:
              <br />
              <TimePicker onChange={(time: Dayjs, timeString: string) => {
                setEndTime(String(timeString));
                // console.log(startTime);
              }} defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} />
              <br />
            </label> */}
            <label>
              Duration in Hours:
              <input
                className="TestName"
                name="tname"
                type="text"
                autoComplete="off"
                onChange={e => setDuration(e.target.value)}
                required />
            </label>
            <label>
              Link:
              <input
                className="Link"
                name="link"
                type="text"
                autoComplete="off"
                onChange={e => setLink(e.target.value)}
                required />
            </label>
            <button className='bubbly-button5' type="submit">Submit</button>
          </form>
        </div>
      ) : null}
      {label === 3 ? (
        <RankList />
      ) : null}
      {label === 2 ? (
        <div className="container7">
          <form onSubmit={postCourse1} className="container5">
            <label>
              Course Name 1:
              <input
                className="Course_Name"
                name="course_name"
                type="text"
                autoComplete="off"
                onChange={e => setCourseName1(e.target.value)}
                 />
            </label>
            <label>
              Course Code 1:
              <input
                className="Course_Code"
                name="course_code"
                type="number"
                autoComplete="off"
                onChange={e => setCourseCode1(e.target.value)}
                 />
            </label>

            <label>
              Link 1:
              <input
                className="Link1"
                name="link1"
                type="text"
                autoComplete="off"
                onChange={e => setLink1(e.target.value)}
                 />
            </label>
            <label>
              Image Link:
              <input
                className="Link1"
                name="link1"
                type="text"
                autoComplete="off"
                onChange={e => setImage(e.target.value)}
                 />
            </label>
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
            <button className='bubbly-button2' type="submit">Submit</button>
          </form>

        </div>
      ) : null}
      {label === 4 ? (<SeeSchedule />) : null}
      {label === 5 ? (<SelectQuestions />) : null}
    </div>
  )
}
export default Institute;