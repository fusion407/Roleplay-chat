import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import { UserContext } from '../contexts/UserContext'

// material ui
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';



function Navbar({handleLogout}) {

    const {user} = useContext(UserContext)



    return(
        <header>
            <div className="navBar">
                {/* original nav */}
                <ul className='navUl'>
                    <li className="navList"><Link className="navLink" to="/">Home</Link></li>
                    <li className="navList"><Link className="navLink" to="/campaigns">Campaigns</Link></li>
                    <li className="navList"><Link className="navLink" to="/campaigns/new">New Campaign</Link></li>
                    {user ? (
                      <div className="logButtons">
                        <li className="navList"><Link className="navLink" to="/characters">My Characters</Link></li>
                        <li className="navList"><button className="logoutButton" onClick={handleLogout}>Logout</button></li>
                      </div>
                    ) : (
                      <div className="logButtons">
                        <li className="navList"><Link className="navLink" to="/signup">Sign up</Link></li>
                        <li className="navList"><Link className="navLink" to="/login">Login</Link></li>
                      </div>
                    )}
                </ul>
            </div>
        </header>
    )
}

export default Navbar