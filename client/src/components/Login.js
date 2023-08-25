import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../contexts/UserContext'


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const {setUser} = useContext(UserContext)
    let navigate = useNavigate();

    
    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            r.json().then((user) => setUser(user));
            navigate("/");
          } else {
            r.json().then((err) => setErrors(err.error));
          }
        });
      }

    return(
        <div className='formBox'>
            <form className="loginSignupForms" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  autoComplete="off"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="submitButton" type="submit">{isLoading ? "Loading..." : "Login"}</button>
                <div>
                  {errors ? errors : ""}
                </div>
            </form>
        </div>
    )
}

export default Login