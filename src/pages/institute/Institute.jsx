import React from "react";
import { useState } from "react";
import './css/institute.css';
import axios from "axios";

// function handleChange(event) {
//   console.log(event.target.value);
// }
const check=(e)=>
{
  console.log("Hello");
}

    const Institute = () => {
    const [Questionnumber, setQuestionnumber] = useState(0);
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

const Header_Menu = () => {
  return (
      <header class="block">
          <ul class="header-menu horizontal-list">
              <li>
                  <a class="header-menu-tab"  onClick={scheduleExam}><span class="icon fontawesome-calendar scnd-font-color"></span>Schedule Test</a>
              </li>
              <li>
                  <a class="header-menu-tab" href="#2"><span class="icon fontawesome-trophy scnd-font-color"></span>Rank List</a>
              </li>
              <li>
                  <a class="header-menu-tab" onClick={makeExam}><span class="icon fontawesome-envelope scnd-font-color"></span>Make Question Paper</a>
                  <a class="header-menu-number" href="#4">5</a>
              </li>
              <li>
                  <a class="header-menu-tab" href="#5"><span class="icon fontawesome-check scnd-font-color"></span>Assignments Submitted</a>
              </li>
          </ul>
          <div class="profile-menu">
              <p>Me <a href="#26"><span class="entypo-down-open scnd-font-color"></span></a></p>
              <div class="profile-picture small-profile-picture">
                  <img width="40px" src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg" />
              </div>
          </div>
      </header>

  );
};


const postData = (e) => {
  e.preventDefault();
  // if (password == confpassword) {
    // setConfirm(1);

    const sendData = {
      "Question":Question,
      "Marks":totalMarks,
      "Difficulty":1,
      "CourseId":courseCode,
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
}
const postExam = (e) => {
  e.preventDefault();
  // if (password == confpassword) {
    // setConfirm(1);

    const sendData1 = {
      "CourseId": 2,
      "TeacherID":1,
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
}
const scheduleExam=(e)=>{
  return(
  <form onSubmit={postExam} className="container4">
        <label>
            Test Name:
            <input
            className="TestName"
              name="tname"
              type="text"
            //   value={this.state.numberOfGuests}
            onChange={e => setTestName(e.target.value)}
            required/>
          </label>
          <label>
            Course Name:
            <input
            className="Course_Name"
              name="course_name"
              type="text"
            //   value={this.state.numberOfGuests}
            onChange={e => setCourseName(e.target.value)}
            required/>
          </label>
          <label>
            Course Code:
            <input
            className="Course_Code"
              name="course_code"
              type="text"
            //   value={this.state.numberOfGuests}
            onChange={e => setCourseCode(e.target.value)}
            required/>
          </label>
          <label>
            Date:
            <input
            className="Date"
              name="date"
              type="text"
            //   value={this.state.numberOfGuests}
            onChange={e => setDate(e.target.value)}
            required/>
          </label>
          <label>
            Start Time:
            <input
            className="Start"
              name="start"
              type="text"
            //   value={this.state.numberOfGuests}
            onChange={e => setStartTime(e.target.value)}
            required/>
          </label>
          <label>
            End Time:
            <input
            className="End"
              name="end"
              type="text"
            //   value={this.state.numberOfGuests}
            onChange={e => setEndTime(e.target.value)}
            required/>
          </label>
          <label>
            Duration in Hourss:
            <input
            className="TestName"
              name="tname"
              type="text"
            //   value={this.state.numberOfGuests}
            onChange={e => setDuration(e.target.value)}
            required/>
          </label>
          <label>
            Link:
            <input
            className="Link"
              name="link"
              type="text"
            //   value={this.state.numberOfGuests}
            onChange={e => setLink(e.target.value)}
            required/>
          </label>
          <button className='bubbly-button2' type="submit">Submit</button>
        </form>
  );
};
const makeExam=(e)=>{
  return(
  <form onSubmit={postData} className="container4">
        <label>
            Course ID:
            <input
            className="Course_Code"
              name="course_code"
              type="text"
            //   value={this.state.numberOfGuests}
            onChange={e => setCourseCode(e.target.value)}
            required/>
          </label>
          <label>
            Question
            <input
            className="Question"
              name="question"
              type="text"
            //   value={this.state.numberOfGuests}
            onChange={e => setQuestion(e.target.value)}
            required/>
          </label>
          <label>
            Total Marks for this Question:
            <input
            className="tmarks"
              name="Tm"
              type="text"
            //   value={this.state.numberOfGuests}
            onChange={e => setTotalMarks(e.target.value)}
            required/>
          </label>
          <label>
            Option 1:
            <input
            className="opt1"
              name="opt1"
              type="text"
            //   value={this.state.numberOfGuests}
            onChange={e => setOption1(e.target.value)}
            required/>
          </label>
          <label>
            Option 2:
            <input
            className="opt2"
              name="opt2"
              type="text"
            //   value={this.state.numberOfGuests}
            onChange={e => setOption2(e.target.value)}
            required/>
          </label>
          <label>
            Option 3:
            <input
            className="opt3"
              name="opt3"
              type="text"
            //   value={this.state.numberOfGuests}
            onChange={e => setOption3(e.target.value)}
            required/>
          </label>
          <label>
            Option 4:
            <input
            className="opt4"
              name="opt4"
              type="text"
            //   value={this.state.numberOfGuests}
            onChange={e => setOption4(e.target.value)}
            required/>
          </label>
          <label>
            Weightage 1:
            <input
            className="weightage1"
              name="weightage1"
              type="number"
            //   value={this.state.numberOfGuests}
            onChange={e => setWeightage1(e.target.value)}
            required/>
          </label>
          <label>
            Weightage 2:
            <input
            className="weightage2"
              name="weightage2"
              type="number"
            //   value={this.state.numberOfGuests}
            onChange={e => setWeightage2(e.target.value)}
            required/>
          </label>
          <label>
            Weightage 3:
            <input
            className="weightage3"
              name="weightage3"
              type="number"
            //   value={this.state.numberOfGuests}
            onChange={e => setWeightage3(e.target.value)}
            required/>
          </label>
          <label>
            Weightage 4:
            <input
            className="weightage4"
              name="weightage4"
              type="number"
            //   value={this.state.numberOfGuests}
            onChange={e => setWeightage4(e.target.value)}
            required/>
          </label>
          {/* { <label>
            Option 1 is:
            <input
            className="correct1"
              name="iscorrect1"
              type="radio"
              value= "true" 
            //   value={this.state.numberOfGuests}
            onClick={e => setisCorrect1(true)}
            required/>True
            <input
            className="correct1"
              name="iscorrect1"
              type="radio"
              value="false"
            //   value={this.state.numberOfGuests}
            onClick={e => setisCorrect1(false)}
            required/>False
          </label> } */}
          <label>
            Option 1 is:
          <div class="container6">
    <div class="radio_container">
        <input className="correct1" type="radio" name="radio1"  id="true" value="true"  onClick={e => setisCorrect1(true)} checked required/>
        <label className="label1" for="true">True</label>
        <input className="correct1" type="radio" name="radio1"  id="false" value="false"  onClick={e => setisCorrect1(false)} required/>
        <label className="label1" for="false">False</label>
        
    </div>
</div>
</label>
          <br/>
          <label>
            Option 2 is:
          <div class="container6">
    <div class="radio_container">
        <input className="correct2" type="radio" name="radio2" id="true1" value="true"  onClick={e => setisCorrect2(true)} checked required/>
        <label className="label2" for="true1">True</label>
        <input className="correct2" type="radio" name="radio2" id="false1" value="false"  onClick={e => setisCorrect2(false)} required/>
        <label className="label2" for="false1">False</label>
        
    </div>
</div>
</label>
          <br/>
          <label>
            Option 3 is:
          <div class="container6">
    <div class="radio_container">
        <input className="correct3" type="radio" name="radio3" id="true2" value="true"  onClick={e => setisCorrect3(true)} checked required/>
        <label className="label3" for="true2">True</label>
        <input className="correct3" type="radio" name="radio3" id="false2" value="false"  onClick={e => setisCorrect3(false)} required/>
        <label className="label3" for="false2">False</label>
        
    </div>
</div>
</label>
          <br/>
          <label>
            Option 4 is:
          <div class="container6">
    <div class="radio_container">
        <input className="correct4" type="radio" name="radio4" id="true3" value="true"  onClick={e => setisCorrect4(true)} checked required/>
        <label className="label4" for="true3">True</label>
        <input className="correct4" type="radio" name="radio4" id="false3" value="false"  onClick={e => setisCorrect4(false)} required/>
        <label className="label4" for="false3">False</label>
        
    </div>
</div>
</label>
          <br/>
          
          <button className='bubbly-button2' type="submit">Submit</button>
        </form>
  )
}
      return (
        <div>
          <Header_Menu/>
        {/* <form onSubmit={postData} className="container4">
        <label>
            Course ID:
            <input
            className="Course_Code"
              name="course_code"
              type="text"
            onChange={e => setCourseCode(e.target.value)}
            required/>
          </label>
          <label>
            Question
            <input
            className="Question"
              name="question"
              type="text"
            onChange={e => setQuestion(e.target.value)}
            required/>
          </label>
          <label>
            Total Marks for this Question:
            <input
            className="tmarks"
              name="Tm"
              type="text"
            onChange={e => setTotalMarks(e.target.value)}
            required/>
          </label>
          <label>
            Option 1:
            <input
            className="opt1"
              name="opt1"
              type="text"
            onChange={e => setOption1(e.target.value)}
            required/>
          </label>
          <label>
            Option 2:
            <input
            className="opt2"
              name="opt2"
              type="text"
            onChange={e => setOption2(e.target.value)}
            required/>
          </label>
          <label>
            Option 3:
            <input
            className="opt3"
              name="opt3"
              type="text"
            onChange={e => setOption3(e.target.value)}
            required/>
          </label>
          <label>
            Option 4:
            <input
            className="opt4"
              name="opt4"
              type="text"
            onChange={e => setOption4(e.target.value)}
            required/>
          </label>
          <label>
            Weightage 1:
            <input
            className="weightage1"
              name="weightage1"
              type="number"
            onChange={e => setWeightage1(e.target.value)}
            required/>
          </label>
          <label>
            Weightage 2:
            <input
            className="weightage2"
              name="weightage2"
              type="number"
            onChange={e => setWeightage2(e.target.value)}
            required/>
          </label>
          <label>
            Weightage 3:
            <input
            className="weightage3"
              name="weightage3"
              type="number"
            onChange={e => setWeightage3(e.target.value)}
            required/>
          </label>
          <label>
            Weightage 4:
            <input
            className="weightage4"
              name="weightage4"
              type="number"
            onChange={e => setWeightage4(e.target.value)}
            required/>
          </label>
          <label>
            Option 1 is:
          <div class="container6">
    <div class="radio_container">
        <input className="correct1" type="radio" name="radio1"  id="true" value="true"  onClick={e => setisCorrect1(true)} checked required/>
        <label className="label1" for="true">True</label>
        <input className="correct1" type="radio" name="radio1"  id="false" value="false"  onClick={e => setisCorrect1(false)} required/>
        <label className="label1" for="false">False</label>
        
    </div>
</div>
</label>
          <br/>
          <label>
            Option 2 is:
          <div class="container6">
    <div class="radio_container">
        <input className="correct2" type="radio" name="radio2" id="true1" value="true"  onClick={e => setisCorrect2(true)} checked required/>
        <label className="label2" for="true1">True</label>
        <input className="correct2" type="radio" name="radio2" id="false1" value="false"  onClick={e => setisCorrect2(false)} required/>
        <label className="label2" for="false1">False</label>
        
    </div>
</div>
</label>
          <br/>
          <label>
            Option 3 is:
          <div class="container6">
    <div class="radio_container">
        <input className="correct3" type="radio" name="radio3" id="true2" value="true"  onClick={e => setisCorrect3(true)} checked required/>
        <label className="label3" for="true2">True</label>
        <input className="correct3" type="radio" name="radio3" id="false2" value="false"  onClick={e => setisCorrect3(false)} required/>
        <label className="label3" for="false2">False</label>
        
    </div>
</div>
</label>
          <br/>
          <label>
            Option 4 is:
          <div class="container6">
    <div class="radio_container">
        <input className="correct4" type="radio" name="radio4" id="true3" value="true"  onClick={e => setisCorrect4(true)} checked required/>
        <label className="label4" for="true3">True</label>
        <input className="correct4" type="radio" name="radio4" id="false3" value="false"  onClick={e => setisCorrect4(false)} required/>
        <label className="label4" for="false3">False</label>
        
    </div>
</div>
</label>
          <br/>
          
          <button className='bubbly-button2' type="submit">Submit</button>
        </form> */}
        {/* <form onSubmit={postExam} className="container4">
        <label>
            Test Name:
            <input
            className="TestName"
              name="tname"
              type="text"
            onChange={e => setTestName(e.target.value)}
            required/>
          </label>
          <label>
            Course Name:
            <input
            className="Course_Name"
              name="course_name"
              type="text"
            onChange={e => setCourseName(e.target.value)}
            required/>
          </label>
          <label>
            Course Code:
            <input
            className="Course_Code"
              name="course_code"
              type="text"
            onChange={e => setCourseCode(e.target.value)}
            required/>
          </label>
          <label>
            Date:
            <input
            className="Date"
              name="date"
              type="text"
            onChange={e => setDate(e.target.value)}
            required/>
          </label>
          <label>
            Start Time:
            <input
            className="Start"
              name="start"
              type="text"
            onChange={e => setStartTime(e.target.value)}
            required/>
          </label>
          <label>
            End Time:
            <input
            className="End"
              name="end"
              type="text"
            onChange={e => setEndTime(e.target.value)}
            required/>
          </label>
          <label>
            Duration in Hourss:
            <input
            className="TestName"
              name="tname"
              type="text"
            onChange={e => setDuration(e.target.value)}
            required/>
          </label>
          <label>
            Link:
            <input
            className="Link"
              name="link"
              type="text"
            onChange={e => setLink(e.target.value)}
            required/>
          </label>
          <button className='bubbly-button2' type="submit">Submit</button>
        </form> */}
        </div>
      );
      }
      export default Institute;