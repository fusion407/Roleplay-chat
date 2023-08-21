import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CurrentCampaign from './CurrentCampaign';
import CharacterCreator from './CharacterCreator';


function ShowCampaign({myCharacters, setMyCharacters}) {
    const [campaign, setCampaign] = useState('')
    const [playerCharacter, setPlayerCharacter] = useState()
    let {campaignId} = useParams();

    // database will check if user has existing character in selected campaign
    // if user has no playable character, data for campaign is returned
    // if user has an existing character, then data for that character is returned
    useEffect(() => {
        fetch(`/campaigns/${campaignId}`).then((r) => {
          if (r.ok) {
            r.json().then((data) => checkForAvailableCharacter(data));
          }
        });
      }, []);

    function checkForAvailableCharacter(data) {
        // if there is no 'user' attached to returned JSON, then user has no playable character
        // set campaigns state from returned data and prompt user to create a new character
        if(!data.user) {
            console.log("no characters, lets create a new one")
            setCampaign(data)
        } else {    // data for a playable character was returned
            console.log("character found, have fun!")
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