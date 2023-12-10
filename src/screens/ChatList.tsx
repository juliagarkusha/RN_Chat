// External deps
import React from "react";
import {SafeAreaView, StyleSheet} from "react-native";

// Internal deps
import { CONSTANTS } from "../theme/constants";
import chatsData from "../mocks/chats.json";
import ChatItem from "../components/Chat/ChatItem";

const ChatList = () => {
    return (
        <SafeAreaView style={styles.list}>
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
                    />
                )
            })}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    list: {
        marginVertical: CONSTANTS.GAP,
    },
});

export default ChatList;
