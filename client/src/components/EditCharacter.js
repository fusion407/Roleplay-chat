import EditCharacterForm from "./EditCharacterForm"

function EditCharacter({myCharacters, setMyCharacters, selectedCharacter, setSelectedCharacter}) {



    return(
        <div>
            {selectedCharacter ? 
                <EditCharacterForm 
                    myCharacters={myCharacters} 
                    setMyCharacters={setMyCharacters} 
                    selectedCharacter={selectedCharacter}
                    setSelectedCharacter={setSelectedCharacter}
                /> : 'Loading...'}
        </div>
    )
}

export default EditCharacter