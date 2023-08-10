import CampaignsList from './CampaignsList'
import { useEffect, useState } from 'react'
function Campaigns() {
    const [campaigns, setCampaigns] = useState('')


    useEffect(() => {
        // load event data
        fetch("/campaigns").then((r) => {
          if (r.ok) {
            r.json().then((campaign) => setCampaigns(campaign));
          }
        });
      }, []);

    return(
        <div>
            <div>
              <h1>Campaign page.</h1>
              {campaigns ? <CampaignsList campaigns={campaigns} />: "Loading..."}
            </div>
        </div>
    )
}

export default Campaigns