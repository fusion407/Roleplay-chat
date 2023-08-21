import { Link } from "react-router-dom";

function MyCharactersCard(props) {

    const {
        id,
        name,
        race,
        character_class,
        campaign
    } = props

    // todo:
    // implement Edit and Delete button
    // Make EditCharacter component for user to be directed to by clicking edit
    // include a link to characters campaign page


    function handleEdit(e) {
        e.preventDefault()
        console.log("edit button clicked")
    }
    function handleDelete(e) {
        e.preventDefault()
        console.log("delete button clicked")
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
                <Link to={`/campaigns/${campaign.id}`}>Join</Link>
            </div>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>

        </>
    )
}

export default MyCharactersCard