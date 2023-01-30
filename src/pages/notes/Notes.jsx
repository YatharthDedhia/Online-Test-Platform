import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import logo from '../../Images/logo-no-background.png'

import './css/notes.css'
const Notes = () => {
    const [label, setlabel] = useState(3);
    const [link1,setLink1]=useState("");
    const [link2,setLink2]=useState("");
    const [link3,setLink3]=useState("");
    const [link4,setLink4]=useState("");
    const [courseName,setcourseName]=useState("");
    const [linkimage,setLinkImage]=useState("");
    const [syllabusimg,setSyllabusimg]=useState("");
    useEffect(async () => {
      let userid = (JSON.parse(localStorage.getItem('login')).user.UserId).toString();
      console.log(userid);
      // userid = "4";
      for (let i = 1; i <=4; i++){ 
      const url3 = "https://lmsapiv01.azurewebsites.net/api/course/" + i;
      axios
          .get(url3)
          .then((response) => {
              console.log(url3)

              setLink1(response.data[0][0].Notes);
              setLink2(response.data[0][0].Notes);
              setLink3(response.data[0][0].Notes);
              setLink4(response.data[0][0].Notes);
              setLinkImage(response.data[0][0].Image);
              setSyllabusimg(response.data[0][0].Syllabus);
              setcourseName(response.data[0][0].CourseName);

          })
          .catch((err) => {
              console.log(err);
          });
        }
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
  return(
    <div>
        <Header_Menu/>
        <a href={syllabusimg}>
        <img className="subimg" src="https://cache.careers360.mobi/media/article_images/2022/1/14/_NCERT-Book-for-Class-12-Maths.jpg" />
        </a>
        <a href={link1}>
        <button className="buttonedu"><span className="icon fontawesome-calendar scnd-font-color"></span><h1>{courseName}</h1></button>
      </a>
      <img className="subimg" src="https://cache.careers360.mobi/media/article_images/2022/1/14/_NCERT-Book-for-Class-12-Maths.jpg"/>
      <a href={link2}>
        <button className="buttonedu"><span className="icon fontawesome-calendar scnd-font-color"></span><h1>Physics</h1></button>
      </a>
      <img className="subimg" src="https://cache.careers360.mobi/media/article_images/2022/1/14/_NCERT-Book-for-Class-12-Maths.jpg"/>
      <a href={link3}>
        <button className="buttonedu"><span className="icon fontawesome-calendar scnd-font-color"></span><h1>Chemistry</h1></button>
      </a>
      <img className="subimg" src={linkimage}/>
      <a href={link4}>
        <button className="buttonedu"><span className="icon fontawesome-calendar scnd-font-color"></span><h1>Geography</h1></button>
      </a>
    </div>
  )

}
export default Notes;