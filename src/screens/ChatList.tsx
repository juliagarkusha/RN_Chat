// External deps
import React, { FC } from "react";
import { FlatList } from "react-native";

// Internal deps
import useChats from "../hooks/useChats";
import ChatItem from "../components/common/Chat/ChatItem";

const ChatList: FC = () => {
    const { chatsData } = useChats();

    return (
        <FlatList
            data={chatsData}
            renderItem={({item}) => {
                return (
                    <ChatItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        members={item.members}
                        isChannel={item.isChannel}
                        isPrivate={item.isPrivate}
                        unreadMessagesCount={item.unreadMessagesCount}
                        lastMessageBody={item.lastMessage.body}
                        lastMessageDate={item.lastMessage.date}
                        removed={item.removed}
                    />
                )
            }}
        />
    )
}

export default ChatList;
