import { React,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function ProtectedAdmin(props) {
    const { Component } = props
    const navigate = useNavigate()
    useEffect(() => {
        let login = localStorage.getItem('login');
        let loginType;
        if (login) {
            let loginType = JSON.parse(localStorage.getItem('login'))["user"].TypeId;
            if (loginType === 2) {
                navigate('/dashboard');
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

export default ProtectedAdmin;