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
        <>
            <div>
                <h2>{name}</h2>
                <p>id: {id}</p>
                <p>Race: {race}</p>
                <p>Class: {character_class}</p>
                <p>Campaign: {campaign.title}</p>
                <div>
                    <Link to={`/campaigns/${campaign.id}`}>Play</Link>
                </div>
            </div>
            <div>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </>
    )
}

export default MyCharactersCard