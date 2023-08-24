import { Link } from "react-router-dom";

function CampaignsCard(props) {

    const {
        id,
        title,
        description,
        image_url
    } = props

    const linkStyle = {
        backgroundColor: "#4CAF50",
        border: "none",
        color: "white",
        padding: "7px 16px",
        margin: "1rem",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px"
    };

    return(
        <div className="campaignCard">
            <h2>{title}</h2>
            <img src={image_url} alt="campaign img"/>
            <p>{description}</p>
            <div className="campaignCardPlay">
                <Link className="campaignCardPlay" style={linkStyle} to={`/campaigns/${id}`}>Play</Link>
            </div>
        </div>
    )
}

export default CampaignsCard