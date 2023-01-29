import { React,useEffect } from "react";
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
        }
        if (!login) {
            navigate('/landing')
            // window.location.reload();
        }
        if (login) {
            if (loginType === 1) {
                navigate('/institute');
            }
        }
    })

    return (
        <div>
            <Component />
        </div>
    )
}

export default ProtectedStudent;