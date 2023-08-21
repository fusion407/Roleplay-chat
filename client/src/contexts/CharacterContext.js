import { useState, useEffect, createContext } from 'react'

const CharacterContext = createContext();

function CharacterProvider({children}) {
    const [myCharacters, setMyCharacters] = useState(null);

    useEffect(() => {
        // auto-fetch charactors
        fetch("/mycharacters").then((r) => {
          if (r.ok) {
            r.json().then((character) => setMyCharacters(character));
          }
        });
      }, []);

    return <CharacterContext.Provider value={{myCharacters, setMyCharacters}}>{children}</CharacterContext.Provider>
}
export { CharacterContext, CharacterProvider}