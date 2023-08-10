import { Link } from "react-router-dom";

function CampaignsCard(props) {
    const {
        id,
        title,
        description,
        image_url
    } = props

    function handleJoinCampaign(e) {
        e.preventDefault();
        console.log(e)
    }

    return(
        <div>
            <h2>{title}</h2>
            <img src={image_url} alt="campaign img"/>
            <p>{description}</p>
            {/* when user joins campaign, backend will check if user owns character on chosen campaign */}
            {/* if no character exists, prompt to create new character for this campaign, else proceed to chatroom */}
            <Link to={`/campaigns/${id}`}>Campaigns</Link>
        </div>
    )
}

export default CampaignsCard