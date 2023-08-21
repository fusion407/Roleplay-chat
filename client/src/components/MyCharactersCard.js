import { Link } from "react-router-dom";

function MyCharactersCard({id, name, race, character_class, campaign, setMyCharacters}) {

    // const {
    //     id,
    //     name,
    //     race,
    //     character_class,
    //     campaign,
    //     setMyCharacters,
    //     myCharacters
    // } = props

    // todo:
    // Make EditCharacter component that will be displayed onClick of edit button
    // implement DELETE logic so character will be erased from the database 


    function handleEdit(e) {
        e.preventDefault()

        //debug
        console.log("edit button clicked")
        console.log("character to be edited: " + name + ", user id: " + id)
        // -------


    }
    // function onDelete() {
    //     setMyCharacters((myCharacters) => {
    //     return myCharacters.filter((character) => character.id !== id)
    //     });
    // }
    function onDeleteCharacter() {
        setMyCharacters((myCharacters) =>
        myCharacters.filter((character) => character.id !== id)
        );
      }
    function handleDelete(e) {
        e.preventDefault()

        //debug
        console.log("delete button clicked")
        console.log("character deleted: " + name + ", user id: " + id)
        // -------

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
                <p>user id: {id}</p>
                <p>race: {race}</p>
                <p>class: {character_class}</p>
                <p>campaign title: {campaign.title}</p>
                <p>campaign id: {campaign.id}</p>
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