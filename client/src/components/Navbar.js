import { Link } from "react-router-dom";


function Navbar({handleLogout}) {
    return(
        <header>
            <div>
                <Link to="/">Home</Link>
                <Link to="/campaigns">Campaigns</Link>
                <Link to="/campaigns/new">New Campaign</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Login</Link>
                <button onClick={handleLogout}>Logout</button>

            </div>
        </header>
    )
}

export default Navbar