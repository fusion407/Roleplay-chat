function MessageItem({id, body, character}) {
    return(
        <ul>
            <li>{id}: {character.name} : {body}</li>
        </ul>
    )
}

export default MessageItem