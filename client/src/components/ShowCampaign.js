import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CurrentCampaign from './CurrentCampaign';


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
            setCampaign(data)
            setIsNewPlayer(true)
        } else {
            console.log("character found")
            setCampaign(data[0].campaign)
            setCharacter(data[0])
            setIsNewPlayer(false)
        }
    }

    return(
        <div>
            {isNewPlayer ? 
                'here is character creation component'
            :
                campaign ? <CurrentCampaign campaign={campaign}/> : ''
            }
        </div>
    )
}

export default ShowCampaign