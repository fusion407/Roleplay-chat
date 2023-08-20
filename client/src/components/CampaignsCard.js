import { Link } from "react-router-dom";

function CampaignsCard(props) {

    const {
        id,
        title,
        description,
        image_url
    } = props

    return(
        <div>
            <h2>{title}</h2>
            <img src={image_url} alt="campaign img"/>
            <p>{description}</p>
            <Link to={`/campaigns/${id}`}>Join Campaign</Link>
        </div>
    )
}

export default CampaignsCard