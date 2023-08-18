import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CurrentCampaign from './CurrentCampaign';
import CharacterCreator from './CharacterCreator';


function ShowCampaign() {
    const [campaign, setCampaign] = useState()
    const [character, setCharacter] = useState()
    const [isNewPlayer, setIsNewPlayer] = useState(false)
    let {campaignId} = useParams();

    useEffect(() => {
        fetch(`/campaigns/${campaignId}`).then((r) => {
          if (r.ok) {
            r.json().then((data) => checkAvailableCharacters(data));
          }
        });
      }, []);

    function checkAvailableCharacters(data) {
        if(data.characters) {
            console.log("no characters")
            setIsNewPlayer(true)
            setCampaign(data)
        } else {
            console.log("character found")
            setIsNewPlayer(false)
            setCampaign(data[0].campaign)
            setCharacter(data[0])
        }
    }

    return(
        <div>
            {isNewPlayer ? 
                <CharacterCreator campaign={campaign}/>
            :
                campaign ? <CurrentCampaign character={character} campaign={campaign}/> : ''
            }
        </div>
    )
}

export default ShowCampaign