import { useState } from 'react'

function CurrentCampaign({campaign}) {
    const [message, setMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    const {
        id,
        title,
        image_url,
        description
    } = campaign

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.target.message.value = '';
      
        await fetch("/messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: message,
          campaign_id: id,
          character_id: 1
        })
      }

    return(
        <div>
            <h2>{title}</h2>
            <img src={image_url} alt="campaign img"/>
            <p>{description}</p>        
            <div>
                <h2>here is message box</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="message"
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button type="submit">{isLoading ? "Loading..." : "Send"}</button>

                </form>
            </div>
        </div>
    )
}

export default CurrentCampaign