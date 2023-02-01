import React from "react";
import { useState, useEffect } from "react";
import './css/contact.css'
import axios from "axios";
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
            <div class="background">
                <div class="container11">
                    <div class="screen">
                        <div class="screen-header">
                            <div class="screen-header-left">
                                <div class="screen-header-button close"></div>
                                <div class="screen-header-button maximize"></div>
                                <div class="screen-header-button minimize"></div>
                            </div>
                            <div class="screen-header-right">
                                <div class="screen-header-ellipsis"></div>
                                <div class="screen-header-ellipsis"></div>
                                <div class="screen-header-ellipsis"></div>
                            </div>
                        </div>
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
                                        <input class="app-form-control" placeholder="NAME" value={e.FirstName}/>
                                    </div>
                                    <div class="app-form-group">
                                        <input class="app-form-control" placeholder="EMAIL" value={e.EmailId}/>
                                    </div>
                                    <div class="app-form-group">
                                        <input class="app-form-control" placeholder="CONTACT NO" value={e.MobileNo}/>
                                    </div>
                                    <div class="app-form-group message">
                                        <input class="app-form-control" placeholder="MESSAGE" required/>
                                    </div>
                                    <div class="app-form-group buttons">
                                        <button class="app-form-button">CANCEL</button>
                                        <a href="mailto:cod.callofduty@gmail.com" target="_blank">&nbsp;&nbsp;
                                        <button class="app-form-button">SEND</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            )})}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Contact;