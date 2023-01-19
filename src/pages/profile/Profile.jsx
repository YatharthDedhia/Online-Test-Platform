
// import React from "react";
import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import './css/profile.css'
import './css/menubox.css'
import './css/line-chart.css'
const Header_Menu = () => {
    return (
        <header class="block">
            <ul class="header-menu horizontal-list">
                <li>
                    <a class="header-menu-tab" href="#1"><span class="icon entypo-cog scnd-font-color"></span>Settings</a>
                </li>
                <li>
                    <a class="header-menu-tab" href="#2"><span class="icon fontawesome-user scnd-font-color"></span>Account</a>
                </li>
                <li>
                    <a class="header-menu-tab" href="#3"><span class="icon fontawesome-envelope scnd-font-color"></span>Questions</a>
                    <a class="header-menu-number" href="#4">5</a>
                </li>
                <li>
                    <a class="header-menu-tab" href="#5"><span class="icon fontawesome-star-empty scnd-font-color"></span>Solutions</a>
                </li>
            </ul>
            <div class="profile-menu">
                <p>Me <a href="#26"><span class="entypo-down-open scnd-font-color"></span></a></p>
                <div class="profile-picture small-profile-picture">
                    <img width="40px" alt="Anne Hathaway picture" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
                </div>
            </div>
        </header>

    );
};

const Profile_Menu = () => {
    return(
        <div class="profile-menu">
                 <p>Me <a href="#26"><span class="entypo-down-open scnd-font-color"></span></a></p>
                  <div class="profile-picture small-profile-picture">
                      <img width="40px" alt="Anne Hathaway picture" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
                  </div>
        </div>
    );
};

const Profile_Block = () => {
    return (
        <div class="profile block">
            <a class="add-button" href="#28"><span class="icon entypo-plus scnd-font-color"></span></a>
            <div class="profile-picture big-profile-picture clear">
                <img width="150px" alt="Anne Hathaway picture" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
            </div>
            <h1 class="user-name">Manav Shah</h1>
            <div class="profile-description">
                <p class="scnd-font-color">DSA GOD</p>
            </div>
            <ul class="profile-options horizontal-list">
                <li><a class="comments" href="#40"><p><span class="icon fontawesome-comment-alt scnd-font-color"></span>69</p></a></li>
                <li><a class="views" href="#41"><p><span class="icon fontawesome-eye-open scnd-font-color"></span>420</p></a></li>
                <li><a class="likes" href="#42"><p><span class="icon fontawesome-heart-empty scnd-font-color"></span>-69</p></a></li>
            </ul>
        </div>
    );
};
const Donut_Block = () => {
    return (
        <div class="donut-chart-block block">
            <h2 class="titular">OS AUDIENCE STATS</h2>
            <div class="donut-chart">
                <div id="porcion1" class="recorte"><div class="quesito ios" data-rel="21"></div></div>
                <div id="porcion2" class="recorte"><div class="quesito mac" data-rel="39"></div></div>
                <div id="porcion3" class="recorte"><div class="quesito win" data-rel="31"></div></div>
                <div id="porcionFin" class="recorte"><div class="quesito linux" data-rel="9"></div></div>
                <p class="center-date">JUNE<br><span class="scnd-font-color">2013</span></br></p>
            </div>
        </div>
    );
};
const Menu_Box = () => {
    return (
        <div class="menu-box block">
            {/* <!-- MENU BOX (LEFT-CONTAINER) --> */}
            <h2 class="titular">MENU BOX</h2>
            <ul class="menu-box-menu">
                <li>
                    <a class="menu-box-tab" href="#6"><span class="icon fontawesome-envelope scnd-font-color"></span>Messages<div class="menu-box-number">24</div></a>
                </li>
                <li>
                    <a class="menu-box-tab" href="#8"><span class="icon entypo-paper-plane scnd-font-color"></span>Invites<div class="menu-box-number">3</div></a>
                </li>
                <li>
                    <a class="menu-box-tab" href="#10"><span class="icon entypo-calendar scnd-font-color"></span>Events<div class="menu-box-number">5</div></a>
                </li>
                <li>
                    <a class="menu-box-tab" href="#12"><span class="icon entypo-cog scnd-font-color"></span>Account Settings</a>
                </li>
                <li>
                    <a class="menu-box-tab" href="#13"><sapn class="icon entypo-chart-line scnd-font-color"></sapn>Statistics</a>
                </li>
            </ul>
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
                {/* <!-- END LINE-CHART by @kseso https://codepen.io/Kseso/pen/phiyL --> */}
                <ul class="time-lenght horizontal-list">
                    <li><a class="time-lenght-btn" href="#14">Week</a></li>
                    <li><a class="time-lenght-btn" href="#15">Month</a></li>
                    <li><a class="time-lenght-btn" href="#16">Year</a></li>
                </ul>
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

const Profile = () => {
    return (
        <div className='main-container'>

            <Header_Menu />
            <div className='container3'>
                <Profile_Block />
                {/* <Donut_Block/> */}
                <Menu_Box />
                <Line_Graph />
            </div>
        </div>
    );
};
export default Profile;
