import MessageItem from "./MessageItem"

function MessageList({messages}) {


    const messageData = messages.map((message) => 
      <MessageItem 
        id={message.id}
        key={message.id}
        body={message.body}
        character={message.character}
      />
    )

    return(
        <div className="messages">
            {messageData}
        </div>
    )
}

export default MessageList