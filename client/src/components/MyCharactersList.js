import MyCharactersCard from "./MyCharactersCard"

function MyCharactersList({myCharacters, setMyCharacters, setSelectedCharacter}) {


    const myCharactersData = myCharacters.map((data) =>
        <MyCharactersCard
            key={data.id}
            id={data.id}
            name={data.name}
            race={data.race}
            character_class={data.character_class}
            campaign={data.campaign}
            setMyCharacters={setMyCharacters}
            setSelectedCharacter={setSelectedCharacter}
        />
    )

    return(
        <div className="myCharacterList">
            {myCharactersData}
        </div>
    )
}

export default MyCharactersList