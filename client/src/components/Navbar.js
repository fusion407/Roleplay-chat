import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import { UserContext } from '../contexts/UserContext'


function Navbar({handleLogout}) {

    const {user} = useContext(UserContext)

    return(
        <header>
            <div className="navBar">
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