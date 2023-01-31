import { React, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function ProtectedTest(props) {
    const { Component } = props
    const navigate = useNavigate()
    useEffect(() => {
        let login = localStorage.getItem('login');
        let loginType;
        if (login) {
            let loginType = JSON.parse(localStorage.getItem('login'))["user"].TypeId;
            if (loginType === 1) {
                navigate('/institute');
            }
            else if (loginType === 0) {
                navigate('/admin')
            }
            if (!localStorage.getItem('papercode')) {
                navigate("/");
                window.location.reload();
            }
        }
        if (!login) {
            navigate('/landing')
            // window.location.reload();
        }
    })

    return (
        <div>
            <Component />
        </div>
    )
}

export default ProtectedTest;