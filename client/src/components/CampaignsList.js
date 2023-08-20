import CampaignsCard from "./CampaignsCard"

function CampaignsList({campaigns}) {


    const campaignData = campaigns.map((data) =>
        <CampaignsCard
            key={data.id}
            id={data.id}
            title={data.title}
            description={data.description}
            image_url={data.image_url}
        />
    )

    return(
        <div>
            {campaignData}
        </div>
    )
}

export default CampaignsList