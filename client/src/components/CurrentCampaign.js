import { useState } from 'react'

function CurrentCampaign({campaign, character}) {
    const [message, setMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState(false);

    const {
        id,
        title,
        image_url,
        description,
    } = campaign

    // const {
    //     name,
    //     race,
    //     character_class
    // } = character


    function handleSubmit(e) {
        e.preventDefault();

        console.log(message)
        console.log("campaign id: " + id)
        // setIsLoading(true);
        // fetch("/messages", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({ 
        //     body: message, 
        //     campaign_id: id,
        //     character_id : 1,
        //  }),
        // }).then((r) => {
        //   setIsLoading(false);
        //   if (r.ok) {
        //     r.json().then((data) => console.log(data));
        //   } else {
        //     r.json().then((err) => setErrors(err.errors));
        //   }
        // });
      }

    return(
        <div>
            <h2>{title}</h2>
            <img src={image_url} alt="campaign img"/>
            <p>{description}</p>        
            <div>
                <h2>Character:</h2>
                {character ? 
                    <h3>{character.name}, {character.race} {character.character_class}</h3>
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
        </div>
    )
}

export default CurrentCampaign