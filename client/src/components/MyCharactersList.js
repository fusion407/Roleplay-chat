import MyCharactersCard from "./MyCharactersCard"

function MyCharactersList({myCharacters}) {


    const myCharactersData = myCharacters.map((data) =>
        <MyCharactersCard
            key={data.id}
            id={data.id}
            name={data.name}
            race={data.race}
            character_class={data.character_class}
            campaign_id={data.campaign_id}
        />
    )

    return(
        <div>
            {myCharactersData}
        </div>
    )
}

export default MyCharactersList