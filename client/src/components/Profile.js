import { UserContext } from '../contexts/UserContext'
import React, { useContext} from 'react'


function Profile() {
    const {user} = useContext(UserContext)


    return(
        <div>
            <div>
              <p>Welcome, {user.username}.</p>
            </div>
        </div>
    )
}

export default Profile