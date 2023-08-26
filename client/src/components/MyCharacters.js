import MyCharactersList from './MyCharactersList'
import React, { useEffect } from 'react'


function MyCharacters({myCharacters, setMyCharacters, setSelectedCharacter}) {
    
    useEffect(() =>  {
        fetch("/mycharacters").then((r) => {
          if (r.ok) {
            r.json().then((characters) => setMyCharacters(characters));
          }
        });
      }, []);
    return(
        <div>
            <div>
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