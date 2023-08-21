import { UserContext } from '../contexts/UserContext'
import React, { useContext, useEffect, useState } from 'react'


function MyCharacters() {
    const [myCharacters, setMyCharacters] = useState('')
    const {user} = useContext(UserContext)

    useEffect(() => {
        // load campaign data
        fetch("/mycharacters").then((r) => {
          if (r.ok) {
            r.json().then((characters) => setMyCharacters(characters));
          }
        });
      }, []);

    console.log(myCharacters)

    return(
        <div>
            <div>
              <p>Welcome, {user.username}.</p>
            </div>
        </div>
    )
}

export default MyCharacters