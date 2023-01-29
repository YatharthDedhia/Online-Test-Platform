import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function ProtectedLanding(props) {
    const { Component } = props
    const navigate = useNavigate()
    useEffect(() => {
        let login = localStorage.getItem('login')
        let loginType;
        
        if (login) {
            let loginType = JSON.parse(localStorage.getItem('login'))["user"].TypeId;
            if (loginType === 1) {
                navigate('/institute')
            }
            else if (loginType === 2) {
                navigate('/dashboard');
            }
        }

    })

    return (
        <div>
            <Component />
        </div>
    )
}

export default ProtectedLanding;