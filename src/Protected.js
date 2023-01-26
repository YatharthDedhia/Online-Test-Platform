import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Protected(props){
    const {Component} = props
    const navigate = useNavigate()
    useEffect(()=>{
        let login = localStorage.getItem('login');
        if(!login)
        {
            navigate('/landing')
        }
    })

    return(
        <div>
            <Component/>
        </div>
    )
}

export default Protected;