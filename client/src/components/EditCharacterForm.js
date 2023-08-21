function EditCharacterForm({myCharacters, setMyCharacters, selectedCharacter}) {

    const {
        id,
        name,
        race,
        character_class,
        campaign
    } = selectedCharacter

    console.log(myCharacters)

    return(
        <div>
            <h1>Edit Character</h1>
            <h2>{name}</h2>
            <p>user id: {id}</p>
            <p>race: {race}</p>
            <p>class: {character_class}</p>
            <p>campaign id: {campaign.id}</p>
        </div>
    )
}

export default EditCharacterForm