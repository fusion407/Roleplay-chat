function MessageItem({body, character}) {
    return(
        <ul>
            <li>{character.name} : {body}</li>
        </ul>
    )
}

export default MessageItem