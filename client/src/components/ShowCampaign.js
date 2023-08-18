import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CurrentCampaign from './CurrentCampaign';
import CharacterCreator from './CharacterCreator';


function ShowCampaign() {
    const [campaign, setCampaign] = useState()
    const [character, setCharacter] = useState()
    // const [isNewPlayer, setIsNewPlayer] = useState('')
    let {campaignId} = useParams();

    useEffect(() => {
        fetch(`/campaigns/${campaignId}`).then((r) => {
          if (r.ok) {
            r.json().then((data) => checkAvailableCharacters(data));
          }
        });
      }, []);

    function checkAvailableCharacters(data) {
        if(!data.user) {
            console.log("no characters, lets create a new one")
            // setIsNewPlayer(true)
            setCampaign(data)
        } else {
            console.log("character found, have fun!")
            // setIsNewPlayer(false)
            setCampaign(data.campaign)
            setCharacter(data)
        }
    }

    return(
        <div>
            {!character ? 
                <CharacterCreator campaign={campaign} setCharacter={setCharacter} />
            :
                campaign ? <CurrentCampaign character={character} campaign={campaign}/> : 'Loading...'
            }
        </div>
    )
}

export default ShowCampaign