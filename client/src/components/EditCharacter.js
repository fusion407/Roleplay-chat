import EditCharacterForm from "./EditCharacterForm"

function EditCharacter({myCharacters, setMyCharacters, selectedCharacter}) {



    return(
        <div>
            {selectedCharacter ? <EditCharacterForm myCharacters={myCharacters} setMyCharacters={setMyCharacters} selectedCharacter={selectedCharacter}/> : ''}
        </div>
    )
}

export default EditCharacter