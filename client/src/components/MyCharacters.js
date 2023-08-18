import { UserContext } from '../contexts/UserContext'
import React, { useContext} from 'react'


function MyCharacters() {
    const {user} = useContext(UserContext)


    return(
        <div>
            <div>
              <p>Welcome, {user.username}.</p>
            </div>
        </div>
    )
}

export default MyCharacters