import CampaignsList from './CampaignsList'

function Campaigns({campaigns}) {

    return(
        <div>
            <div>
              <h1>Choose your adventure!</h1>
              {campaigns ? <CampaignsList campaigns={campaigns} />: "Loading..."}
            </div>
        </div>
    )
}

export default Campaigns