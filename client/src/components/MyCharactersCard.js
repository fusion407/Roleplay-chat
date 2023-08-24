import { Link, useNavigate  } from "react-router-dom";

function MyCharactersCard(props) {
    const navigate = useNavigate();

    const {
        id,
        name,
        race,
        character_class,
        campaign,
        setMyCharacters,
        setSelectedCharacter
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
    
    function handleEdit(e) {
        e.preventDefault()

        setSelectedCharacter(props)
        navigate(`/characters/${id}/edit`)

    }

    function onDeleteCharacter() {
        setMyCharacters((myCharacters) =>
        myCharacters.filter((character) => character.id !== id)
        );
      }
    function handleDelete(e) {
        e.preventDefault()

        fetch(`/characters/${id}`, {
            method: "DELETE",
          }).then((r) => {
            if (r.ok) {
              onDeleteCharacter();
            }
          });
    }

    return(
        <div className="myCharacterCard">
            <div>
                <h2>{name}</h2>
                <p>Race: {race}</p>
                <p>Class: {character_class}</p>
                <p>{campaign.title}</p>
                <div>
                    <Link style={linkStyle} to={`/campaigns/${campaign.id}`}>Play</Link>
                </div>
            </div>
            <div className="editDeleteButtons">
                <button className='myCharacterButtons' onClick={handleEdit}>Edit</button>
                <button className='myCharacterButtons' onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default MyCharactersCard