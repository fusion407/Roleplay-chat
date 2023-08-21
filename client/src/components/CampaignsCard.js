import { Link } from "react-router-dom";

function CampaignsCard(props) {

    const {
        id,
        title,
        description,
        image_url
    } = props

    return(
        <>
            <h2>{title}</h2>
            <img src={image_url} alt="campaign img"/>
            <p>{description}</p>
            <div>
                <Link to={`/campaigns/${id}`}>Play</Link>
            </div>
        </>
    )
}

export default CampaignsCard