import React, { useState, useContext, useEffect } from 'react'
import { CableContext } from '../contexts/cable';
import { UserContext } from '../contexts/UserContext'
// import Error from './Error'


function CurrentCampaign({campaign, playerCharacter}) {
    const [messages, setMessages] = useState('')
    const [message, setMessage] = useState('')
    const cableContext = useContext(CableContext)

    // const [isLoading, setIsLoading] = useState(false);
    // const [errors, setErrors] = useState(false);

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
        // setIsLoading(true)
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
        // }).then((r) => {
        //     setIsLoading(false);
        //     if (r.ok) {
        //         r.json().then((message) => setMessages([...messages, message]))
        //     } else {
        //         r.json().then((err) => setErrors(err.errors))
        //     }
           });
           newChannel.send({body: message, character: playerCharacter})
      };
    
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
                    <h3>{name}, {race} {character_class}. Campaign id: {campaign.id}</h3>
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
                    {/* <div>
                        {errors ? errors.map((error) => <Error key={error} error={error}/>) : ""}
                    </div> */}
                </form>
                {messages ? 
                    (
                    <div className="messages" id="messages">
                        {messages.map((message) => (
                            <div className="message" key={message.id}>
                                <p>{message.character.name} : {message.body}</p>
                            </div>
                        ))}
                    </div>
                    )
                    : 
                        ''
                }
            </div>

        </div>
    )
}

export default CurrentCampaign