function CampaignsCard(props) {
    const {
        title,
        description,
        image_url
    } = props
    return(
        <div>
            <h2>{title}</h2>
            <p>{image_url}</p>
            <p>{description}</p>
            {/* when user joins campaign, backend will check if user owns character on chosen campaign */}
            {/* if no character exists, prompt to create new character for this campaign, else proceed to chatroom */}
            <button>Join Campaign</button>
        </div>
    )
}

export default CampaignsCard