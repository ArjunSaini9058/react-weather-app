import React from 'react'
import './Start.css'
import {useNavigate } from 'react-router-dom'
const Start = () => {
    const navigate=useNavigate();
    const navigateHome=()=>{
        navigate('/home');
    }
    return (
        <div className='box'>
        <h2 className='item1'>WEATHER</h2>
        <div className='item2'><button onClick={navigateHome}  className='getstart'><h4>Get Started</h4></button></div> 
    </div>
    )
}

export default Start