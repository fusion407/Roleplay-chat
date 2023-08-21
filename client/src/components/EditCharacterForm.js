import { useState } from 'react'
import { useNavigate  } from "react-router-dom";
import Error from './Error'

function EditCharacterForm({myCharacters, setMyCharacters, selectedCharacter, setSelectedCharacter}) {
    const [name, setName] = useState(selectedCharacter.name)
    const [race, setRace] = useState(selectedCharacter.race)
    const [characterClass, setCharacterClass] = useState(selectedCharacter.character_class)
    const [isLoading, setIsLoading] = useState('')
    const [errors, setErrors] = useState('')
    const navigate = useNavigate();


    function onUpdateCharacter(updatedCharacter) {
        const updateCharacter = myCharacters.map((character) =>
            character.id === updatedCharacter.id ? updatedCharacter : character
        );
        setMyCharacters(updateCharacter)
        setSelectedCharacter('')
        navigate('/characters')
        alert("Character has been updated!")
    }
    
    async function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);

        await fetch(`/characters/${selectedCharacter.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name : name,
            race : race,
            character_class : characterClass
          }),
        }).then((r) => {
        setIsLoading(false);
          if (r.ok) {
            r.json().then((updatedCharacter) => onUpdateCharacter(updatedCharacter));
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
      }
    return(
        <div>
            <h1>Edit Character</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  autoComplete="off"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="race">Race</label>
                <input
                  type="race"
                  id="race"
                  autoComplete="off"
                  value={race}
                  onChange={(e) => setRace(e.target.value)}
                />
                <label htmlFor="characterClass">Class</label>
                <input
                  type="characterClass"
                  id="characterClass"
                  autoComplete="off"
                  value={characterClass}
                  onChange={(e) => setCharacterClass(e.target.value)}
                />
                <button type="submit">{isLoading ? "Loading..." : "Submit"}</button>
                <div>
                    {errors ? errors.map((error) => <Error error={error}/>) : ""}
                </div>
            </form>
        </div>
    )
}

export default EditCharacterForm