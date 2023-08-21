import { Link } from "react-router-dom";

function MyCharactersCard(props) {

    const {
        // id,
        name,
        race,
        character_class,
        campaign_id
    } = props

    return(
        <div>
            <h2>{name}</h2>
            {/* <p>id: {id}</p> */}
            <p>race: {race}</p>
            <p>class: {character_class}</p>
            <p>campaign id: {campaign_id}</p>
        </div>
    )
}

export default MyCharactersCard