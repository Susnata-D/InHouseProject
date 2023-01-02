import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/Srmseal.png'
import './Navbar.css'

const Navbar = () => {

    var User = null;

    return (
        <nav className="Navbar">
            <div className="navbar-container">
                <Link to='/' className='nav-item nav-logo'>
                    <img src={logo} alt="logo" />
                </Link>
                <Link to='/' className='nav-item nav-btn'>Home</Link>
                <Link to='/request' className='nav-item nav-btn'>Requests</Link>
                <Link to='/response' className='nav-item nav-btn'>Response</Link>
                <Link to='/changePassword' className='nav-item nav-btn'>Change Password</Link>
                {User === null ?
                    <Link to='/Auth' className='nav-item nav-links'>Log in</Link> :
                    <button className='nav-item nav-links'>Log out</button>
                }
            </div>
        </nav>
    )
}

export default Navbar