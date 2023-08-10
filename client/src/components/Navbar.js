import React, { useContext} from 'react'
import { Link } from "react-router-dom";
import { UserContext } from '../contexts/UserContext'


function Navbar({handleLogout}) {
    const {user} = useContext(UserContext)


    return(
        <header>
            <div>
                <Link to="/">Home</Link>
                <Link to="/campaigns">Campaigns</Link>
                <Link to="/campaigns/new">New Campaign</Link>
                <div>
                  {user ? (
                    <>
                      <Link to="/profile">Profile</Link>
                      <button onClick={handleLogout}>Logout</button>
                    </>
                  ) : (
                    <>
                      <Link to="/signup">Sign up</Link>
                      <Link to="/login">Login</Link>
                    </>
                  )}
                </div>
            </div>
        </header>
    )
}

export default Navbar