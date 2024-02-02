import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = ({ nav, close }) => {

    const [showNav, setShowNav] = useState(nav)

    const closeNav = () => {
        close()
    }

    return (
        <div className='Navbar'>
            <div className="flex-between top mb-4">
                <img src={logo} alt="logo" />
                <i onClick={closeNav} className='bx bx-x close'></i>
            </div>
            <div className="nav-list row">
                <button className='col-12'>Dashboard</button>
                <button className='col-12'>Timesheet</button>
                <button className='col-12'>Leave</button>
                <button className='col-12'>Work From Home</button>
                <button className='col-12'>Feedback</button>
                <button className='col-12'>Survey</button>
                <button className='col-12'>Service Desk</button>
                <button className='col-12'>Forms</button>
                <button className='col-12'>Travel</button>
                <button className='col-12'>Expenses</button>
                <button className='col-12'>Resourcing</button>
            </div>
            <div className="nav-bottom">
                <hr />
                <div className="flex-between">
                    <p>Dhiyanesh</p>
                    <i className='bx bx-log-out'></i>
                </div>
            </div>
        </div>
    )
}

export default Navbar