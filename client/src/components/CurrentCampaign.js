import React, { useState, useContext, useEffect } from 'react'
import { CableContext } from '../contexts/cable';
import { UserContext } from '../contexts/UserContext'

// const ws = new WebSocket("ws://localhost:3000/cable");

function CurrentCampaign({campaign, playerCharacter}) {
    const [messages, setMessages] = useState('')
    const [message, setMessage] = useState('')

    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState(false);
    const cableContext = useContext(CableContext)
    const { user } = useContext(UserContext)

    const {
        title,
        image_url,
        description,
    } = campaign

    const {
        name,
        race,
        character_class,
    } = playerCharacter  

    
      useEffect(() => {
        fetchMessages();
      }, []);
      
    const newChannel = cableContext.cable.subscriptions.create({
      channel: "CampaignChannel",
      campaign_id: campaign.id
    },
    {
      received: (data) => setMessages([...messages, data])
    })


    
    const handleSubmit = async (e) => {
        e.preventDefault();
        e.target.message.value = "";
        await fetch("/messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
                body: message,
                campaign_id: campaign.id,
                character_id: playerCharacter.id,
           }),
        });
        newChannel.send({body: message, campaign_id: campaign.id, character_id: playerCharacter.id})
      };
    
      const fetchMessages = async () => {
        const response = await fetch(`/campaigns/${campaign.id}/messages`);
        const data = await response.json();
        setMessages(data);
      };
    
    

    return(
        <div>
            <h2>{title}</h2>
            <img src={image_url} alt="campaign img"/>
            <p>{description}</p>        
            <div>
                <h2>Character:</h2>
                {playerCharacter ? 
                    <h3>{name}, {race} {character_class}. Campaign id: {campaign.id}</h3>
                    :
                    ''
                }
                <h2>Chat:</h2>
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
            {messages ? 
                (
                <div className="messages" id="messages">
                    {messages.map((message) => (
                    <div className="message" key={message.id}>
                    <p>{message.body}</p>
                    </div>
                    ))}
                </div>
                )
                : 
                ''
            }

        </div>
    )
}

export default CurrentCampaign