import MyCharactersList from './MyCharactersList'
import { UserContext } from '../contexts/UserContext'
import { CharacterContext } from '../contexts/CharacterContext'
import React, { useContext, useEffect, useState } from 'react'


function MyCharacters({myCharacters, setMyCharacters, setSelectedCharacter}) {

    const {user} = useContext(UserContext)



    return(
        <div>
            <div>
              <p>Welcome, {user.username}.</p>
              <div>
                {myCharacters ? <MyCharactersList 
                                    myCharacters={myCharacters} 
                                    setMyCharacters={setMyCharacters} 
                                    setSelectedCharacter={setSelectedCharacter}
                                    /> : ''}
              </div>
            </div>
        </div>
    )
}

export default MyCharacters