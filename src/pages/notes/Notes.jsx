import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import logo from '../../Images/logo-no-background.png'
import { useNavigate } from "react-router-dom";
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
  const [obj, setObj] = useState(testObj);
  const [courseList, setCourselist] = useState([]);

  useEffect(async () => {

    axios.get("https://lmsapiv01.azurewebsites.net/api/course")
      .then((response) => {
        setObj(response.data[0])
      })

    // axios.get("https://lmsapiv01.azurewebsites.net/api/course")
    //   .then((response) => {
    //     setCourselist(response.data[0]);
    //   })

    axios.get("https://lmsapiv01.azurewebsites.net/api/student/courses/" + String(JSON.parse(localStorage.getItem('login')).user.UserId))
      .then((response) => {
        setCourselist(response.data[0]);
      })
  }, [])


  const Header_Menu = () => {
    const navigate = useNavigate();

    let profile_pic = "https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg";
    if (localStorage.getItem('login')) {
      profile_pic = (JSON.parse(localStorage.getItem('login')).user.Photo).toString();
    }
    return (
      <header className="block-institute">
        <ul className="header-menu horizontal-list">
          <li className='hamburger-dashboard'>
            {/* <Sidebar /> */}
          </li>
          <li>
            <button className="header-menu-tab-dashboard" onClick={() => navigate("/")}>
              <a href="/">
                <img src={logo} height="50px" width="100px"></img>
              </a>
            </button>
          </li>
          <li className='logout-tab-dashboard'>
            <button className="header-menu-tab" onClick={() => {
              localStorage.removeItem("login");
              localStorage.removeItem("duration");
              localStorage.removeItem("papercode");
              localStorage.removeItem("papercode");
              localStorage.removeItem("teacher_id");
              localStorage.removeItem("authenticated");
              window.location.reload();
            }}><span className="fa-sharp fa-solid fa-right-to-bracket"></span>LogOut</button>
          </li>
        </ul>
        <div className="profile-menu">
          <button className="profile-button" onClick={() => { navigate("/profile") }}>
            <p>Me <a href="#26"><span className="entypo-down-open scnd-font-color"></span></a></p>
            <div className="profile-picture small-profile-picture">
              <img height="40px" width="40px" src={profile_pic} />
            </div>
          </button >
        </div >
      </header >
    );
  };

  return (
    <div>
      <Header_Menu />
      <header>
        <br />
        <h1>Courses List</h1>
        <br />
      </header>
      <div className="flexboxcontainer">
        {obj.map((e) => {
          return (
            <div>
              {courseList.map((course) => {
                if (course.CourseId === e.CourseId) {
                  return (
                    <div className="container9">
                      <a className="subimg1" href={e.Syllabus}>
                        <img src={e.Image} />
                      </a>
                      <div className="buttonlink">
                        <a href={e.Notes} target="blank">
                          <button className="buttonedu">
                            {e.CourseName}
                          </button>
                        </a>
                      </div>
                    </div>
                  )
                }
                else {
                  return (null)
                }
              })}
            </div>
          )
        })}
      </div>
    </div>
  )

}
export default Notes;