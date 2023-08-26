import React, { useState, useContext, useEffect } from 'react'
import { CableContext } from '../contexts/cable';
import Error from './Error'
import MessageList from './MessageList'


function CurrentCampaign({campaign, playerCharacter}) {
    const [messages, setMessages] = useState('')
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState(false);

    const cableContext = useContext(CableContext)


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
      
    function sendPostAndSocketResponse(data) {
        newChannel.send({
            id: data.id,
            key: data.id,
            body: data.body,
            // campaign_id: campaign.id,
            // character_id: playerCharacter.id,
            character: playerCharacter
        })
    }

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        e.target.message.value = "";
        await fetch("/messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
                key: message.id,
                body: message,
                campaign_id: campaign.id,
                character_id: playerCharacter.id,
           }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((data) => sendPostAndSocketResponse(data))
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
           });
      };
    
      const newChannel = cableContext.cable.subscriptions.create({
        channel: "CampaignChannel",
        campaign_id: campaign.id
      },
      {
        received: (data) => setMessages([...messages, data]),

        connected() {
            console.log("Connected to CampaignChannel, room: " + campaign.id)
        }
      })

      const fetchMessages = async () => {
        const response = await fetch(`/campaigns/${campaign.id}/messages`);
        const data = await response.json();
        setMessages(data);
      };
    
    

    return(
        <div>
            <div className='campaignInfoBanner'>
                <h2>{title}</h2>
                <img src={image_url} alt="campaign img"/>
                <p>{description}</p>  
            </div>      
            <div className='campaignCharacterBox'>
                <h2>Character:</h2>
                {playerCharacter ? 
                    <h3>{name}, {race} {character_class}</h3>
                    :
                    ''
                }
            </div>
            <div className='chatBox'>
                <h2>Chat:</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="message"
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button type="submit">Send</button>
                    <div>
                        {errors ? errors.map((error) => <Error key={error} error={error}/>) : ""}
                    </div>
                </form>
                {messages ? <MessageList messages={messages} /> : ''}
            </div>

        </div>
    )
}

export default CurrentCampaign