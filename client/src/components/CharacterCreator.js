import { useState } from 'react'
import Error from './Error'

function CharacterCreator({campaign, setPlayerCharacter}) {
    const [name, setName] = useState('')
    const [race, setRace] = useState('')
    const [characterClass, setCharacterClass] = useState('')

    const [isLoading, setIsLoading] = useState()
    const [errors, setErrors] = useState('')


    function onCreateNewCharacter(character) {
        setPlayerCharacter(character)
    }
    async function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        
        await fetch("/characters", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            name: name, 
            race: race,
            character_class: characterClass,
            campaign_id: campaign.id 
        }),
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            r.json().then((character) => onCreateNewCharacter(character));
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
      }

    return(
        <div>
            <h1 className='campaignListTitle'>Create new character</h1>
            <div className='campaignInfoBanner'>
                <h2>{campaign.title}</h2>
                <img src={campaign.image_url}></img>
                <p>{campaign.description}</p>
            </div>
            <form className="characterForm" onSubmit={handleSubmit}>
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
                <button className='submitButton' type="submit">{isLoading ? "Loading..." : "Create"}</button>
                <div>
                    {errors ? errors.map((error) => <Error key={error} error={error}/>) : ""}
                </div>
            </form>
        </div>
    )
}

export default CharacterCreator