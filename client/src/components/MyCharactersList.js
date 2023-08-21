import MyCharactersCard from "./MyCharactersCard"

function MyCharactersList({myCharacters, setMyCharacters}) {


    const myCharactersData = myCharacters.map((data) =>
        <MyCharactersCard
            key={data.id}
            id={data.id}
            name={data.name}
            race={data.race}
            character_class={data.character_class}
            campaign={data.campaign}
            setMyCharacters={setMyCharacters}
            myCharacters={myCharacters}
        />
    )

    return(
        <div>
            {myCharactersData}
        </div>
    )
}

export default MyCharactersList