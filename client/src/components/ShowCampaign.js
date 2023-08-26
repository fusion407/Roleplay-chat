import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CurrentCampaign from './CurrentCampaign';
import CharacterCreator from './CharacterCreator';


function ShowCampaign({myCharacters, setMyCharacters}) {
    const [campaign, setCampaign] = useState('')
    const [playerCharacter, setPlayerCharacter] = useState()
    let {campaignId} = useParams();

    
    useEffect(() => {
        fetch(`/campaigns/${campaignId}`).then((r) => {
          if (r.ok) {
            r.json().then((data) => checkForAvailableCharacter(data));
          }
        });
      }, []);

    function checkForAvailableCharacter(data) {
        if(!data.user) {
            setCampaign(data)
        } else { 
            setCampaign(data.campaign)
            setPlayerCharacter(data)
        }
    }

    return(
        <div>
            {playerCharacter ? 
                campaign ? <CurrentCampaign  campaign={campaign} playerCharacter={playerCharacter}/> : 'Loading...'
            :
                campaign ? <CharacterCreator 
                                campaign={campaign} 
                                myCharacters={myCharacters} 
                                setMyCharacters={setMyCharacters} 
                                setPlayerCharacter={setPlayerCharacter} 
                            /> 
                            : 'Loading...'
            }
        </div>
    )
}

export default ShowCampaign