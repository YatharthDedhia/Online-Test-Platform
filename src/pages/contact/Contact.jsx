import React from "react";
import { useState, useEffect } from "react";
import './css/contact.css'
import axios from "axios";
import logo from '../../Images/logo-no-background.png'
import { useNavigate } from "react-router-dom";

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

const Contact = () => {
    const [details, setDetails] = useState([]);
    useEffect(async () => {

        axios.get("https://lmsapiv01.azurewebsites.net/api/user/" + String(JSON.parse(localStorage.getItem('login')).user.UserId))
            .then((response) => {
                console.log(response.data[0]);
                setDetails(response.data[0]);
            })
    }, [])
    return (
        <div>
            <Header_Menu />
            <div class="background">
                <div class="container11">
                    <div class="screen">
                        <div class="screen-body">
                            <div class="screen-body-item left">
                                <div class="app-title">

                                    <span>CONTACT</span>
                                    <span>US</span>
                                </div>
                                <div class="app-contact"></div>
                            </div>
                            {details.map((e) => {
                                return (
                                    <div class="screen-body-item">
                                        <div class="app-form">
                                            <div class="app-form-group">
                                                <input class="app-form-control" placeholder="NAME" value={e.FirstName} />
                                            </div>
                                            <div class="app-form-group">
                                                <input class="app-form-control" placeholder="EMAIL" value={e.EmailId} />
                                            </div>
                                            <div class="app-form-group">
                                                <input class="app-form-control" placeholder="CONTACT NO" value={e.MobileNo} />
                                            </div>
                                            <div class="app-form-group message">
                                                <input class="app-form-control" placeholder="MESSAGE" required />
                                            </div>
                                            <div class="app-form-group buttons">
                                                <button class="app-form-button">CANCEL</button>
                                                <a href="mailto:cod.callofduty@gmail.com" target="_blank">&nbsp;&nbsp;
                                                    <button class="app-form-button">SEND</button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Contact;