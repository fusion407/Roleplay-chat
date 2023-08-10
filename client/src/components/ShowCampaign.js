import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CurrentCampaign from './CurrentCampaign';


function ShowCampaign() {
    const [campaign, setCampaign] = useState()
    let {campaignId} = useParams();

    useEffect(() => {
        fetch(`/campaigns/${campaignId}`).then((r) => {
          if (r.ok) {
            r.json().then((campaign) => setCampaign(campaign));
          }
        });
      }, []);

    console.log(campaign)
    return(
        <div>
            {campaign ? 
                <CurrentCampaign campaign={campaign}/>
            :
                ''
            }
        </div>
    )
}

export default ShowCampaign