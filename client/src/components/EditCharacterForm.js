import { useState } from 'react'
import { useNavigate  } from "react-router-dom";

function EditCharacterForm({myCharacters, setMyCharacters, selectedCharacter, setSelectedCharacter}) {
    const [name, setName] = useState(selectedCharacter.name)
    const [race, setRace] = useState(selectedCharacter.race)
    const [characterClass, setCharacterClass] = useState(selectedCharacter.character_class)
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
    
    function handleUpdate(e) {
        e.preventDefault();
        fetch(`/characters/${selectedCharacter.id}`, {
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
            <h2>{name}</h2>
            <p>user id: {selectedCharacter.id}</p>
            <p>race: {race}</p>
            <p>class: {characterClass}</p>
            <p>campaign id: {selectedCharacter.campaign.id}</p>
        </div>
    )
}

export default EditCharacterForm