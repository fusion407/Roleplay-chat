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
            <Link to={`/campaigns/${id}`}>Join</Link>
        </>
    )
}

export default CampaignsCard