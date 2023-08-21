import { useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react";
import { UserContext } from '../contexts/UserContext'
import Error from './Error'


function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState();
    const {setUser} = useContext(UserContext)


    const [isLoading, setIsLoading] = useState(false);
    let navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        await fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
            password_confirmation: passwordConfirmation,
          }),
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
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
                <label htmlFor="password">Password Confirmation</label>
                <input
                  type="password"
                  id="password_confirmation"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  autoComplete="current-password"
                />
                <button type="submit">{isLoading ? "Loading..." : "Sign up"}</button>
                <div>
                    {errors ? errors.map((error) => <Error key={error} error={error}/>) : ""}
                </div>
            </form>
        </div>
    )
}

export default Signup