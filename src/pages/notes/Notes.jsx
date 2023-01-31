import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import logo from '../../Images/logo-no-background.png'

import './css/notes.css'
const testObj = [
  {
"CourseId": 2,
"CourseName": "Maths",
"CourseCode": 600,
"Notes": "www.drive2.com",
"Image": "https://cache.careers360.mobi/media/article_images/2022/1/14/_NCERT-Book-for-Class-12-Maths.jpg",
"Syllabus": "https://www.amazon.in/Advanced-Engineering-Mathematics-H-C-Taneja/dp/9389307325/ref=sr_1_2_sspa?crid=1T04C756ZZXZ0&keywords=Engineering+maths&qid=1675101764&sprefix=engineering+maths%2Caps%2C304&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1 "
  }];
const Notes = () => {
  const [label, setlabel] = useState(3);
  const [link1, setLink1] = useState("");
  const [link2, setLink2] = useState("");
  const [link3, setLink3] = useState("");
  const [link4, setLink4] = useState("");
  const [courseName, setcourseName] = useState("");
  const [linkimage, setLinkImage] = useState("");
  const [syllabusimg, setSyllabusimg] = useState("");
  const [obj, setObj] = useState(testObj);
  const [courseList, setCourselist] = useState([]);
  const [newType, setNewType] = useState(1)
  let temparr = []

  useEffect(async () => {

    axios.get("https://lmsapiv01.azurewebsites.net/api/course")
      .then((response) => {
        // console.log(response.data[0]);
        setObj(response.data[0])
      })

    axios.get("https://lmsapiv01.azurewebsites.net/api/course")
      .then((response) => {
        setCourselist(response.data[0]);
      })
  }, [])
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
            <button className="header-menu-tab" onClick={() => { setlabel(2) }}><span className="icon fontawesome-pencil scnd-font-color"></span>Assign Notes</button>
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
  return (
    <div>
      <Header_Menu/>
      <header>
        <br />
        <h1>Courses List</h1>
        <br />
      </header>
      <div className="flexboxcontainer">
          {obj.map((e) => {
              return (
                // <div className="container10">
                <div className="container9">
                  <a className="subimg1" href={e.Syllabus}>
                  <img src={e.Image}/>
                  </a>
                  <a src={e.Link}>
                  <div className="buttonlink"><button className="buttonedu"><span className="icon fontawesome-pencil scnd-font-color"></span>{e.CourseName}</button></div>
                  </a>
                  </div>
                // </div>
              )

          })}
      </div>
    </div>
  )

}
export default Notes;