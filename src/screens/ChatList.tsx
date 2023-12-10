// External deps
import React from "react";

// Internal deps
import chatsData from "../mocks/chats.json";
import ChatItem from "../components/Chat/ChatItem";

const ChatList = () => {
    return (
        <>
            {chatsData.map((chat) => {
                return (
                    <ChatItem
                        key={chat.id}
                        name={chat.name}
                        members={chat.members}
                        isChannel={chat.isChannel}
                        isPrivate={chat.isPrivate}
                        unreadMessagesCount={chat.unreadMessagesCount}
                        lastMessageBody={chat.lastMessage.body}
                        lastMessageDate={chat.lastMessage.date}
                        removed={chat.removed}
                    />
                )
            })}
        </>
    )
}

export default ChatList;
