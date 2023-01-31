import { React, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function ProtectedStudent(props) {
    const { Component } = props
    const navigate = useNavigate()
    useEffect(() => {
        let login = localStorage.getItem('login');
        let loginType;
        // console.log(!login);
        if (login) {
            let loginType = JSON.parse(localStorage.getItem('login'))["user"].TypeId;
            if (loginType === 1) {
                navigate('/institute');
            }
            else if (loginType === 0) {
                navigate('/admin')
            }
        }
        if (!login) {
            navigate('/landing')
        }
    })

    return (
        <div>
            <Component />
        </div>
    )
}

export default ProtectedStudent;